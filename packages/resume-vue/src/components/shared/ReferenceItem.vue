<script setup lang="ts">
  import type { Business, Reference } from '@resume-v2/resume-infrastructure/models/Reference';
  import { formatPhone } from "@resume-v2/resume-infrastructure/util/formatPhone";

  
  defineProps<{
    reference?: Reference, 
    business?: Business
  }>();
</script>

<style lang="scss" src="./ReferenceItem.scss"></style>

<template>
  <div class="reference-item">
    <h4>{{ reference?.fullName }}</h4>
    <hr>
    <p class="reference-info">
      {{ business?.name }}<br>
      {{ business.city }}, {{ business.state }}<br>
      <a :href="'tel:' + reference?.phone" :title="'Click to call ' + reference?.fullName">{{ formatPhone(reference.phone) }}</a><br>
      <a :href="'mailto:' + reference?.email" :title="'Click to email ' + reference?.fullName">{{ reference.email }}</a>
    </p>
  </div>
  
</template>