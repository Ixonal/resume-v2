<script setup lang="ts">
  import type { Business, WorkHistory } from "@resume-v2/resume-infrastructure/models";
  import { formatDate } from "@resume-v2/resume-infrastructure/util/formatDate";
  import { autoLink } from "@resume-v2/resume-infrastructure/util/autoLink";

  defineProps<{
    workHistory?: WorkHistory, 
    business?: Business
  }>();

</script>

<style lang="sass" src="./WorkHistoryItem.scss"></style>

<template>
  <div class="work-history-item" v-if="workHistory && business">
    <h4 class="description">
      {{ business.name }} - {{ workHistory.title }}
    </h4>
    <h5 class="clearfix" v-if="workHistory.start">
      <span class="period pull-left">
        {{ formatDate(workHistory.start, 'MM/YYYY') }} - {{ formatDate(workHistory.end, 'MM/YYYY') }}
      </span>
      <span class="location pull-right">
        {{ business.city }}<span v-if="business.state">, {{ business.state }}</span>
      </span>
    </h5>
    <hr>
    <p class="long-description" v-html="autoLink(workHistory.description)"></p>
  </div>
</template>