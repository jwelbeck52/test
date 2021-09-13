<template>
    <section>
        <header class="section-bar">
            <h1 class="section-title">My Items (3)</h1>
            <div class="section-button">
                <button >See all</button>
            </div>
            
        
        </header>
        <div class="section-content">
                <Item/>
                <Item/>
                <Item/>
        </div>
    </section>

    <section>
        <header class="section-bar">
            <h1 class="section-title">My Wishlist (3)</h1>
            <div class="section-button">
                <button >See all</button>
            </div>
            
        
        </header>
        <div class="section-content">
                <Item/>
                <Item/>
                <Item/>
        </div>
    </section>
    
    
    
    
</template>

<script>
import Item from './Item.vue'
export default {
    name: 'Login',
    components: {
        Item
    }
}
</script>

<style scoped>
.section-content{
    display: flex;
    flex-wrap: wrap;
    
}

.section-bar{
    display: flex;
    justify-content: space-between;

}

.section-title{
    
}

.section-button{
    
}
</style>