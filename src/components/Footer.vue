<script setup>
import Twitter from './icons/Logos/Twitter.vue';
import Github from './icons/Logos/Github.vue';
import Linkedin from './icons/Logos/Linkedin.vue';
</script>
<template>
    <footer class=" /text-background">
        <div class="py-4 flex items-center justify-between xl:max-w-[1024px] mx-auto border-t border-myBlack/40">
            <div class="font-normal">2023 <span class="text-base">&#169;</span> By Abdallah Bari</div>

            <div class="flex items-center gap-4">
                <span class="p-2 bg-myGray-300 rounded-full">
                    <Twitter class="w-5 fill-myBlack" />
                </span>
                <span class="p-2 bg-myGray-300 rounded-full">
                    <Github class="w-5 fill-myBlack" />
                </span>
                <span class="p-2 bg-myGray-300 rounded-full">
                    <Linkedin class="w-5 fill-myBlack" />
                </span>
            </div>
        </div>
    </footer>
</template>
