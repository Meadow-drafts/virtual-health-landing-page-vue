<template>
  <Navbar/> 
  <HeroSection/>
  <ServicesSection/>
  <AboutSection/>
  <Download/>
  <ReviewsSection/>
  <BlogSection />
  <Footer/>

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
import ReviewsSection from './components/ReviewsSection.vue';
import BlogSection from './components/BlogSection.vue';
import Footer from './components/Footer.vue';
export default {
  name:"App",
  components:{
    TheWelcome,
    Navbar,
    HeroSection,
    ServicesSection,
    AboutSection,
    Download,
    ReviewsSection,
    BlogSection,
    Footer,
  },
  data() {
    
  },
}
</script>

<style scoped>

</style>
