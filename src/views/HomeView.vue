<script setup>
import Generator from "../components/Generator.vue";
import Navigation from "../components/Navigation.vue";
import Hero from '../components/Hero.vue';
</script>

<template>
  <main class="xl:max-w-[1024px] mx-auto">
    <Navigation />
    <Hero />
    <!-- <Generator /> -->
  </main>
</template>

<style scoped>
.bottomShadow {
  box-shadow: 0px 5px 0px #1f1f1f;
}
</style>
