<script setup>
import Generator from "../components/Generator.vue";
import Info from "../components/Info.vue";
import Navigation from "../components/Navigation.vue";
import Hero from '../components/Hero.vue';
import ArrowRight from '../components/icons/ArrowRight.vue';
</script>

<template>
  <main class="mesh h-screen relative clip">
    <Navigation />
    <div class="w-full absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <Hero />
    </div>
  </main>
  
  <section id="generatorSection">
    <div class="xl:max-w-[1024px] mx-auto py-20 grid grid-cols-2 gap-x-8 ">
    <div>
      <div class="text-4xl font-bold mb-6 leading-tight">Secure your vertuale life with the strongest passwords.</div>
      <p class="leading-relaxed font-Montserrat mb-4">Coming up with strong, unique passwords can be a challenge. <span class="font-bold uppercase">PassWorld</span> provides an easy and secure way to randomly generate passwords for all of your accounts. With our service, you can generate long, complex passwords that are <span class="font-bold uppercase">impossible</span> to guess.</p>
      <p class="leading-relaxed font-Montserrat mb-6">Our service is  <span class="font-bold uppercase">free</span> and easy to use. All you have to do is select the length and complexity of the password you want, and our generator will <span class="font-bold uppercase">instantly</span> create a secure password for you. Create one-time passwords for important accounts or use our service to generate an entirely new set of passwords.</p>
      <div class="flex items-center gap-x-4">
        <!-- <button
          class="bg-myBlack text-background rounded-xl py-3 px-10 font-normal"
        >
        How does it works
        </button> -->
        <button class="flex items-center gap-x-3 border border-myBlack rounded-xl py-3 px-10 cursor-default">
         <span>Try it Now!</span>
          <span>
            <ArrowRight class="w-6 fill-myBlack" />
          </span>
        </button>
        <!-- <div class="flex items-center gap-5 pb-1 border-b border-myBlack">
          <span>Try it Now!</span>
          <span>
            <ArrowRight class="w-6 fill-myBlack" />
          </span>
        </div> -->
      </div>
    </div>
    <div class="flex justify-center">
      <Generator class=""/>
    </div>
  </div>
  </section>

  <Info />
</template>


<style scoped>
.clip {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);

}

.mesh {
  /* background-color: #ffffff;
background-image: radial-gradient(at 41% 16%, hsla(27, 92%, 68%, 1) 0, hsla(27, 92%, 68%, 0) 50%),
radial-gradient(at 95% 3%, hsla(188, 93%, 68%, 1) 0, hsla(188, 93%, 68%, 0) 50%),
radial-gradient(at 91% 94%, hsla(206, 86%, 67%, 1) 0, hsla(206, 86%, 67%, 0) 50%),
radial-gradient(at 50% 36%, hsla(197, 88%, 61%, 1) 0, hsla(197, 88%, 61%, 0) 50%); */
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-image: radial-gradient(at 38% 41%,
      hsla(166, 86%, 50%, 1) 0,
      hsla(166, 86%, 50%, 0) 50%),
    radial-gradient(at 92% 78%,
      hsla(73, 94%, 51%, 1) 0,
      hsla(73, 94%, 51%, 0) 50%),
    radial-gradient(at 96% 90%,
      hsla(93, 87%, 69%, 1) 0,
      hsla(93, 87%, 69%, 0) 50%),
    radial-gradient(at 53% 97%,
      hsla(197, 93%, 68%, 1) 0,
      hsla(197, 93%, 68%, 0) 50%);
}

.beam{
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-image: radial-gradient(at 150% 39%,
      hsla(166, 86%, 50%, 1) 0,
      hsla(166, 86%, 50%, 0) 50%),
    radial-gradient(at 150% 62%,
      hsla(166, 86%, 50%, 1) 0,
      hsla(166, 86%, 50%, 0) 50%);
}

.color{
  color : #12edba;
}
</style>
