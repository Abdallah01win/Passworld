<script setup>
import Info from "../components/Info.vue";
import Navigation from "../components/Navigation.vue";
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';
import GeneratorSection from "../components/GeneratorSection.vue";
</script>

<template>
  <main class="mesh h-screen relative clip">
    <Navigation />
    <div class="w-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <Hero />
    </div>
  </main>
  <GeneratorSection />
  <Info />
  <Footer />
</template>