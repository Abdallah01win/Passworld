<script setup>
import Gloab from "./icons/Gloab.vue";
</script>
<template>
    <nav class="max-w-[285px] xs:max-w-[365px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto py-5 flex items-center justify-between">
        <RouterLink to="/" class="font-semibold uppercase text-lg flex items-center">
            Passw<Gloab class="w-5 h-5" />rld
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
        <div class="max-md:block hidden">
            X
        </div>
    </nav>
</template>

