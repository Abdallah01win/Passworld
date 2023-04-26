<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="flex flex-col h-screen">
      <Navigation />
      <RouterView />
      <Footer />
    </div>
</template>

<style>
.boxShadow {
  box-shadow: 3px 4px 0px 1px #1f1f1f;
}
.boxShadow:active {
  box-shadow: 1px 2px 0px 0px #1f1f1f;
}
</style>
