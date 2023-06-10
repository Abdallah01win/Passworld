<script setup>
import Generator from "../components/Generator.vue";
import Info from "../components/Info.vue";
import Navigation from "../components/Navigation.vue";
import Hero from '../components/Hero.vue';
</script>

<template>
  <main class="mesh h-screen relative clip">
      <Navigation />
      <div class="w-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <Hero />
      </div>
  </main>
  <Info />
</template>


<style scoped>
.clip{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);

}
.mesh {
  /* background-color: #ffffff;
background-image: radial-gradient(at 41% 16%, hsla(27, 92%, 68%, 1) 0, hsla(27, 92%, 68%, 0) 50%),
radial-gradient(at 95% 3%, hsla(188, 93%, 68%, 1) 0, hsla(188, 93%, 68%, 0) 50%),
radial-gradient(at 91% 94%, hsla(206, 86%, 67%, 1) 0, hsla(206, 86%, 67%, 0) 50%),
radial-gradient(at 50% 36%, hsla(197, 88%, 61%, 1) 0, hsla(197, 88%, 61%, 0) 50%); */
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-image: radial-gradient(
      at 38% 41%,
      hsla(166, 86%, 50%, 1) 0,
      hsla(166, 86%, 50%, 0) 50%
    ),
    radial-gradient(
      at 92% 78%,
      hsla(73, 94%, 51%, 1) 0,
      hsla(73, 94%, 51%, 0) 50%
    ),
    radial-gradient(
      at 96% 90%,
      hsla(93, 87%, 69%, 1) 0,
      hsla(93, 87%, 69%, 0) 50%
    ),
    radial-gradient(
      at 53% 97%,
      hsla(197, 93%, 68%, 1) 0,
      hsla(197, 93%, 68%, 0) 50%
    );
}
</style>
