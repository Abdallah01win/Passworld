<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="mesh h-screen">
    <RouterView />
    <Footer />
  </main>
</template>

<style>
.boxShadow {
  box-shadow: 3px 4px 0px 1px #1f1f1f;
}

.boxShadow:active {
  box-shadow: 1px 2px 0px 0px #1f1f1f;
}

.mesh {
  /* background-color: #ffffff;
background-image: radial-gradient(at 41% 16%, hsla(27, 92%, 68%, 1) 0, hsla(27, 92%, 68%, 0) 50%),
radial-gradient(at 95% 3%, hsla(188, 93%, 68%, 1) 0, hsla(188, 93%, 68%, 0) 50%),
radial-gradient(at 91% 94%, hsla(206, 86%, 67%, 1) 0, hsla(206, 86%, 67%, 0) 50%),
radial-gradient(at 50% 36%, hsla(197, 88%, 61%, 1) 0, hsla(197, 88%, 61%, 0) 50%); */
background-color: #ffffff;
background-image: radial-gradient(at 38% 41%, hsla(166, 86%, 50%, 1) 0, hsla(166, 86%, 50%, 0) 50%),
radial-gradient(at 92% 78%, hsla(73, 94%, 51%, 1) 0, hsla(73, 94%, 51%, 0) 50%),
radial-gradient(at 96% 90%, hsla(93, 87%, 69%, 1) 0, hsla(93, 87%, 69%, 0) 50%),
radial-gradient(at 53% 97%, hsla(197, 93%, 68%, 1) 0, hsla(197, 93%, 68%, 0) 50%);
}
</style>
