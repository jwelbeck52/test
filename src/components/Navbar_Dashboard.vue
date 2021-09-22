<template>
<nav class = "navbar">
    <ul class= "nav-list">
        <li><router-link to = "/">Menu </router-link></li>
        <li><router-link to = "/dashboard">Dashboard </router-link></li>
        <li><router-link to = "/login">My Profile </router-link></li>
        <li><router-link to = "/register">Logout </router-link></li>
        
        <!-- <li><router-link to = "/items">Items </router-link></li>
        <li><router-link to = "/wishlist">Wishlist </router-link></li> -->
    </ul>
</nav>
    
</template>

<script>
export default {
    name: 'Navbar_Dashboard',
}

</script>

<style scoped>

</style>