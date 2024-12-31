<script setup lang="ts">
//import { Business, Education, PersonalItem, Proficiency, Reference, Subject, WorkHistory } from '@resume-v2/resume-infrastructure/models/index';
// import type { ResumeDataPackage } from "@resume-v2/resume-infrastructure/models/index";
// import { DataRepository } from '@resume-v2/resume-infrastructure/services/DataRepository';
// import { reactive } from 'vue';

//   //import {  } from "vue";

//   //todo: really need to set up a better location to put that API key
//   const dataRepository = new DataRepository(
//     "AIzaSyCgllsOYibFw6NhMTup0rCRBVAy3mJKFiA", 
//     "325069630702"
//   );

//   const state = reactive<ResumeDataPackage>({});

//   dataRepository.getDataStream().subscribe(data => {
//     state.businesses = data.businesses;
//     state.education = data.education;
//     state.personalItems = data.personalItems;
//     state.proficiencies = data.proficiencies;
//     state.subject = data.subject;
//     state.workHistory = data.workHistory;
//     state.references = data.references;
//   });
  
</script>

<style lang="sass" src="./App.scss"></style>

<template>
  <div class="router-view">
    <RouterView />
  </div>
</template>
