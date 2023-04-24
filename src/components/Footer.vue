<script setup>
import IconMail from "./icons/IconMail.vue";
import IconMorocode from "./icons/IconMorocode.vue";
</script>
<template>
  <div class="flex items-center justify-between bg-myPurple-200 text-white border-t-4 border-myBlack py-4 px-8">
    <div>Copyright &#169; AH 1444</div>
    <span>
      <IconMorocode />
    </span>
    <div class="flex items-center justify-between">
      <span>Privacy Policy</span>
      <span class="ml-5">
        <IconMail />
      </span>
    </div>
  </div>
</template>
