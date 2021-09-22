
<template>
    <Navbar/>
    <h1>Welcome to Item Management Home Page</h1>
    <p>Easily manage your owned items here...</p>
    This page should be Home, have login and register forms which can be toggled
    
</template>

<script>
// export default {
//     name: 'Login'
// }
import Navbar from '../components/Navbar.vue'
export default {
    name: "Home",
    components: {
    Navbar,
    // Login,
    // Dashboard
  }
}
</script>

<style>
</style>