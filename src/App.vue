<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
<style>
.clip {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);

}
.boxShadow {
  box-shadow: 1px 1px 0px 0px #0A0A0A;
}

.mesh {
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-image: radial-gradient(at 38% 41%,
      hsla(166, 86%, 50%, 1) 0,
      hsla(166, 86%, 50%, 0) 50%),
    radial-gradient(at 92% 78%,
      hsla(73, 94%, 51%, 1) 0,
      hsla(73, 94%, 51%, 0) 50%),
    radial-gradient(at 96% 90%,
      hsla(93, 87%, 69%, 1) 0,
      hsla(93, 87%, 69%, 0) 50%),
    radial-gradient(at 53% 97%,
      hsla(197, 93%, 68%, 1) 0,
      hsla(197, 93%, 68%, 0) 50%);
}
</style>