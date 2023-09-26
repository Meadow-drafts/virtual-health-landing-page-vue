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
  import image from '../assets/img/10.jpg'
  export default {
    name: "Download",
    components: {
      CustomSection, // Register the CustomSection component
    },
    data() {
      return {
        headingProp: "virtual healthcare for you",
        descriptionProp: "VRHealth provides progressive, and affordable healthcare , accessible on mobile and online for everyone.",
        buttonTextProp: "Consult Now",
        imageSrcProp: image,
        imageAltProp: "mockup",
      };
    },
  };
  </script>
  