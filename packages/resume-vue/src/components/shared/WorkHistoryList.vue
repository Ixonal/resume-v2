<script setup lang="ts">
  import type { Business, WorkHistory } from '@resume-v2/resume-infrastructure/models';
  import CommonSection from './CommonSection.vue';
  import WorkHistoryItem from './WorkHistoryItem.vue';
  import { sortBy } from '@resume-v2/resume-infrastructure/util/sortBy';
  import { reactive } from 'vue';

  const props = defineProps<{
    workHistory?: WorkHistory[], 
    businesses?: Business[]
  }>();

  const state = reactive({
    get recentWorkHistory() {
      return sortBy(props?.workHistory ?? [], wh => wh.start, false)?.slice(0, 4);
    }
  });

  function businessFor(work: WorkHistory) : Business | undefined {
    return props.businesses.filter(business => business).find(business => work?.business === business.id);
  }

</script>
<template>
  <CommonSection heading="Work History">
    <WorkHistoryItem :work-history="work" :business="businessFor(work)" v-for="work of state.recentWorkHistory" />
  </CommonSection>
</template>