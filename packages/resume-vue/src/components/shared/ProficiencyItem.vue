<script setup lang="ts">
  import type { Proficiency } from "@resume-v2/resume-infrastructure/models";

  defineProps<{
    proficiency?: Proficiency, 
    align: "left" | "right" | "center", 
    condensed: boolean
  }>();
</script>

<style lang="scss" src="./ProficiencyItem.scss"></style>

<template>
  <div class="proficiency" :class="{ 'condensed': condensed }">
    <p class="proficiency-container" :class="{ ['align-' + align]: true }" :title="proficiency.description">
      <span class="h5">{{ proficiency.name }}</span>
      <span v-if="!condensed">
        - {{ proficiency.level }}: {{ proficiency.description }}
      </span>
    </p>
  </div>
</template>