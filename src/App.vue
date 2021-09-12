<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Dashboard msg="Welcome to Your Vue.js App"/> -->
  <!-- <br> -->
  <Navbar />
  <router-view/>
  <!-- <Login></Login> -->
</template>

<script>
// import Dashboard from './views/Dashboard.vue'
// import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Login,
    // Dashboard
  }
}
</script>

<style>
* {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}


</style>
