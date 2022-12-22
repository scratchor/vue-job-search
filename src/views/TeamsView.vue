<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h3 class="w-full my-4 text-base">
        It's awesome working here. Join our great team!
      </h3>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/shared/HeaderContainer";

export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>

<style scoped></style>
