<script setup lang="ts">
  import CommonSection from "./CommonSection.vue";
  import type { Education } from "@resume-v2/resume-infrastructure/models/Education";
  import EducationItem from "./EducationItem.vue";

  defineProps<{
    education?: Education[]
  }>();
</script>
<template>
  <CommonSection heading="Education">
    <div v-for="edu of education ?? []">
      <EducationItem :education="edu" />
    </div>
  </CommonSection>

  <!-- <common-section heading="Education">
    <div repeat.for="edu of education">
      <education education.bind="edu"></education>
    </div>
  </common-section> -->
</template>