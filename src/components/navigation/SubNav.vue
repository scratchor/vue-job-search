<template>
  <div class="w-full h-16 bg-white border-b border-bgray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-bgreen-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FILTERED_JOBS } from "@/store/constants";

export default {
  name: "SubNav",
  computed: {
    ...mapGetters([FILTERED_JOBS]),
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>

<style scoped></style>
