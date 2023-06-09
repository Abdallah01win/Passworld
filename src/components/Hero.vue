<script setup>
import Pichart from './icons/Pichart.vue';
import Shiled from './icons/Shiled.vue';
</script>
<template>
    <section class="py-12">
        <div class="flex flex-col items-center justify-center text-center">
            <h1 class="capitalize font-bold text-6xl leading-tight">The strongest passwords, Effortlessly.</h1>
            <p class="w-[80%] leading-relaxed text-base font-Montserrat my-6">Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Et voluptates expedita consequatur voluptatum necessitatibus minima praesentium nulla
                amet!</p>

            <div class="flex items-center gap-x-8">
                <button class="bg-myBlack text-background rounded-xl py-3 px-8 font-normal">Get Started</button>
                <button class="border border-myBlack rounded-xl py-3 px-8">How it works</button>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-x-6 mt-32">
            <div class="flex gap-x-3">
                <div class="flex flex-col items-center justify-between">
                    <Pichart class="w-6 fill-myBlack" />
                    <hr class="w-px bg-myBlack h-12">
                </div>

                <div>
                    <div class="font-semibold mb-2">Customizable categories</div>
                    <p class="font-Montserrat leading-relaxed text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque veniam praesentium</p>
                </div>
            </div>
            <div class="flex gap-x-3">
                <div class="flex flex-col items-center justify-between">
                    <Shiled class="w-6 fill-myBlack" />
                    <hr class="w-px bg-myBlack h-12">
                </div>

                <div>
                    <div class="font-semibold mb-2">Customizable categories</div>
                    <p class="font-Montserrat leading-relaxed text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque veniam praesentium</p>
                </div>
            </div>
            <div class="flex gap-x-3">
                <div class="flex flex-col items-center justify-between">
                    <div class="p-3 border border-myBlack rounded-full"></div>
                    <hr class="w-px bg-myBlack h-12">
                </div>

                <div>
                    <div class="font-semibold mb-2">Customizable categories</div>
                    <p class="font-Montserrat leading-relaxed text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque veniam praesentium</p>
                </div>
            </div>

        </div>
</section></template>