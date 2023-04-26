<script>
import { ref, computed } from "vue";
import Button from "./Button.vue";

export default {
  components: {
    Button
  },
  setup() {
    const passwordLength = ref(8);
    const password = ref("");
    const includeNumbers = ref(true);
    const includeSymbols = ref(false);
    const includeLowercase = ref(true);
    const includeUppercase = ref(false);
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
        //iconClass.value = 'far fa-copy';
      }, 5000);
    };

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
      copied
    };
  },
};
</script>

<template>
  <div class="text-center w-[45%] flex flex-col gap-y-4">
    <div class="my-3">
      <h2 class="text-4xl font-bold font-rum mb-5" :class="{
        'text-myRed': passwordLength < 10,
        'text-myGold-200': passwordLength < 20,
        'text-myGreen': passwordLength >= 20,
      }">
        ({{ passwordLength }}) {{ passwordStrength }} Password
      </h2>
      <div>
        <input id="password" type="text" :value="password" readonly
          class="border-[3px] border-myBlack rounded-lg text-xl py-2 px-4 font-semibold text-center w-full drop-shadow-md" />
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <div class="flex items-center space-x-2">
        <input id="password-length" type="range" v-model="passwordLength" min="1" max="50" step="1"
          class="w-full appearance-none rounded-lg h-5 bg-myPurple-100 border-[3px] border-myBlack transition-all">
      </div>
    </div>
    <div class="w-full flex items-center justify-between my-3">
      <label><input type="checkbox" v-model="includeNumbers" /> Numbers</label>
      <label><input type="checkbox" v-model="includeSymbols" /> Symbols</label>
      <label><input type="checkbox" v-model="includeLowercase" /> Lowercase
      </label>
      <label><input type="checkbox" v-model="includeUppercase" /> Uppercase
      </label>
    </div>
    <div class="flex items-center justify-center w-full mt-3">
      <div class="flex items-center w-full gap-x-6">
        <button @click="generatePassword" :disabled="!atLeastOneChecked"
          class="bottomShadow py-2 px-4 font-bold flex items-center justify-center gap-x-3 w-full bg-myGold-300 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all">
          <span>
            <img src="../assets/generate.svg" alt="generate" />
          </span>
          <span> Generate Password </span>
        </button>
        <!-- <Button iconName="../assets/generate.svg" buttonText="Generate Password" :handleClick="generatePassword" class="bg-myGold-300" /> -->
        <button @click="copyToClipboard"
          class="bottomShadow py-2 px-4 font-bold w-full bg-myPurple-100 border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px] transition-all"
          :class="{ 'bg-myGreen': copied }" :disabled="copied">
          <transition name="fade" mode="out-in">
            <span v-if="!copied" class="flex items-center justify-center gap-x-3">
              <span>
                <img src="../assets/copy.svg" alt="copy" class="transition-all"/>
              </span>
              <span> Copy Password </span>
            </span>
            <span v-else class="flex items-center justify-center py-1 gap-x-3 text-white ">
              <span>
                <img src="../assets/checked.svg" alt="copy" class="transition-all"/>
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

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 32px;
  height: 32px;
  background-color: #FAC82F;
  border: 3px solid #1F1F1F;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 1px #1f1f1f;
  transform: translateY(-1px);
}

input[type=range]::-moz-range-thumb {
  width: 32px;
  height: 32px;
  background-color: #FAC82F;
  border: 3px solid #1F1F1F;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 0px 1px #1f1f1f;
  transform: translateY(-1px);
}
</style>
