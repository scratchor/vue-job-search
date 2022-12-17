<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    // value: { // another approach
    //   type: String,
    //   required: true,
    // },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["handleInput", "update:modelValue"],
  methods: {
    handleInput($event) {
      // this.$emit("handleInput", $event.target.value); // another approach
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<style scoped></style>
