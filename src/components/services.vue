
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
          <router-link class="nav-link active" aria-current="page" to="/index">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/services">Services</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer Care
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/AboutUs">AboutUs</router-link></li>
            <li><a class="dropdown-item" href="#">Contacts</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex ms-auto" role="search" style="margin-left:auto;">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <h1 class="mt-2 mb-2 text-success">Product Services</h1>
        <ul class="list-group mb-4">
          <li class="list-group-item d-flex align-items-center">
            <span class="badge bg-success me-2">✓</span> Free Delivery Around Kampala
          </li>
          <li class="list-group-item d-flex align-items-center">
            <span class="badge bg-primary me-2">✓</span> 24/7 Customer Support
          </li>
          <li class="list-group-item d-flex align-items-center">
            <span class="badge bg-warning text-dark me-2">✓</span> Quality Assurance
          </li>
          <li class="list-group-item d-flex align-items-center">
            <span class="badge bg-info text-dark me-2">✓</span> Easy Returns
          </li>
          <li class="list-group-item d-flex align-items-center">
            <span class="badge bg-danger me-2">✓</span> Secure Payment Options
          </li>
        </ul>

        <h1 class="mt-2 mb-2 text-primary">Other Services</h1>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Marriage Counseling
            <span class="badge bg-secondary">Ugx150,000</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Game Park Leisure Trips
            <span class="badge bg-secondary">Ugx1,500,000</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Wedding Planning
            <span class="badge bg-secondary">Ugx5,000,000</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Event Management
            <span class="badge bg-secondary">Ugx2,000,000</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Corporate Training
            <span class="badge bg-secondary">Ugx3,000,000</span>
          </li>
        </ul>
    </div>
</template>




    <script>
    export default {
        name: 'services',
    }
    </script>


<style scoped>
/* Navbar purple background */
.navbar {
  background: #6c2eb7 !important;
  z-index: 1050;
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
  z-index: 1100;
}
.navbar .dropdown-item {
  color: #39ff14 !important;
}
.navbar .dropdown-item:hover,
.navbar .dropdown-item:focus {
  background: #7d47b7;
  color: #fff !important;
}
h1 {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
}
/* Crimson search bar */
.navbar .form-control[type="search"] {
  background: #dc143c;
  color: #fff;
  border: 1px solid #b0102a;
  max-width: 160px;
  min-width: 80px;
  width: 100%;
}
.navbar .form-control[type="search"]::placeholder {
  color: #fff;
  opacity: 0.8;
}
.navbar .btn.btn-outline-success[type="submit"] {
  background: #dc143c;
  color: #fff;
  border: 1px solid #b0102a;
}
.navbar .btn.btn-outline-success[type="submit"]:hover {
  background: #b0102a;
  color: #fff;
}
h1 {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
}
.list-group-item {
  font-size: 1.1em;
  background: rgba(255,255,255,0.85);
  border-radius: 8px;
  margin-bottom: 6px;
  box-shadow: 0 1px 4px rgba(44,184,131,0.07);
  transition: box-shadow 0.2s;
}
.list-group-item:hover {
  box-shadow: 0 4px 16px rgba(44,184,131,0.15);
  background: #e3f2fd;
}
.badge {
  font-size: 0.95em;
  padding: 0.5em 0.8em;
  border-radius: 6px;
}
</style>