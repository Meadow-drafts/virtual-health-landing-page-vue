<template>
     <button class=" text-cyan-500 border-2 border-cyan-500 hover:text-white hover:border-0  hover:bg-cyan-500 inline-flex items-center justify-center px-5 py-2 mr-3  font-medium text-center rounded-3xl ">
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