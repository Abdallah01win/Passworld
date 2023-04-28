<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const timer = ref(null);
    const count = ref(5);

    const startTimer = () => {
      timer.value = setInterval(() => {
        count.value--;
        if (count.value === 0) {
          clearInterval(timer.value);
          router.push('/');
        }
      }, 1000);
    };

    onMounted(() => {
      startTimer();
    });

    const handleClick = () => {
      if (timer.value !== null) {
        clearTimeout(timer.value);
        router.push('/');
      } else {
        startTimer();
      }
    };

    const buttonText = computed(() => {
      return `Going Back Home in ${count.value}`;
    });

    return { handleClick, buttonText };
  }
};
</script>

<template>
     <main class="flex items-center justify-center h-full">
        <div class="flex flex-col items-center max-sm:mx-6 gap-y-6 md:gap-y-8">
            <img src="../assets/404.svg" alt="404" class=" md:mb-6">
            <p class="font-bold text-xs md:text-lg bg-white border-[3px] border-myBlack py-4 text-center w-full rounded-lg max-sm:px-3">Page Not Found... There's Nothing Here!</p>
            <button @click="handleClick" class="bottomShadow py-2 px-4 font-bold w-fit bg-myGold-300 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all">{{ buttonText }}</button>
        </div>
     </main>
</template>