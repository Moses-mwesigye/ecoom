
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
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav><h1>This is my headersection</h1>
        
    </div>
</template>




    <script>
    export default {
        name: 'headersection',
    }
    </script>


<style scoped>

</style>