<script>
import NavBar from "./components/NavBar.vue";


export default {
  components: {
    NavBar
 
  },

};
</script>

<template>
  <header>
    <NavBar />

    <p>the rest goes here</p>
  </header>
  <router-view> </router-view>
</template>

<style scoped>
</style>
