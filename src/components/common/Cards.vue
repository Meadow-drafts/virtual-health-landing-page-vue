<template>
  
      <div class="p-2 md:p-2 lg:p-2 xl:p-14 md:w-1/3">
        <div class="h-full px-2 shadow-xl rounded-2xl overflow-hidden">
          <img class="lg:h-1/3 md:h-1/2 w-1/2 object-cover object-center" :src="imageSrc" :alt="imageAlt"/>
          <div class="p-6">
            <h1 class="title-font text-md font-medium text-gray-900 mb-3">{{heading}}</h1>
            <p class="leading-relaxed mb-3 text-sm">{{ description }}</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center text-sm pb-4 md:mb-2 lg:mb-0">
                {{buttonText}}                
              </a>
            </div>
          </div>
        </div>
      </div>
   
</template>
<script>
export default{
    name:"Cards",
    props: {
    heading: String,
    description: String,
    buttonText: String,
    imageSrc: String,
    imageAlt: String,
  },
}
</script>