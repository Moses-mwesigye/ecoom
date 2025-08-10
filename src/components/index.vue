<template>
  <div class="admin-bg">
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
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav><h1 class="Pink-highlight">Ladies Lounge</h1>
<h1 class="Pink-highlight">kampala</h1>

        <!-- Add more admin functionalities here -->
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
.admin-bg {
  min-height: 100vh;
  width: 100vw;
  background: url('https://www.whereandwhen.net/site/images/illustration/kampala_19.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
}
.blue-highlight {
  color: #1976d2;
  font-weight: 700;
}
</style>