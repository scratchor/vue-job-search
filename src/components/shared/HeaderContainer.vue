<template>
  <div class="w-full border-b border-solid border-bgray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Default title</slot>
      <slot name="subtitle">Default subtitle</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContainer",
};
</script>

<style scoped></style>
