<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Dashboard msg="Welcome to Your Vue.js App"/> -->
  <br>
  <router-link to = "/">Home </router-link>
  <router-link to = "/login">Login </router-link>
  <router-link to = "/register">Register </router-link>
  <router-link to = "/dashboard">Dashboard </router-link>
  <router-link to = "/items">Items </router-link>
  <router-link to = "/wishlist">Wishlist </router-link>
  <router-view/>
  <!-- <Login></Login> -->
</template>

<script>
// import Dashboard from './views/Dashboard.vue'
// import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    // Login,
    // Dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
