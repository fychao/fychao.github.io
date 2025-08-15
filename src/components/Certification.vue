<template>
  <v-container class="py-4 d-flex flex-column align-center">
    <v-card elevation="2" class="cert-panel">
      <v-card-title></v-card-title>
      <v-card-text>
        <div v-if="certHtml" v-html="certHtml" class="md-list"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

const certMd = ref('');
const certHtml = ref('');

onMounted(async () => {
  const res = await fetch('/certification.md');
  certMd.value = await res.text();
  certHtml.value = marked.parse(certMd.value);
});
</script>

<style scoped>
.md-list {
  margin-left: 2.2em;
  padding-left: 0.8em;
}
</style>
.cert-panel {
  width: 80%;
  margin: 0 auto;
  max-width: 1900px;
  background-color: #f9f9f9;
}
