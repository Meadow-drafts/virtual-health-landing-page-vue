<template>
    <div>
      <CustomSection
        :heading="headingProp"
        :description="descriptionProp"
        :buttonText="buttonTextProp"
        :imageSrc="imageSrcProp"
        :imageAlt="imageAltProp"
      />
    </div>
  </template>
  
  <script>
  import CustomSection from "./common/CustomSection.vue";
  import image from '../assets/img/13.png'
  export default {
    name: "HeroSection",
    components: {
      CustomSection, // Register the CustomSection component
    },
    data() {
      return {
        headingProp: "virtual healthcare for you",
        descriptionProp: "Feature packed at better value than ever powerful sensors to monitor your fitness.",
        buttonTextProp: "Consult Now",
        imageSrcProp: image,
        imageAltProp: "mockup",
      };
    },
  };
  </script>
  