<template>
    <section  class=" my-8 rounded-md">
      <div  class="grid max-w-screen-xl  py-8 mx-auto lg:gap-8  xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div class="hidden   lg:mt-0 lg:col-span-5 lg:flex">
          <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="lg:col-span-7">
          <div class="mr-auto place-self-center text-left ">
            <h1 class="w-2/3 mb-4 text-3xl tracking-tight leading-none md:text-3xl xl:text-4xl font-semibold   text-black">{{ heading }}</h1>
            <HeaderLiner/>
            <p class="max-w-2xl mt-2 mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">{{ description }}</p>
            
            <Button :labelText="labelTextProp"></Button>
         
          </div>
        </div>
        
      </div>
    </section>
  </template>
  
  <script>
  import Button from './Button.vue';
import HeaderLiner from './HeaderLiner.vue';
  export default {
    name: "CustomSection2",
    components:{
    HeaderLiner,
    Button,
},
    props: {
      heading: String,
      description: String,
      buttonText: String,
      imageSrc: String,
      imageAlt: String,
    },
    data() {
        return {          
            labelTextProp:"Learn more",
        };
    },
  
  };
  </script>
  