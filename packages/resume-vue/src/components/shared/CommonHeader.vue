<script setup lang="ts">
  import { formatPhone } from "@resume-v2/resume-infrastructure/util/formatPhone";
  import { Subject } from '@resume-v2/resume-infrastructure/models/Subject';

  defineProps<{
    subject: Subject
  }>();

  //todo: need to set up something akin to a value converter for phone numbers

</script>

<style lang="sass" src="./CommonHeader.scss"></style>

<template>
  <div class="common-header">
    <h1><span>{{ subject.fullName }}</span></h1>
    <div class="clearfix">
      <div class="slot-container pull-right">
        <slot></slot>
      </div>
      <div class="pull-left">
        <h4>
          {{ subject.address }}<br>
          {{ subject.city }}, {{ subject.state }}<br>
          <a :href="'tel:' + subject.phone" :title="'Click to call ' + subject.fullName">{{ formatPhone(subject.phone) }}</a><br>
          <a :href="'mailto:' + subject.email" :title="'Click to email ' + subject.fullName">{{ subject.email }}</a>
          <!-- <a href="tel:${subject.phone}" title="Click to Call ${subject.fullName}">${subject.phone | phone}</a><br> -->
          <!-- <a href="mailto:${subject.email}" title="Click to Email ${subject.fullName}">${subject.email}</a> -->
        </h4>
        <p class="objective">
          {{ subject.description }}
        </p>
      </div>
    </div>
  </div>
</template>