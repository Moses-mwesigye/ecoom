<template>
  <div class="payments-container">
    <h1>Order Payment</h1>
    <table v-if="order && order.items && order.items.length" class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.cartQuantity }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.price * item.cartQuantity }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>No order data found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const order = ref(null);
const route = useRoute();

onMounted(async () => {
  const orderId = route.query.orderId;
  if (orderId) {
    // Fetch from the orders database (backend)
    const res = await fetch('http://localhost:4000/products/orders/' + orderId);
    if (res.ok) {
      order.value = await res.json();
    } else {
      order.value = null;
    }
  }
});
</script>

<style scoped>
.payments-container {
  max-width: 700px;
  margin: 2em auto;
  background: #e3f2fd;
  border-radius: 12px;
  padding: 2em;
  box-shadow: 0 2px 12px rgba(44,184,131,0.10);
}
table {
  width: 100%;
  margin-top: 1em;
}
th, td {
  padding: 0.7em;
  text-align: center;
  background: #42a5f5;
  color: white;
}
</style>