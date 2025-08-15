<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>August F.Y. Chao - 趙逢毅</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in navItems" :key="item.title" text @click="current=item.title">{{ item.title }}</v-btn>
    </v-app-bar>
    <v-main>
      <component :is="currentComponent" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Patents from './components/Patents.vue';
import Publications from './components/Publications.vue';
import Certification from './components/Certification.vue';

const navItems = [
  { title: '關於', component: About },
  { title: '經歷', component: Experience },
  { title: '學歷', component: Education },
  { title: '專利', component: Patents },
  { title: '論文', component: Publications },
  { title: '證照', component: Certification },
];
const current = ref(navItems[0].title);
const currentComponent = computed(() => navItems.find(i => i.title === current.value)?.component || About);
</script>
