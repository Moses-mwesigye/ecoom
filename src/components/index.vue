<template>
  <div class="admin-bg">
    <div class="gradient-overlay"></div>
  <!-- Only the beautiful dashboard card and background retained -->
    <div class="glass-card">
      <h1 class="dashboard-title">Ladies Lounge Kampala Dashboard</h1>
      <p class="dashboard-desc">Welcome to your admin dashboard. Manage products, services, and customer care with style!</p>
      <div class="dashboard-actions">
        <router-link to="/products" class="action-btn">Shop</router-link>
        <router-link to="/services" class="action-btn">View Services</router-link>
        <router-link to="/AboutUs" class="action-btn">Customer Care</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Admin',
    }
</script>


<style scoped>
/* Navbar purple background and green text */
.navbar {
  background: #6c2eb7 !important;
}
.navbar .navbar-nav .nav-link,
.navbar .navbar-brand,
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: #39ff14 !important;
}
.navbar .dropdown-menu {
  background: #6c2eb7;
}
.navbar .dropdown-item {
  color: #39ff14 !important;
}
.navbar .dropdown-item:hover,
.navbar .dropdown-item:focus {
  background: #7d47b7;
  color: #fff !important;
}
.navbar .btn.btn-outline-success[type="submit"] {
  background: #ff9800;
  color: #fff;
  border: 1px solid #e65100;
}
.navbar .btn.btn-outline-success[type="submit"]:hover {
  background: #e65100;
  color: #fff;
}
/* Beautiful background with gradient overlay */
.admin-bg {
  min-height: 100vh;
  width: 100vw;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  font-family: 'Segoe UI', 'Montserrat', Arial, sans-serif;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, rgba(108,46,183,0.7) 0%, rgba(66,184,131,0.5) 100%);
  z-index: 1;
}
.glass-card {
  position: relative;
  z-index: 2;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255,255,255,0.18);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 2.5em 2em 2em 2em;
  text-align: center;
}
.dashboard-title {
  font-size: 2.7em;
  font-weight: 800;
  color: #6c2eb7;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
  animation: fadeInDown 1s;
}
.dashboard-desc {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 2em;
  font-weight: 500;
  animation: fadeIn 1.5s;
}
.dashboard-actions {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
}
.action-btn {
  background: linear-gradient(90deg, #6c2eb7 0%, #42b883 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.8em 2em;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(108,46,183,0.15);
  transition: background 0.3s, transform 0.2s;
  font-size: 1.1em;
}
.action-btn:hover {
  background: linear-gradient(90deg, #42b883 0%, #6c2eb7 100%);
  transform: translateY(-3px) scale(1.04);
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.blue-highlight {
  color: #1976d2;
  font-weight: 700;
}
</style>