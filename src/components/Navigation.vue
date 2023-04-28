<script setup>
import { RouterLink } from "vue-router";
import Logo from "./Logo.vue";
import IconUsa from "./icons/IconUsa.vue";
import Mobilelogo from "./icons/Mobilelogo.vue";
import { ref } from "vue";
const width = ref(window.innerWidth);
</script>
<template>
  <nav class="flex items-center justify-between max-sm:py-4 px-6 md:px-8">
    <div>
      <RouterLink to="/">
        <Logo v-if="width >= 600"/>
        <Mobilelogo v-else />
      </RouterLink>
    </div>
    <button
      class="bg-white border-[3px] p-[2px] border-myBlack boxShadow flex items-center right-radious"
    >
      <span>
        <IconUsa />
      </span>
      <span class="font-bold text-lg px-2">En</span>
    </button>
  </nav>
</template>

<style scoped>
.right-radious {
  border-radius: 1000px 500px 500px 1000px;
}
</style>
