<script setup lang="ts">
  import { Education } from "@resume-v2/resume-infrastructure/models/Education";
  import { formatDate } from "@resume-v2/resume-infrastructure/util/formatDate";

  defineProps<{
    education?: Education
  }>();
</script>
<template>
  <h4>{{ education.institutionName }} - {{ education.city }}, {{ education.state }}</h4>
  <h5>{{ education.degreeType }}'s in {{ education.degreeFocus }}, Graduated {{ formatDate(education.graduationDate, 'MM/YYYY') }}</h5>
</template>