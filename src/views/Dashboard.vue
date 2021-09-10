<template>
  <div class="hello">
    <h1>Welcome to Item Management Dashboard</h1>
    <p>Easily manage your owned items here...</p>
    <div class="container">
        <div class="sidebar">
        sidebar
        <Sidebar/>
        
      
    </div>
    <div class="main">
      content here
      
      <Items/>
    </div>

    </div>
    
    
  </div>
</template>

<script>
import Items from '../components/Items.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'Dashboard',
  components: {
    Items,
    Sidebar,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display:flex;
}

.sidebar{
  width:20%;
  /* display:inline-block; */
  min-height: 200px;
  height: fit-content;
  background: yellow;
}
.main{
  width:80%;
  /* display: inline-block; */
  min-height: 700px;
  background: orange;
}
</style>
