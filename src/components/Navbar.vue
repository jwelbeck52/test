<template>
<div class = "navbar">
    <ul>
        <li><router-link to = "/">Home </router-link></li>
        <li><router-link to = "/dashboard">Dashboard </router-link></li>
        <li><router-link to = "/login">Login </router-link></li>
        <li><router-link to = "/register">Register </router-link></li>
        
        <!-- <li><router-link to = "/items">Items </router-link></li>
        <li><router-link to = "/wishlist">Wishlist </router-link></li> -->
    </ul>
</div>
    
</template>

<script>
export default {
    name: 'Navbar',
}

</script>

<style scoped>
.navbar {
    background: blue;
    
    
}

ul {
    width: 60%;
    margin: auto;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
}

li {
    
    
}

a{
    text-decoration: none;
    color: white;
}
</style>