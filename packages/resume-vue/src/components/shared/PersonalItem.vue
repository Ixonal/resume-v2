<script setup lang="ts">
import type { PersonalItem } from '@resume-v2/resume-infrastructure/models/PersonalItem';

  
  defineProps<{
    personalItem?: PersonalItem
  }>();

</script>
<template>
  <h5>
    {{ personalItem.text }}
  </h5>
</template>