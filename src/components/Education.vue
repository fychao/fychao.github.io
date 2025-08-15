<template>
  <v-container class="py-4 d-flex flex-column align-center">
    <v-card elevation="2" class="pub-panel">
      <v-card-title class="about-title">
        🎓 Education
      </v-card-title>
      <v-card-text>
        <v-list density="compact">
          <v-list-item v-for="item in edu" :key="item">
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
// 套用 Publications.vue 的 pub-panel 樣式
const edu = [
  "國立政治大學 資訊管理研究所，博士，August 2008~February 2016。畢業論文：<strong>兩種中文情感運算分析策略： 以部首為基礎及深層類神經學習</strong>",
  "國立政治大學 資訊管理研究所，碩士，August 2006~July 2008。畢業論文：<strong>文獻關聯之視覺化瀏覽平台建構研究</strong>",
  "國立交通大學 管理科學學系，學士，August 1999~July 2002。",
  "中華大學 資訊工程學系，學士肆，August 1997~July 1999。",
  "省立鳳山高級中學。",
];
</script>

<style scoped>
.pub-panel {
  width: 80%;
  margin: 0 auto;
  max-width: 1900px;
  background-color: #f9f9f9;
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  border: 2.5px solid #1a237e;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(26,35,126,0.10), 0 1.5px 6px 0 rgba(26,35,126,0.08);
  padding-bottom: 0.5em;
}
  .about-title {
    font-weight: 700;
    color: #1976d2;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    letter-spacing: 1px;
    font-family: 'Nunito', 'Quicksand', Arial, sans-serif;
  }
</style>
