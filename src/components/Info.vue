<script setup>
import Lock from "./icons/Lock.vue";
import Pichart from "./icons/Pichart.vue";
import Shiled from "./icons/Shiled.vue";
</script>
<template>
  <section id="infoSection" class="sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto mt-8 my-24 ">
    <div class="md:text-2xl lg:text-3xl text-center font-bold mb-6">What we offer</div>
    <div class="grid /grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-8 max-lg:gap-y-8">
      <div class="flex gap-x-3">

        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Pichart class="w-6 fill-myBlack" />
            </span>
            <div class="text-base font-semibold ">Customizable Elements</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            You decide which charachters to be included in your passwords, so you can tailor them to any website
            requirements.
          </p>
        </div>
      </div>

      <div class="flex gap-x-3">
        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Shiled class="w-6 fill-myBlack" />
            </span>
            <div class="font-semibold text-base">impenetrable security</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            Passworld utilizes strong encryption algorithms to ensure that your passwords are of the highest complexity.
          </p>
        </div>
      </div>

      <div class="flex gap-x-3 /col-span-2">
        <div>
          <div class="flex items-center gap-3  mb-2">
            <span class="bg-myGray-300 p-2 rounded-full">
              <Lock class="w-6 fill-myBlack" />
            </span>
            <div class="font-semibold text-base">Elegant Simplicity</div>
          </div>
          <p class="font-Montserrat leading-relaxed text-xs">
            Our platform is easy to use and completely free. Best of all, it requires minimal effort allowing you to focus on more important tasks.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
