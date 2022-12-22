<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-bgray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do You want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filter" type="secondary" />
        </div>
      </div>

      <accordion header="Degree" />

      <accordion header="JobTypes">
        <p>Placeholder for now</p>
      </accordion>

      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/shared/ActionButton";
import Accordion from "@/components/shared/Accordion";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
  },
};
</script>

<style scoped></style>
