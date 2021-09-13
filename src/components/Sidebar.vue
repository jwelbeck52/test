<template>
    <h1>Sidebar</h1>
    <aside class="sidebar">
        <ul>
        <li><router-link to = "/">Home </router-link></li>
        <li><router-link to = "/login">Login </router-link></li>
        <li><router-link to = "/register">Register </router-link></li>
        <li><router-link to = "/dashboard">Dashboard </router-link></li>
        <li><router-link to = "/items">Items </router-link></li>
        <li><router-link to = "/wishlist">Wishlist </router-link></li>
    </ul>
    </aside>
    
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>
    .sidebar{
        display: flex;
        flex-direction: column;
    }
</style>