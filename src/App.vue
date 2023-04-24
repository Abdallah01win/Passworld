<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<template>

  <header>
    <div class="wrapper">
      <Navigation />
    </div>
  </header>
  <RouterView />
  <Footer />
</template>

<style>
.boxShadow{
  box-shadow: 3px 4px 0px 1px #1F1F1F;
}
</style>
