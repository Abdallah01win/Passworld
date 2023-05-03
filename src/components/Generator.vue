<script>
import { ref, computed, onMounted, watch } from "vue";

export default {
  setup() {
    const passwordLength = ref(20);
    const password = ref("");
    const includeNumbers = ref(true);
    const includeSymbols = ref(false);
    const includeLowercase = ref(true);
    const includeUppercase = ref(true);
    const copied = ref(false);

    const passwordStrength = computed(() => {
      if (passwordLength.value < 5) {
        return "Very weak";
      } else if (passwordLength.value >= 5 && passwordLength.value < 10) {
        return "Weak";
      } else if (passwordLength.value >= 10 && passwordLength.value < 20) {
        return "Moderate";
      } else if (passwordLength.value >= 20 && passwordLength.value < 30) {
        return "Strong";
      } else {
        return "Very strong";
      }
    });

    const atLeastOneChecked = computed(() => {
      return (
        includeNumbers.value ||
        includeSymbols.value ||
        includeLowercase.value ||
        includeUppercase.value
      );
    });

    const generatePassword = () => {
      let characters = "";
      if (includeNumbers.value) {
        characters += "0123456789";
      }
      if (includeSymbols.value) {
        characters += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=§±";
      }
      if (includeLowercase.value) {
        characters += "abcdefghijklmnopqrstuvwxyz";
      }
      if (includeUppercase.value) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      let result = "";
      for (let i = 0; i < passwordLength.value; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      password.value = result;
    };

    const copyToClipboard = () => {
      const input = document.createElement("input");
      input.value = password.value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      copied.value = true;
      document.body.removeChild(input);
      setTimeout(() => {
        copied.value = false;
      }, 5000);
    };

    onMounted(() => {
      generatePassword();
    });

    const optionsToWatch = [
      passwordLength,
      includeNumbers,
      includeSymbols,
      includeLowercase,
      includeUppercase,
    ];
    optionsToWatch.forEach((option) => {
      watch(option, generatePassword);
    });

    return {
      passwordLength,
      password,
      includeNumbers,
      includeSymbols,
      includeLowercase,
      includeUppercase,
      generatePassword,
      copyToClipboard,
      passwordStrength,
      atLeastOneChecked,
      copied,
    };
  },
};
</script>

<template>
  <div
    class="text-center md:w-[60%] lg:w-[50%] xl:w-[45%] flex flex-col gap-y-4 max-sm:px-6"
  >
    <div class="my-6 md:my-3">
      <h2
        class="text-3xl md:text-4xl font-bold font-rum mb-3 md:mb-5"
        :class="{
          'text-myRed': passwordLength < 10,
          'text-myGold-200': passwordLength < 20,
          'text-myGreen': passwordLength >= 20,
        }"
      >
        ({{ passwordLength }}) {{ passwordStrength }} Password
      </h2>
      <div>
        <input
          id="password"
          type="text"
          :value="password"
          readonly
          class="border-[3px] border-myBlack rounded-lg text-lg md:text-xl py-2 px-4 font-semibold text-center w-full drop-shadow-md"
        />
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <div class="flex items-center space-x-2">
        <input
          id="password-length"
          type="range"
          v-model="passwordLength"
          min="1"
          max="50"
          step="1"
          class="w-full appearance-none rounded-lg h-5 bg-myPurple-100 border-[3px] border-myBlack transition-all"
        />
      </div>
    </div>
    <div
      class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 md:gao-y-6 text-xl md:text-base my-3"
    >
      <label class="flex items-center gap-3 cursor-pointer"
        ><input type="checkbox" v-model="includeNumbers" /> Numbers</label
      >
      <label class="flex items-center gap-3 cursor-pointer"
        ><input type="checkbox" v-model="includeSymbols" /> Symbols</label
      >
      <label class="flex items-center gap-3 cursor-pointer"
        ><input type="checkbox" v-model="includeLowercase" />
        Lowercase
      </label>
      <label class="flex items-center gap-3 cursor-pointer"
        ><input type="checkbox" v-model="includeUppercase" />
        Uppercase
      </label>
    </div>
    <div class="flex items-center justify-center w-full mt-3">
      <div
        class="flex items-center w-full max-md:flex-wrap max-md:gap-y-6 sm:gap-x-6"
      >
        <button
          @click="generatePassword"
          :disabled="!atLeastOneChecked"
          class="bottomShadow py-2 px-4 font-bold flex items-center justify-center gap-x-3 w-full bg-myGold-300 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all"
        >
          <span>
            <img src="../assets/generate.svg" alt="generate" />
          </span>
          <span> Generate Password </span>
        </button>
        <button
          @click="copyToClipboard"
          class="bottomShadow py-2 px-4 font-bold w-full bg-myPurple-100 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all"
          :class="{ 'bg-myGreen': copied }"
          :disabled="copied"
        >
          <transition name="fade" mode="out-in">
            <span
              v-if="!copied"
              class="flex items-center justify-center gap-x-3"
            >
              <span>
                <img
                  src="../assets/copy.svg"
                  alt="copy"
                  class="transition-all"
                />
              </span>
              <span> Copy Password </span>
            </span>
            <span
              v-else
              class="flex items-center justify-center py-1 gap-x-3 text-white"
            >
              <span>
                <img
                  src="../assets/checked.svg"
                  alt="copy"
                  class="transition-all"
                />
              </span>
              <span> Password Copied </span>
            </span>
          </transition>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 32px;
  height: 32px;
  background-color: #fac82f;
  border: 3px solid #1f1f1f;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 0px #1f1f1f;
  transform: translateY(-1px);
}

input[type="range"]::-moz-range-thumb {
  width: 32px;
  height: 32px;
  background-color: #fac82f;
  border: 3px solid #1f1f1f;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 0px #1f1f1f;
  transform: translateY(-1px);
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  height: 27px;
  width: 27px;
  background-color: #fefefe;
  border: solid 2px #1f1f1f;
  border-radius: 8px;
  box-shadow: 2px 2px 0px 0px #1f1f1f;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="checkbox"]::after {
  content: url("../assets/check.svg");
  display: none;
}

input[type="checkbox"]:active {
  box-shadow: 1px 1px 0px 0px #1f1f1f;
  transform: translateY(2px);
  transition: all ease-in 150ms;
}
input[type="checkbox"]:checked {
  background-color: #01dc2c;
}
input[type="checkbox"]:checked::after {
  display: block;
}
</style>
