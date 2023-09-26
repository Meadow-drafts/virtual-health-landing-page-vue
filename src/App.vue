<template>
  <Navbar/> 
  <HeroSection/>
  <ServicesSection/>
  <AboutSection/>
  <Download/>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
<script>
import TheWelcome from './components/TheWelcome.vue';
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import AboutSection from './components/AboutSection.vue';
import Download from './components/Download.vue';
export default {
  name:"App",
  components:{
    TheWelcome,
    Navbar,
    HeroSection,
    ServicesSection,
    AboutSection,
    Download,
  },
  data() {
    
  },
}
</script>

<style scoped>

</style>
