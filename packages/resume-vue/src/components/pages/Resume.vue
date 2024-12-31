<script setup lang="ts">
  import type { ResumeDataPackage } from "@resume-v2/resume-infrastructure/models/index";
  import { reactive, ref } from 'vue';
  import CommonHeader from "../shared/CommonHeader.vue";
  import EducationList from "../shared/EducationList.vue";
  import WorkHistoryList from "../shared/WorkHistoryList.vue";
  import ProficiencyList from "../shared/ProficiencyList.vue";
  import PersonalItemList from "../shared/PersonalItemList.vue";
  import { VueDataRepository } from "../../services/VueDataRepository";

  const dataRepository = new VueDataRepository();

  const loaded = ref<boolean>(false);
  const state = reactive<ResumeDataPackage>({});

  dataRepository.getDataStream().subscribe(data => {
    loaded.value = true;
    state.businesses = data.businesses;
    state.education = data.education;
    state.personalItems = data.personalItems;
    state.proficiencies = data.proficiencies?.slice(0, 6);
    state.subject = data.subject;
    state.workHistory = data.workHistory.filter(m => m.type === "work" && m.isActive);
    state.references = data.references;
  });
  
</script>
<template>
  <div v-if="loaded">
    <CommonHeader :subject="state.subject" v-if="state.subject">
      <RouterLink :to="{ name: 'cv' }" title="Click to view as CV" class="no-print">CV View</RouterLink>
    </CommonHeader>

    <EducationList :education="state.education" />
    <WorkHistoryList :work-history="state.workHistory" :businesses="state.businesses" />
    <ProficiencyList :proficiencies="state.proficiencies" />
    <PersonalItemList :personal-items="state.personalItems" />
  </div>
</template>