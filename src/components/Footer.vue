<script setup>
import Twitter from './icons/Logos/Twitter.vue';
import Github from './icons/Logos/Github.vue';
import Linkedin from './icons/Logos/Linkedin.vue';
</script>
<template>
    <footer>
        <div class="max-w-[300px] xs:max-w-[365px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto py-4 flex max-xs:flex-col max-xs:gap-y-2 items-center justify-between  border-t border-myBlack/40">
            <div class="font-normal">2023 <span class="text-base">&#169;</span> By Abdallah Bari</div>

            <div class="flex items-center gap-4">
                <a href="https://twitter.com/AbdallahDev01 " target="_blank" rel="noopener noreferrer" class="flex " title="Twitter">

                    <span class="p-2 bg-myGray rounded-full hover:bg-gray-200/90">
                        <Twitter class="w-5 fill-myBlack" />
                    </span>
                </a>
                <a href="https://github.com/Abdallah01win" target="_blank" rel="noopener noreferrer" class="flex " title="Github">
                    <span class="p-2 bg-myGray rounded-full hover:bg-gray-200/90">
                        <Github class="w-5 fill-myBlack" />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/abdallahbari/" target="_blank" rel="noopener noreferrer" class="flex" title="Linkedin">
                    <span class="p-2 bg-myGray rounded-full hover:bg-gray-200/90">
                        <Linkedin class="w-5 fill-myBlack" />
                    </span>
                </a>
            </div>
        </div>
    </footer>
</template>
