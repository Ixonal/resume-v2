<script setup lang="ts">
  import { PersonalItem } from '@resume-v2/resume-infrastructure/models/PersonalItem';
import CommonSection from './CommonSection.vue';
  import PersonalItemComponent from './PersonalItem.vue';

  defineProps<{
    personalItems?: PersonalItem[];
  }>();
  
</script>
<template>
  <CommonSection heading="Personal">
    <PersonalItemComponent :personal-item="item" v-for="item of personalItems ?? []" />
  </CommonSection>
</template>