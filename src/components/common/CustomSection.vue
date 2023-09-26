<template>
  <section  class=" my-8 rounded-md">
    <div  class="grid max-w-screen-xl  py-8 mx-auto lg:gap-8  xl:gap-0 lg:py-10 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <div class="mr-auto place-self-center text-left ">
          <h1 class="w-2/3 mb-4 text-5xl font-semibold tracking-tight leading-none md:text-5xl xl:text-4xl  
           text-black">{{ heading }}</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">{{ description }}</p>
          <button class="bg-blue-400 hover:bg-blue-400 inline-flex items-center justify-center px-5 py-3 mr-3  font-medium text-center text-white rounded-3xl ">
            {{ buttonText }}
          </button>
         
        </div>
      </div>
      <div class="hidden   lg:mt-0 lg:col-span-5 lg:flex">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button.vue';
export default {
  name: "CustomSection",
  components:{
    Button,
    Button
},
  props: {
    heading: String,
    description: String,
    buttonText: String,
    imageSrc: String,
    imageAlt: String,
  },
  

};
</script>
