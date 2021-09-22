<template>
<nav class = "navbar">
    <ul>
        <li><router-link to = "/">Home </router-link></li>
        <li><router-link to = "/dashboard">Dashboard </router-link></li>
        <li><router-link to = "/login">Login </router-link></li>
        <li><router-link to = "/register">Register </router-link></li>
        
        <!-- <li><router-link to = "/items">Items </router-link></li>
        <li><router-link to = "/wishlist">Wishlist </router-link></li> -->
    </ul>
</nav>
    
</template>

<script>
export default {
    name: 'Navbar',
}

</script>

<style>
.navbar {
    background: blue;
    min-width: 100%;
    
    
    
    
    
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px 0;
    /* flex-wrap: wrap; */
    
}

li {
    /* padding: 10px; */
    margin: 5px;
}

a{
    text-decoration: none;
    color: white;
}
</style>