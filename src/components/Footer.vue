<script setup>
import IconMail from "./icons/IconMail.vue";
import { ref } from "vue";
const width = ref(window.innerWidth);
</script>
<template>
  <div
    class="flex max-sm:flex-col-reverse items-start md:items-center text-sm justify-between bg-myPurple-200 text-white border-t-4 border-myBlack py-3 px-6 md:px-8 mt-auto"
  >
    <div>Copyright &#169; AH 1444</div>
    <span class="hidden md:block">
      <img src="../assets/morocode.svg" alt="" />
    </span>
    <div
      class="flex max-sm:flex-col-reverse items-start md:items-center justify-between"
    >
      <span>Privacy Policy</span>
      <span class="md:ml-5">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@generated.pw"
          target="_blank"
        >
          <IconMail v-if="width >= 600" />
          <span v-else>Contact</span>
        </a>
      </span>
    </div>
  </div>
</template>
