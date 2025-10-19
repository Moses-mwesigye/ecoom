<template>
  <div class="upload-container">
    <h1>Upload Payment Screenshot</h1>
    <div v-if="order && order._id" class="order-info">
      <p><strong>Order:</strong> {{ order._id }}</p>
    </div>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Select Provider</label>
        <select v-model="provider" class="form-select">
          <option value="Airtel">Airtel</option>
          <option value="MTN">MTN</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Phone number (required)</label>
        <input v-model="phone" type="tel" placeholder="e.g. +256772123456" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Screenshot</label>
        <input type="file" @change="onFileChange" accept="image/*" class="form-control" />
      </div>

      <div v-if="preview">
        <p>Preview:</p>
        <img :src="preview" style="max-width:300px; border-radius:8px;" />
      </div>

      <button class="btn btn-primary mt-3" :disabled="!file || uploading">Upload</button>
    </form>

    <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const order = ref(null);
const provider = ref('Airtel');
const phone = ref('');
const file = ref(null);
const preview = ref(null);
const message = ref('');
const uploading = ref(false);

onMounted(async () => {
  const orderId = route.query.orderId;
  if (orderId) {
    const res = await fetch('http://localhost:4000/products/orders/' + orderId);
    if (res.ok) order.value = await res.json();
  }
  // prefill phone from query or order
  if (route.query && route.query.phone) {
    phone.value = String(route.query.phone);
  } else if (order.value && order.value.phone) {
    phone.value = order.value.phone;
  }
});

function onFileChange(e) {
  const f = e.target.files[0];
  if (!f) return;
  file.value = f;
  preview.value = URL.createObjectURL(f);
}

async function submit() {
  if (!order.value || !order.value._id) {
    message.value = 'Missing order id.';
    return;
  }
  if (!file.value) {
    message.value = 'Please select an image.';
    return;
  }
  if (!phone.value || phone.value.trim().length < 7) {
    message.value = 'Please enter a valid phone number.';
    return;
  }
  uploading.value = true;
  const form = new FormData();
  form.append('screenshot', file.value);
  form.append('provider', provider.value);
  form.append('phone', phone.value);
  // include orderId in form fields so the server can name the file accordingly
  form.append('orderId', order.value && order.value._id ? order.value._id : '');

  try {
    const res = await fetch('http://localhost:4000/orders/' + order.value._id + '/upload-payment', {
      method: 'POST',
      body: form
    });
    const data = await res.json();
    if (res.ok) {
      message.value = 'Upload successful.';
      // Optionally navigate back or show uploaded image
      if (data && data.order && data.order.payment && data.order.payment.imagePath) {
        // show server image URL
        preview.value = 'http://localhost:4000' + data.order.payment.imagePath;
      }
    } else {
      message.value = data.error || 'Upload failed.';
    }
  } catch (err) {
    console.error(err);
    message.value = 'Upload failed.';
  }
  uploading.value = false;
}
</script>

<style scoped>
.upload-container {
  max-width: 700px;
  margin: 2em auto;
  padding: 2em;
  background: #fff;
  border-radius: 8px;
}
</style>
