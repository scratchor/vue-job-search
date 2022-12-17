<template>
  <main class="flex-auto p-8 bg-bgray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-bb-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-bb-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/JobResults/JobListing";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    currentPage() {
      return Number(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const firstJobIndex = (this.currentPage - 1) * 10;
      const lastJobIndex = this.currentPage * 10;

      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    /*
    Three environments
    - development
    - production
    - test
    * */
    const baseUrl = process.env.VUE_APP_API_URL;
    const { data } = await axios.get(`${baseUrl}/jobs`);
    this.jobs = data;
  },
};
</script>

<style scoped></style>
