<template>
  
    <Navbar_Dashboard/>
  <div class="container">
    <div class="sidebar">
      <Sidebar/>
    </div>
      
    <div class="main">
      <br>
      <div>
        <h3>Welcome to Item Management Dashboard</h3>

        <p>Easily manage your owned items here...</p>
        <br>
      </div>
      <Items/>
    </div>

  </div> 


</template>

<script>
import Items from '../components/Items.vue'
import Sidebar from '../components/Sidebar.vue'
import Navbar_Dashboard from '../components/Navbar_Dashboard.vue'
export default {
  name: 'Dashboard',
  components: {
    Items,
    Sidebar,
    Navbar_Dashboard,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display:flex;
  
}

.sidebar{
  min-width: fit-content;
  /* display:inline-block; */
  min-height: 200px;
  height: fit-content;
  background: yellow;
  
  display: none;
}
.main{
  /* display: inline-block; */
  min-height: 700px;
  background: orange;
  flex-grow: 2;
  
}
</style>
