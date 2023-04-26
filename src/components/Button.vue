<script>
export default {
    props: {
        iconName: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        handleClick: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
}
</script>
<template>
    <button @click="handleClick()"
        class="bottomShadow py-2 px-4 font-semibold flex items-center text-center gap-x-3 w-fit border-[3px] border-myBlack boxShadow rounded-lg active:translate-y-[4px]">
        <span>
            <img :src="iconName" alt="Button Icon" />
        </span>
        <span> {{ buttonText }} </span>
    </button>
</template>