<script setup>
import Generator from "../components/Generator.vue";
</script>

<template>
  <main class="flex mx-auto flex-col items-center">
    <Generator />

    <section
      class="bg-myGold-100 border-[3px] border-myBlack rounded-lg mx-6 md:mx-0 md:w-4/6 py-7 md:py-4 px-4 md:px-6 mt-24 mb-12 relative bottomShadow"
    >
      <div class="font-bold mb-4 md:mb-1">
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
        class="w-32 md:w-36 absolute top-[-56px] md:top-[-70px] right-[-20px] md:right-[-60px]"
      />
    </section>
  </main>
</template>

<style scoped>
.bottomShadow {
  box-shadow: 0px 5px 0px #1f1f1f;
}
</style>
