<script setup lang="ts">
  import { Business, Reference } from '@resume-v2/resume-infrastructure/models/Reference';
  import CommonSection from './CommonSection.vue';
  import ReferenceItem from './ReferenceItem.vue';

  const props = defineProps<{
    references?: Reference[];
    businesses?: Business[];
  }>();

  function businessFor(reference?: Reference) : Business | undefined {
    return props.businesses.filter(business => business).find(business => reference?.business === business.id);
  }

</script>
<template>
  <CommonSection heading="References">
    <ReferenceItem v-for="reference in references ?? []" :reference="reference" :business="businessFor(reference)" />
  </CommonSection>
</template>