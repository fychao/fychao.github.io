<template>
  <v-container class="py-4 d-flex flex-column align-center">
    <v-card elevation="2" class="pub-panel">
      <v-card-title class="about-title">
        🧑‍🔬 Patents
      </v-card-title>
      <v-card-text>
        <v-list density="compact">
          <v-list-item v-for="item in patents" :key="item">
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
// 套用 Publications.vue 的 pub-panel 樣式
const patents = [
  'I742774(2021-07-22), 朱金城, 盧鴻復, 陳政宇, 朱賢良, <b>趙逢毅</b>, "運算系統及其主機資源分配方法"',
  'I737368(2021-06-29), 林錫慶, 劉昱劭, <b>趙逢毅</b>, "機敏資料之分析方法及其系統"',
  'TWI649712B(2019-02-01), US20190180190A1, CN109903115A, <b>趙逢毅</b>, 吳豪仁, 黃冠誠, 陳力揚, 蔡易霖,  "電子裝置、決策流程模組的呈現方法及電腦可讀式媒體"',
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
