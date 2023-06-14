<script setup>
import Lock from "./icons/Lock.vue";
import Pichart from "./icons/Pichart.vue";
import Shiled from "./icons/Shiled.vue";
</script>
<template>
  <div class="my-12 xl:max-w-[1024px] mx-auto">
  <div class="text-center text-4xl font-bold mb-8">Our Solutions</div>
 <div class="grid grid-cols-3 gap-x-6">
    <div class="flex gap-x-3">
      <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Pichart class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div>

      <div>
        <div class="font-semibold mb-2 text-base">Customizable Elements</div>
        <p class="font-Montserrat leading-relaxed text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cumque veniam praesentium
        </p>
      </div>
    </div>
    <div class="flex gap-x-3">
      <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Shiled class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div>

      <div>
        <div class="font-semibold mb-2 text-base">Customizable categories</div>
        <p class="font-Montserrat leading-relaxed text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cumque veniam praesentium
        </p>
      </div>
    </div>
    <div class="flex gap-x-3">
      <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Lock class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div>

      <div>
        <div class="font-semibold mb-2 text-base">Customizable categories</div>
        <p class="font-Montserrat leading-relaxed text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cumque veniam praesentium
        </p>
      </div>
    </div>
  </div>
</div>
</template>
