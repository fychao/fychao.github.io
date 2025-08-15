<template>
  <v-container class="py-4">
    <v-card elevation="2">
      <v-card-title>發表專利 Patents</v-card-title>
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
const patents = [
  'I742774(2021-07-22), 朱金城, 盧鴻復, 陳政宇, 朱賢良, <b>趙逢毅</b>, "運算系統及其主機資源分配方法"',
  'I737368(2021-06-29), 林錫慶, 劉昱劭, <b>趙逢毅</b>, "機敏資料之分析方法及其系統"',
  'TWI649712B(2019-02-01), US20190180190A1, CN109903115A, <b>趙逢毅</b>, 吳豪仁, 黃冠誠, 陳力揚, 蔡易霖,  "電子裝置、決策流程模組的呈現方法及電腦可讀式媒體"',
];
</script>
