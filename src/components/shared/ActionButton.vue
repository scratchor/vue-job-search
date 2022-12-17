<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.text-white {
  color: white;
}

.primary {
  @apply text-white border-0 bg-bb-1 hover:shadow-blue rounded;
}

.secondary {
  @apply text-bb-1 hover:bg-bb-2;
  background-color: transparent;
}

.secondary:hover {
  color: white;
}
</style>
