<script setup>
import ArrowRight from '../components/icons/ArrowRight.vue';
import Generator from "../components/Generator.vue";
</script>
<template>
    <section id="generatorSection">
        <div
            class="max-w-[300px] xs:max-w-[365px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8 max-lg:gap-y-4">
            <div>
                <div class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">Secure your vertuale life with
                    the strongest passwords.</div>
                <p class="leading-relaxed font-Montserrat mb-4 w-full md:w-[85%] lg:w-full">Coming up with strong, unique
                    passwords can be a challenge. <span class="font-bold uppercase">PassWorld</span> provides an easy and
                    secure way to randomly generate passwords for all of your accounts. With our service, you can generate
                    long, complex passwords that are <span class="font-bold uppercase">impossible</span> to guess.</p>
                <p class="leading-relaxed font-Montserrat mb-6 w-full md:w-[85%] lg:w-full">Our service is <span
                        class="font-bold uppercase">free</span> and easy to use. All you have to do is select the length and
                    complexity of the password you want, and our generator will <span
                        class="font-bold uppercase">instantly</span> create a secure password for you. Create one-time
                    passwords for important accounts or use our service to generate an entirely new set of passwords.</p>
                <div class="flex items-center gap-x-4 max-lg:hidden">
                    <button
                        class="boxShadow flex items-center gap-x-3 border border-myBlack rounded-xl py-3 px-10 cursor-default">
                        <span>Try it Now!</span>
                        <span>
                            <ArrowRight class="w-6 fill-myBlack" />
                        </span>
                    </button>
                </div>
            </div>
            <div class="flex justify-center">
                <Generator />
            </div>
        </div>
    </section>
</template>