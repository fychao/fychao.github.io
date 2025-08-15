<template>
  <v-container class="py-4 d-flex flex-column align-center">
    <v-card elevation="2" class="pub-panel">
      <v-card-text>
        <div v-if="journalHtml" v-html="journalHtml" class="md-list"></div>
      </v-card-text>
    </v-card>
    <v-card elevation="2" class="pub-panel mt-6">
      <v-card-text>
        <div v-if="conferenceHtml" v-html="conferenceHtml" class="md-list"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';


const journalHtml = ref('');
const conferenceHtml = ref('');

onMounted(async () => {
  const [journalRes, confRes] = await Promise.all([
    fetch('/journal.md'),
    fetch('/conference.md')
  ]);
  journalHtml.value = marked.parse(await journalRes.text());
  conferenceHtml.value = marked.parse(await confRes.text());
});

</script>

<style scoped>
.md-list {
  margin-left: 2.2em;
  padding-left: 0.8em;
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.08rem;
  line-height: 1.7;
  color: #222;
  letter-spacing: 0.01em;
}
.md-list ol {
  padding-left: 1.2em;
  margin-bottom: 1.2em;
}
.md-list li {
  margin-bottom: 0.5em;
  text-align: justify;
}
.md-list strong {
  font-weight: 600;
  color: #1a237e;
}
.md-list em {
  font-style: italic;
  color: #37474f;
}
.md-list a {
  color: #1565c0;
  text-decoration: underline dotted;
}
.md-list img {
  max-height: 1.5em;
  vertical-align: middle;
}

.pub-panel {
  width: 80%;
  margin: 0 auto;
  max-width: 1900px;
  background-color: #f9f9f9;
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  border: 2.5px solid #1a237e;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(26,35,126,0.10), 0 1.5px 6px 0 rgba(26,35,126,0.08);
  /* 學術風格外框 */
  padding-bottom: 0.5em;
}
</style>
