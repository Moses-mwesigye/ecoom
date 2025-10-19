import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Order from './models/order.js';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(express.json());

// Prepare uploads directory and multer storage
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
  // Prefer orderId from the URL param (req.params.id). Fall back to form field.
  const orderIdRaw = (req.params && req.params.id) ? String(req.params.id) : ((req.body && req.body.orderId) ? String(req.body.orderId) : 'noorder');
  const orderId = orderIdRaw.replace(/[^a-zA-Z0-9-_]/g, '') || 'noorder';
    const phoneRaw = (req.body && req.body.phone) ? String(req.body.phone) : '';
    const phone = phoneRaw.replace(/[^0-9+]/g, '') || 'nophone';
    cb(null, `${orderId}-${phone}-${unique}${ext}`);
  }
});

const upload = multer({ storage });

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsDir));

// Basic health check route
app.get('/', (req, res) => {
  res.send('Order API is running');
});


// Connect to MongoDB with error handling
const PORT = process.env.PORT || 4000;
mongoose.connect('mongodb+srv://moses:3668nipple@cluster0.sfuivwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Express server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

// Submit order endpoint
app.post('/products/submit-order', async (req, res) => {
  try {
    const items = req.body.items || [];
    const total = req.body.total || items.reduce((s, it) => s + (it.price || 0) * (it.cartQuantity || 0), 0);
    const phone = req.body.phone || '';
    const order = new Order({ items, total, phone });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit order.' });
  }
});

// Upload payment screenshot and attach to order
app.post('/orders/:id/upload-payment', upload.single('screenshot'), async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });

    // Ensure order exists and get phone from saved order (preferred)
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found.' });

    // prefer phone stored on order; fall back to submitted phone
    const phoneRaw = (order.phone) ? String(order.phone) : ((req.body && req.body.phone) ? String(req.body.phone) : 'nophone');
    const phone = phoneRaw.replace(/[^0-9+]/g, '') || 'nophone';

    // Build new filename and move file so it contains orderId and phone
    const oldPath = path.join(uploadsDir, req.file.filename);
    const ext = path.extname(req.file.filename) || path.extname(req.file.originalname) || '';
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const safeOrderId = String(orderId).replace(/[^a-zA-Z0-9-_]/g, '') || 'noorder';
    const newFilename = `${safeOrderId}-${phone}-${unique}${ext}`;
    const newPath = path.join(uploadsDir, newFilename);

    // rename (move) the uploaded file
    await fs.promises.rename(oldPath, newPath);

    const imagePath = `/uploads/${newFilename}`;

    // update order payment info
    order.payment = {
      provider: req.body.provider || 'unknown',
      imagePath,
      uploadedAt: new Date()
    };
    await order.save();

    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload payment screenshot.' });
  }
});


// Endpoint to list all files in uploads folder
app.get('/admin/uploads', async (req, res) => {
  try {
    const files = await fs.promises.readdir(uploadsDir);
    // Build HTML table of file links
    let html = `<h1>Uploaded Files</h1><table border="1" cellpadding="8"><tr><th>Filename</th><th>Preview</th><th>Link</th></tr>`;
    for (const file of files) {
      const url = `/uploads/${file}`;
      html += `<tr><td>${file}</td><td><img src="${url}" style="max-width:120px;max-height:80px;border-radius:6px;" /></td><td><a href="${url}" target="_blank">View</a></td></tr>`;
    }
    html += `</table>`;
    res.send(html);
  } catch (err) {
    res.status(500).send('Failed to list uploads.');
  }
});
