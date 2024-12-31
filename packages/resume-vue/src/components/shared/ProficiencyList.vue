<script setup lang="ts">
  import type { Proficiency } from '@resume-v2/resume-infrastructure/models';
  import CommonSection from './CommonSection.vue';
  import ProficiencyItem from './ProficiencyItem.vue';

  withDefaults(defineProps<{
    proficiencies?: Proficiency[];
    condensed?: boolean;
  }>(), {
    condensed: true
  });
  ;

  function alignmentFor(index: number) {
    switch(index % 3) {
      case 0: //first column
        return "left";
      case 1: //second column
        return "center";
      case 2: //third column
        return "right";
    }
  }
</script>
<template>
  <CommonSection heading="Proficiencies">
    <div>
      <h4>
        Proficient in several modern programming techniques and technologies
      </h4>
      <hr>
      <ProficiencyItem v-for="(proficiency, index) of proficiencies ?? []" :proficiency :align="alignmentFor(index)" :condensed />
    </div>
  </CommonSection>
</template>