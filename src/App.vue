<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// import './index.css'
</script> -->

<template>
  <Navbar/> 

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
<script>
import TheWelcome from './components/TheWelcome.vue';
import Navbar from './components/Navbar.vue'
export default {
  name:"App",
  components:{
    TheWelcome,
    Navbar,
  },
  data() {
    
  },
}
</script>

<style scoped>

</style>
