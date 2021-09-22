<template>
    <h1>Sidebar</h1>
    <aside class="sidebar">
        <ul>
        <li><router-link to = "/dashboard">Dashboard </router-link></li>
        <li><router-link to = "/login">My Items </router-link></li>
        <li><router-link to = "/register">My Wishlist </router-link></li>
        <li><router-link to = "/dashboard">Statistics</router-link></li>
        <!-- <li><router-link to = "/items">Items </router-link></li> -->
        <li><router-link to = "/wishlist">Logout </router-link></li>
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