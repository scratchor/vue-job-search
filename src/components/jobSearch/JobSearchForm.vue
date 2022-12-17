<template>
  <form
    class="w-full flex items-center h-12 mt-14 border border-solid border-bgray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />

        <!--          :value="role" // another approach -->
        <!--          @handle-input="updateRole"-->

        <!--        <input
          v-model="role"
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />-->
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-bgray-3 bg-bgray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where&</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
        <!--        <input
          type="text"
          :value="location"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
          @input="location = $event.target.value"
        />-->
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="form-submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton";
import TextInput from "@/components/shared/TextInput";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    // updateLocation(payload) {
    //   this.location = payload;
    // },
    updateRole(payload) {
      this.role = payload;
    },
    searchForJobs() {
      return this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>

<style scoped></style>
