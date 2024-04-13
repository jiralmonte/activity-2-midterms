<template>
  <nav>
    <router-link to="/">List of Product</router-link> |
    <!-- <router-link to="/productlist">Product List</router-link> | -->
    <router-link to="/addproduct">Add Product</router-link> |
    <router-link to="/editproduct">Edit Product</router-link> 
    
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
