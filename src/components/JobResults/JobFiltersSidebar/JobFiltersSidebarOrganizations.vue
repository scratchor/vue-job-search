<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Facebook" type="checkbox" class="mr-3" />
            <label for="Facebook">Facebook</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Google" type="checkbox" class="mr-3" />
            <label for="Google">Google</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Microsoft" type="checkbox" class="mr-3" />
            <label for="Microsoft">Microsoft</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/shared/Accordion";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
};
</script>

<style scoped></style>
