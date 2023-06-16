<script>
import { ref, computed, onMounted, watch, watchEffect } from "vue";
import Copy from "./icons/Copy.vue";
import Checks from "./icons/Checks.vue";

export default {
  components: {
    Copy,
    Checks
  },
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

    const checkboxes = [
      includeNumbers,
      includeSymbols,
      includeLowercase,
      includeUppercase,
    ];

    const numCheckedCheckboxes = computed(() => {
      return checkboxes.filter((checkbox) => checkbox.value).length;
    });

    watchEffect(() => {
      if (numCheckedCheckboxes.value === 1) {
        const lastCheckedCheckbox = checkboxes.find(
          (checkbox) => checkbox.value
        );
        lastCheckedCheckbox.disabled = true;
      } else {
        checkboxes.forEach((checkbox) => (checkbox.disabled = false));
      }
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
      copied.value = false;
    };

    const copyToClipboard = () => {
      const input = document.createElement("input");
      input.value = password.value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      copied.value = true;
      document.body.removeChild(input);
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
      numCheckedCheckboxes,
      copied,
    };
  },
};
</script>

<template>
  <div class="rounded-3xl border border-myBlack bg-background py-8 px-6 w-full boxShadow">
    <div class="flex flex-col gap-y-4 max-md:px-6 mx-auto font-Montserrat">
      <!-- Password input -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3 md:mb-5">
          <h2 class="text-2xl font-bold" :class="{
            'text-myRed/100': passwordLength < 10,
            'text-orange-400': passwordLength < 20,
            'text-green-400': passwordLength >= 20,
          }">
            ({{ passwordLength }}) {{ passwordStrength }} Password
          </h2>

          <span @click="copyToClipboard" class="bg-[#F5F5F4] p-3 rounded-full cursor-pointer hover:bg-gray-200/90"
            :disabled="copied">
            <Copy v-if="!copied" class="w-6 fill-myBlack" />
            <Checks v-else class="w-6 fill-myBlack" />
          </span>
        </div>
        <div>
          <input id="password" type="text" :value="password" readonly
            class="border border-myBlack rounded-xl text-sm py-3 px-4 font-semibold text-center w-full boxShadow" />
        </div>
      </div>
      <!-- Range -->
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-2">
          <input id="password-length" type="range" v-model="passwordLength" min="1" max="50" step="1"
            class="w-full appearance-none rounded-lg h-4 bg-[#F5F5F4] border border-myBlack transition-all boxShadow" />
        </div>
      </div>
    </div>
    <!-- Checkboxes -->
    <div class="mx-auto">
      <div class="grid grid-cols-2 /md:grid-cols-3 /lg:flex /lg:justify-between gap-y-8 /md:gap-y-6 text-sm my-8 bg-my">
        <label class="flex items-center gap-3 cursor-pointer w-fit"><input type="checkbox" v-model="includeNumbers"
            :disabled="numCheckedCheckboxes === 1 && includeNumbers" />
          Numbers</label>
        <label class="flex items-center gap-3 cursor-pointer w-fit"><input type="checkbox" v-model="includeLowercase"
            :disabled="numCheckedCheckboxes === 1 && includeLowercase" />
          Lowercase
        </label>
        <label class="flex items-center gap-3 cursor-pointer w-fit"><input type="checkbox" v-model="includeUppercase"
            :disabled="numCheckedCheckboxes === 1 && includeUppercase" />
          Uppercase
        </label>
        <label class="flex items-center gap-3 cursor-pointer w-fit"><input type="checkbox" v-model="includeSymbols"
            :disabled="numCheckedCheckboxes === 1 && includeSymbols" />
          Symbols</label>
      </div>
    </div>
    <!-- Buttons -->
    <div class="text-center flex flex-col gap-y-4 max-md:px-6 mx-auto">
      <div class="flex items-center justify-center w-full mt-auto">
        <div class="flex items-center w-full gap-y-4 flex-wrap">
          <!-- <button
            @click="generatePassword"
            class="bottomShadow py-2 px-4 font-bold flex items-center justify-center gap-x-3 w-full bg-myGold-300 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all"
          >
            <span>
              <img src="../assets/generate.svg" alt="generate" />
            </span>
            <span> Generate Password </span>
          </button> -->
          <button @click="generatePassword"
            class="bg-[#F5F5F4] text-myBlack py-4 px-16 rounded-lg w-full border border-myBlack boxShadow hover:bg-gray-200/90">Generate
            Password</button>
          <!-- <button @click="copyToClipboard" class="bg-transparent text-myBlack border border-myBlack py-4 px-16 rounded-lg w-full">Copy Password</button> -->

          <!-- <button
            @click="copyToClipboard"
            class="bottomShadow py-2 px-4 font-bold w-full border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all"
            :class="{ 'bg-myGreen': copied, 'bg-myPurple-100': !copied }"
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
          </button> -->
        </div>
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
  width: 28px;
  height: 28px;
  background-color: #F5F5F4;
  border: 1px solid #0A0A0A;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 0px #0A0A0A;
  transform: translateY(-1px);
}

input[type="range"]::-moz-range-thumb {
  width: 28px;
  height: 28px;
  background-color: #F5F5F4;
  border: 1px solid #0A0A0A;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 0px #0A0A0A;
  transform: translateY(-1px);
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  height: 27px;
  width: 27px;
  background-color: #FFFFFF;
  border: solid 1px #0A0A0A;
  border-radius: 8px;
  box-shadow: 1px 1px 0px 0px #0A0A0A;
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
  background-color: #F5F5F4;
}

input[type="checkbox"]:checked::after {
  display: grid;
  place-content: center;
}

.boxShadow {
  box-shadow: 1px 1px 0px 0px #0A0A0A;
}
</style>
