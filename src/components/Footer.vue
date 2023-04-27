<script setup>
import IconMail from "./icons/IconMail.vue";
</script>
<template>
  <div
    class="flex items-center text-sm justify-between bg-myPurple-200 text-white border-t-4 border-myBlack py-3 px-8 mt-auto"
  >
    <div>Copyright &#169; AH 1444</div>
    <span>
      <img src="../assets/morocode.svg" alt="" />
    </span>
    <div class="flex items-center justify-between">
      <span>Privacy Policy</span>
      <span class="ml-5">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@example.com"
          target="_blank"
        >
          <IconMail />
        </a>
      </span>
    </div>
  </div>
</template>
