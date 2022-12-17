<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar";
import JobListings from "@/components/JobResults/JobListings";

export default {
  name: "JovResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
