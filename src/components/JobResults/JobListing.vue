<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-bgray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-bgray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>

          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>

          <h2 class="mt-5 mb-2 font-medium">Job Type:</h2>
          <span>{{ job.jobType }}</span>
        </div>

        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-bb-1">Expand</router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/result/${this.job.id}`;
    },
  },
};
</script>

<style scoped></style>
