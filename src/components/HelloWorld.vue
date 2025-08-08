<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const products = ref([
  // Note: Using image URLs from search engines is not reliable for production.
  // It's better to host images yourself or use a stable CDN.
  { id: 1, name: 'sanitaryPads', price: 80000, description: 'GirlsSecret', category: 'females', image: 'https://th.bing.com/th/id/OIP.JFCcClZCcaN90kXhAheNbAHaHa?pid=ImgDet&rs=1', quantity: 5 },
  { id: 2, name: 'knickers', price: 10000, description: 'Girls comfort', category: 'females', image: 'https://thfvnext.bing.com/th/id/OIP.fn3bXKn5mXQRaG4XKFdzrQAAAA?w=156&h=202&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3', quantity: 10 },
  { id: 3, name: 'Bras', price: 15000, description: 'Girls secret', category: 'females', image: 'https://thfvnext.bing.com/th?id=OIF.zuKpX58K4kct0PmEbC%2bn1g&w=224&h=220&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3', quantity: 15 },
  { id: 4, name: 'Scarfs', price: 10000, description: 'beauty', category: 'females', image:'', quantity: 50 }
  { id: 5, name: 'ladies watches', price: 25000, description: 'style', category: 'females', image: 'https://ts3.mm.bing.net/th?id=OIP.YdDx1unehUN2_vFhtjoT1wHaHa&pid=15.1', quantity: 25 },
  { id: 6, name: 'EarRings', price: 10000, description: 'impression', category: 'females', image: 'https://thfvnext.bing.com/th?q=Emerald+Earrings&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=UG&setlang=en&adlt=moderate&t=1&mw=247', quantity: 30 },
  { id: 7, name: 'Towels', price: 35000, description: 'cleanliness', category: 'females', image: 'https://thfvnext.bing.com/th/id/OIP.2i7hsJY3zMDMjjfuia97UgHaHa?w=196&h=196&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3', quantity: 35 },
  { id: 8, name: 'Shoes', price: 15000, description: 'style', category: 'females', image: 'https://thfvnext.bing.com/th/id/OIP.8l9uCPUbOCZQEpmJ18OlmgHaGL?w=198&h=180&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3', quantity: 40 },
  { id: 9, name: 'Eye Lashes', price:1000, description: 'Beauty', category: 'females', image: 'https://tse4.mm.bing.net/th/id/OIP.2_tpsM-anJwCqlZOQEm6tAAAAA?cb=thfvnext&pid=ImgDet&w=184&h=146&c=7&o=7&rm=3', quantity: 45 },
  { id: 10, name: 'Waist Beads', price: 15000, description: 'freak', category: 'females', image: 'https://i.etsystatic.com/27848269/r/il/c8a66f/2957940898/il_fullxfull.2957940898_m7fr.jpg', quantity: 55 },
  { id: 11, name: 'Necklaces', price: 30000, description: 'beauty', category: 'females', image: 'https://tse1.mm.bing.net/th/id/OIP.lUbzq6fxV1UQNC_oZqStSwAAAA?cb=thfvnext&pid=ImgDet&w=184&h=184&c=7&o=7&rm=3', quantity: 60 }
])

const cart = ref([])
const router = useRouter()

function addToCart(product) {
  if (product.quantity > 0) {
    const found = cart.value.find(item => item.id === product.id)
    if (found) {
      found.cartQuantity++
    } else {
      cart.value.push({ ...product, cartQuantity: 1 })
    }
    product.quantity--
  }
}

function removeFromCart(product) {
  const cartItem = cart.value.find(item => item.id === product.id)
  if (cartItem) {
    const originalProduct = products.value.find(p => p.id === product.id)
    if (originalProduct) {
      originalProduct.quantity += cartItem.cartQuantity
    }
  }
  cart.value = cart.value.filter(item => item.id !== product.id)
}

async function submitOrder() {
  if (cart.value.length === 0) return;
  try {
    const res = await fetch('http://localhost:4000/products/submit-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart.value })
    });
    if (!res.ok) throw new Error('Order submission failed on the server.');
    const order = await res.json();
    if (order && order._id) {
      cart.value = [];
      const paymentsUrl = `/payments?orderId=${order._id}`;
      window.open(paymentsUrl, '_blank');
    }
  } catch (err) {
    console.error(err);
    alert('Order submission failed. Please try again.');
  }
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Admin">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="helloworld">products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services">services</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                customer care
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/">AboutUs</a></li>
                <li><a class="dropdown-item" href="#">contacts</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="ecom-container">
      <h1>Ladies Lounge</h1>
      <div class="products">
        <h2>Free Delivery Around Kampala</h2>
        <div class="product-list">
          <div v-for="product in products" :key="product.id" class="product-card">
            <template v-if="product.image">
              <img :src="product.image" :alt="product.name" class="product-image" />
            </template>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>Category: {{ product.category }}</p>
            <p>Price: Ugx {{ product.price.toLocaleString() }}</p>
            <p>Available: {{ product.quantity }}</p>
            <button @click="addToCart(product)" :disabled="product.quantity === 0">Add to Cart</button>
          </div>
        </div>
      </div>
      
      <div class="cart cart-fixed">
        <h2>Cart</h2>
        <div v-if="cart.length === 0">Cart is empty.</div>
        <ul v-else>
          <li v-for="item in cart" :key="item.id">
            {{ item.name }} (x{{ item.cartQuantity }}) - UgX {{ (item.price * item.cartQuantity).toLocaleString() }}
            <button @click="removeFromCart(item)">Remove</button>
          </li>
        </ul>
        <button v-if="cart.length > 0" @click="submitOrder">Submit Order</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Navbar purple background and light blue text */
.navbar {
  background: #6c2eb7 !important;
}
.navbar .navbar-nav .nav-link,
.navbar .navbar-brand,
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: #7fd8ff !important;
}
.navbar .dropdown-menu {
  background: #6c2eb7;
}
.navbar .dropdown-item {
  color: #7fd8ff !important;
}
.navbar .dropdown-item:hover,
.navbar .dropdown-item:focus {
  background: #7d47b7;
  color: #fff !important;
}
.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5em;
  opacity: 0.9;
}
.ecom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
  padding-left: 280px; /* --- FIX: Add padding so fixed cart on the left doesn't overlap content */
  background: #000000; /* --- FIX: Changed background to completely black */
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(255,255,255,0.05);
  position: relative; /* Needed for positioning context */
}
h1 {
  color: #42b883; /* --- FIX: Changed color for dark background */
  text-align: center;
  font-weight: bold;
}
h2 {
  color: #e0e0e0; /* --- FIX: Changed color for dark background */
  text-align: center;
  margin-bottom: 1em;
}
.products {
  margin-bottom: 2em;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
}
.product-card {
  border-radius: 12px;
  padding: 1.2em;
  width: 220px;
  box-shadow: 0 2px 12px rgba(255,255,255,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent; /* --- FIX: Removed the white background */
  border: 1px solid #333; /* --- FIX: Adjusted border for dark theme */
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
}
.product-card h3,
.product-card p {
  color: #f0f0f0; /* --- FIX: Changed text to a light color for readability */
  margin: 4px 0;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(33,150,243,0.6);
}
button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.7em 1.2em;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.5em;
  font-weight: bold;
  transition: background-color 0.2s;
}
button:hover {
  background: #33a06f;
}
button:disabled {
  background: #a5d6a7;
  cursor: not-allowed;
}
.cart {
  border: 1px solid #555;
  border-radius: 8px;
  color: #f0f0f0; /* --- FIX: Changed text color for dark transparent bg */
  padding: 1em;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}
.cart-fixed {
  position: fixed;
  top: 50%; /* --- FIX: Docked to vertical middle */
  left: 20px; /* --- FIX: Docked to the left side */
  transform: translateY(-50%); /* --- FIX: Vertically align correctly */
  width: 250px;
  z-index: 100;
  font-size: 0.95em;
  background: rgba(25, 25, 25, 0.8); /* --- FIX: Made background semi-transparent */
  backdrop-filter: blur(5px); /* Optional: Adds a nice frosted glass effect */
}
.cart h2 {
  text-align: center;
  margin-top: 0;
  color: #42b883; /* --- FIX: Changed color for dark background */
}
.cart ul {
  list-style-type: none;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
}
.cart li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
  border-bottom: 1px solid #444; /* --- FIX: Adjusted border for dark theme */
}
.cart li button {
  background: #e57373;
  font-size: 0.8em;
  padding: 0.3em 0.6em;
}
.cart li button:hover {
  background: #ef5350;
}
</style>