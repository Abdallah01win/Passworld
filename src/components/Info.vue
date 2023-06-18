<script setup>
import Lock from "./icons/Lock.vue";
import Pichart from "./icons/Pichart.vue";
import Shiled from "./icons/Shiled.vue";
</script>
<template>
  <div class="mt-8 mb-20 xl:max-w-[1024px] mx-auto">
    <div class="text-center text-3xl font-bold mb-6">What we offer</div>
    <div class="grid grid-cols-3 gap-x-8">
      <div class="flex gap-x-3">
        <!-- <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Pichart class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div> -->

        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Pichart class="w-6 fill-myBlack" />
            </span>
            <div class="font-semibold text-base">Customizable Elements</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            You decide which charachters to be included in your passwords, so you can tailor them to any website
            requirements.
          </p>
        </div>
      </div>
      <div class="flex gap-x-3">
        <!-- <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Shiled class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div> -->

        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Shiled class="w-6 fill-myBlack" />
            </span>
            <div class="font-semibold text-base">Rock-solid security</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            Passworld utilizes strong encryption algorithms to ensure that your passwords are of the highest complexity.
          </p>
        </div>
      </div>
      <div class="flex gap-x-3">
        <!-- <div class="flex flex-col items-center justify-between">
        <span class="bg-myGray-300 p-2 rounded-full">
          <Lock class="w-6 fill-myBlack" />
        </span>
        <hr class="w-px bg-myBlack h-12" />
      </div> -->

        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Lock class="w-6 fill-myBlack" />
            </span>
            <div class="font-semibold text-base">Customizable Elements</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cumque veniam praesentium
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
