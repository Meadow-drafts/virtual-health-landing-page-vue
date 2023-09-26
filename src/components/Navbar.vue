<template>
    
    <div class="font-sans antialiased" >
  <nav class="flex items-center justify-between flex-wrap shadow-lg p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl text-black tracking-tight">Health</span>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full  sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow font-medium">
        <a href="#responsive-header" 
        :class="{ 'text-blue-500': isTabActive('Home'), 'text-gray-400': !isTabActive('Home') }"
        class="no-underline block mt-4 sm:inline-block sm:mt-0  hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" 
        :class="{ 'text-blue-500': isTabActive('Doctor'), 'text-gray-400': !isTabActive('Doctor') }"
        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
          Find a doctor
        </a>
        <a href="#responsive-header" 
        :class="{ 'text-blue-500': isTabActive('Testimonials'), 'text-gray-400': !isTabActive('Testimonials') }"
        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
          Testimonials
        </a>
        <a href="#responsive-header"
        :class="{ 'text-blue-500': isTabActive('About'), 'text-gray-400': !isTabActive('About') }"
        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
          About
        </a>
      </div>
      <!-- <div>
        <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Download</a>
      </div> -->
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    isTabActive(tabName) {
      // Implement logic to determine if a tab is active
      // For example, you can compare the current route or another indicator
      // This function should return true for the active tab, and false for others.
      // Here, we'll assume 'Home' is always the active tab.
      return tabName === 'Home';
    },
  },
};
</script>