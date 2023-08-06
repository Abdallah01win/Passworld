<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import Navigation from '../components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
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
  <main class="mesh h-screen relative clip">
    <Navigation />
    <section class="w-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <div
        class="max-w-[300px] xs:max-w-[365px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[1024px] mx-auto py-12 text-center">
        <div class="capitalize font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">404 Page not Found</div>
        <button @click="handleClick" class="border border-myBlack rounded-xl py-3 px-8 cursor-pointer">{{
          buttonText }}</button>
      </div>
    </section>
  </main>
</template>