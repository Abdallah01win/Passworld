<script setup>
import Generator from "../components/Generator.vue";
</script>

<template>
  <main class="flex mx-auto flex-col items-center">
    <Generator />

    <section
      class="bg-myGold-100 border-[3px] border-myBlack rounded-lg sm:w-4/6 max-sm:px-6 py-4 px-6 my-12 relative bottomShadow"
    >
      <div class="font-bold /text-lg mb-1">
        Avoid being hacked using Generated.PW
      </div>
      <p class="text-xs sm:w-[90%]">
        Generated Passwords especially useful for people who have trouble coming
        up with strong passwords on their own or who use the same password
        across multiple accounts, which can leave them vulnerable to cyber
        attacks.
      </p>

      <img
        src="../assets/lightbullb.png"
        alt="lightbullb"
        class="w-36 absolute top-[-70px] right-[-60px]"
      />
    </section>
  </main>
</template>

<style scoped>
.bottomShadow {
  box-shadow: 0px 5px 0px #1f1f1f;
}
</style>
