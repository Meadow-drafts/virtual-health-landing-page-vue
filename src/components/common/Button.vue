<template>
     <button class=" text-blue-500 border-2 border-blue-500 hover:text-white hover:border-0  hover:bg-blue-400 inline-flex items-center justify-center px-5 py-3 mr-3  font-medium text-center rounded-3xl ">
            {{ labelText }}
          </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    labelText: String,
  },

};
</script>