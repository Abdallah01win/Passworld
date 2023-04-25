<script setup>
import Generator from "../components/Generator.vue";
</script>

<template>
  <main class="flex mx-auto flex-col items-center">
    <Generator />

    <section
      class="bg-myGold-100 border-[3px] border-myBlack rounded-lg w-4/6 py-4 px-6 my-12 bottomShadow"
    >
      <div class="font-bold /text-lg mb-1">Avoid being hacked using Generated.PW</div>
      <p class="text-xs w-[90%]">
        Generated Passwords especially useful for people who have trouble coming
        up with strong passwords on their own or who use the same password
        across multiple accounts, which can leave them vulnerable to cyber
        attacks.
      </p>
    </section>
  </main>
</template>

<style scoped>
.bottomShadow{
  box-shadow: 0px 5px 0px #1f1f1f;
}
</style>
