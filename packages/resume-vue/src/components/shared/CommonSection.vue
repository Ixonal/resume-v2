<script setup lang="ts">
  defineProps<{
    heading?: string;
  }>();
</script>

<style lang="sass" src="./CommonSection.scss"></style>

<template>
  <div class="common-section">
    <fieldset>
      <legend v-if="heading"><h2>{{ heading }}</h2></legend>
      <slot></slot>
    </fieldset>
  </div>
</template>