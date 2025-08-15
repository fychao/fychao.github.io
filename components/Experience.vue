<template>
  <v-container class="py-4">
    <v-card class="mb-4" elevation="2">
      <v-card-title>工作經歷 Work Experience</v-card-title>
      <v-card-text>
        <v-list density="compact">
          <v-list-item v-for="item in jobs" :key="item">
            <v-list-item-title v-html="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mb-2">
          <v-card-title>教育部助理教授證</v-card-title>
          <v-img src="/imgs/ass_prof.png" alt="Assistant Professor Cert" title="Assistant Professor Certification" height="120"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>教育部講師證</v-card-title>
          <v-img src="/imgs/lecture.jpg" alt="Lecturer Cert" title="Lecturer Certification" height="120"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const jobs = [
  "澎湖科技大學資訊工程學系, Aug. 24' ~ ",
  "臺灣智慧雲端服務股份有限公司 Chief Engineer TWS, Jan. 21' ~ Jul. 24'",
  "經濟部產業人才能力鑑定 - 機器學習工程師能力鑑定專業委員, 110年, 111年",
  "國家高速網路與計算中心 設施服務組 副工程師 Jan 18' ~ Apr. 19', 平台開發組 Chief Programmer Apr. 19'~ Dec. 20'",
  "中原大學 巨量資料學院 兼任助理教授 - 19' ~ ",
  "ITRI 工業技術研究院 巨量資料中心 文字探斟與分析技術部 工程師 - May 16' ~ Jan 18'",
  "中原大學 巨量資料學院 兼任講師 - 16' ~ 18'",
  "104年國家考試入闈",
  "國立台北科技大學資管系代課講師 - Jun. 13'",
  "Hiiir 英屬維京群島商時間軸科技股份有限公司 iOS Intern - Jun. 13'~Dec. 13",
  "私立中華大學兼任講師 - 10'~14'",
  "國立政治大學兼任講師 - 10'~11'",
  "耕莘專校兼任講師 - 09'~12'",
  "教育部校務行政e化交流服務資訊網講師 - 09' PHP 網站應用設計、Linux 系統管理進階探討",
  "中華大學資管系代課講師 - 網路管理、進階網路管理",
  "宏基 駐 國家高速網路與計算中心 儲存設備系統維運工程師 (民國九十五年四月~九十六年三月)Acer On-Site Storage S.S.E. in National Center for High-Performance Computing (Apr. 06'~Mar. 07')",
  "Roodo.com 資深研發工程師 (民國九十四年九月~九十四年十一月)Roodo.com Senior R&D Engineer (Sept. 05'~Nov. 05')",
  "ToThere.com 技術長 (民國九十三年五月~九十四年九月)ToThere.com C.I.O. (May 04'~Sept. 05')",
];
</script>
