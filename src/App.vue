<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// import './index.css'
</script> -->

<template>
  <Navbar/> 
  <HeroSection/>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
<script>
import TheWelcome from './components/TheWelcome.vue';
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
export default {
  name:"App",
  components:{
    TheWelcome,
    Navbar,
    HeroSection,
  },
  data() {
    
  },
}
</script>

<style scoped>

</style>
