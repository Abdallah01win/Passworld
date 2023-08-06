<script setup>
import Gloab from "./icons/Gloab.vue";
import Close from "./icons/Close.vue";
import MenuLines from "./icons/MenuLines.vue";

import { ref } from 'vue'
const isMenuOpen = ref(false)

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <nav
        class="max-w-[300px] xs:max-w-[365px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto py-5 flex items-center justify-between">
        <RouterLink to="/" class="font-semibold uppercase text-lg flex items-center">
            Passw
            <Gloab class="w-5 h-5" />rld
        </RouterLink>
        <ul class="flex items-center gap-x-6 max-md:hidden">
            <li class="cursor-pointer">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="cursor-pointer">
                <a href="#infoSection">About</a>
            </li>
            <li class="cursor-pointer">
                <a href="#generatorSection">Generate</a>
            </li>
        </ul>
        <div class="flex items-center gap-x-6 max-md:hidden">
            <a href="#generatorSection" class="border border-myBlack rounded-xl py-3 px-8">Get Started</a>
        </div>
        <div class="max-md:block hidden" @click="openMenu">
            <MenuLines v-show="!isMenuOpen" class="w-7 fill-black" />
            <Close v-show="isMenuOpen" class="w-7 fill-black" />
        </div>

    </nav>

    <!-- Mobile Menu -->
    <div class="w-full h-screen bg-background z-50 fixed top-0 left-0 overflow-auto flex flex-col items-center justify-center"
        v-show="isMenuOpen">
        <div class="absolute top-0 right-[50%] py-5 flex justify-between translate-x-[50%] w-[300px] xs:w-[365px] sm:w-[520px] md:w-[680px]" @click="openMenu">
            <RouterLink to="/" class="font-semibold uppercase text-lg flex items-center">
                Passw
                <Gloab class="w-5 h-5" />rld
            </RouterLink>
            <Close class="w-7 fill-black" />
        </div>

        <ul class="flex flex-col items-center justify-center gap-x-6 text-black text-lg gap-y-4">
            <li class="cursor-pointer">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="cursor-pointer">
                <a href="#infoSection">About</a>
            </li>
            <li class="cursor-pointer">
                <a href="#generatorSection">Generate</a>
            </li>
        </ul>
    </div>
</template>
