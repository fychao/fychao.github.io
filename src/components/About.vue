<template>
  <v-container class="py-4">
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-4 about-card" elevation="3">
          <v-card-title class="about-title">
            👤 About Me
          </v-card-title>
          <v-card-text>
            <p class="about-line">🏡 <strong>In honor of Chao's and Ma's Families</strong></p>
            <p class="about-line">😊 <strong>Be A Happy Philosopher</strong></p>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title>✉️ <a href="mailto:FYCHAO.tw@gmail.com">FYCHAO.tw@gmail.com</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>📍 No. 300, Liuhe Rd., Magong City, Penghu County 880011</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>💻 <a href="https://devsecopslab-csie-npu.github.io/" target="_blank">DevSecOps Lab @NPU-CSIE</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>🆔 <a href="https://orcid.org/0009-0009-9111-9763" target="_blank">ORCID</a></v-list-item-title>
              </v-list-item>
            </v-list>
            <div class="about-btn-wrap">
              <v-btn color="amber darken-2" class="about-modify-btn" href="https://github.com/fychao/fychao.github.io" target="_blank" elevation="2">
                🛠️ Modify This
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>Photo Gallery</v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="img in imgs" :key="img.src" cols="6" md="6">
                <v-img :src="img.src" :alt="img.alt" :title="img.title" height="120" contain @click="openDialog(img)" class="gallery-img" style="cursor:pointer" />
                <div class="text-center">{{ img.label }}</div>
              </v-col>
            </v-row>
            <v-dialog v-model="dialog" max-width="600px">
              <v-card>
                <v-img
                  v-if="selectedImgIndex !== null"
                  :src="imgs[selectedImgIndex].src"
                  :alt="imgs[selectedImgIndex].alt"
                  :title="imgs[selectedImgIndex].title"
                  max-height="70vh"
                  max-width="90vw"
                  width="100%"
                  cover
                  class="preview-img"
                />
                <v-card-title class="text-center">{{ imgs[selectedImgIndex]?.label }}</v-card-title>
                <v-card-actions class="justify-center" style="gap: 1rem;">
                  <v-btn :disabled="selectedImgIndex === 0" @click="prevImg" color="primary" variant="outlined">⬅️ Prev</v-btn>
                  <v-btn color="primary" @click="dialog = false">✖️ Close</v-btn>
                  <v-btn :disabled="selectedImgIndex === imgs.length - 1" @click="nextImg" color="primary" variant="outlined">Next ➡️</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const selectedImgIndex = ref(null);

function openDialog(img) {
  const idx = imgs.findIndex(i => i.src === img.src);
  selectedImgIndex.value = idx;
  dialog.value = true;
}
function prevImg() {
  if (selectedImgIndex.value > 0) selectedImgIndex.value--;
}
function nextImg() {
  if (selectedImgIndex.value < imgs.length - 1) selectedImgIndex.value++;
}
const imgs = [
  { src: '/imgs/24-.jpg', alt: 'Younger Me', title: 'Younger', label: '24-' },
  { src: '/imgs/24-28.jpg', alt: 'Young Me', title: 'Young', label: '24~28' },
  { src: '/imgs/28.jpg', alt: 'Vicky&Me', title: 'Now', label: '28' },
  { src: '/imgs/20130903150228675.jpg', alt: 'My Son', title: 'Now', label: '33' },
  { src: '/imgs/PHD.png', alt: 'My Phd', title: 'Now', label: '37' },
  { src: '/imgs/my_girl.jpg', alt: 'My precious #1', title: 'Now', label: '37' },
  { src: '/imgs/gOtn0l.jpg', alt: 'My precious #2', title: 'Now', label: '39' },
  { src: '/imgs/r9pKoU.png', alt: 'Taiwania-2', title: 'Taiwania-2', label: '39' },
  { src: '/imgs/IMG_9461.JPG', alt: 'My precious #3', title: 'Now', label: '40' },
  { src: '/imgs/MyPhoto2024.jpeg', alt: 'Me, 45-year-old', title: 'Me, 45-year-old', label: '45' },
];
</script>

<style scoped>
/* 預覽視窗外框設計 */
.v-dialog .v-card {
  border: 4px solid #1976d2;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(25, 118, 210, 0.18), 0 2px 8px rgba(0,0,0,0.08);
  background: linear-gradient(135deg, #e3f2fd 60%, #fff 100%);
  padding: 0.5rem 0 1rem 0;
}
.preview-img {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.12);
  margin: 1rem auto 0.5rem auto;
  display: block;
}
.about-card {
  font-family: 'Nunito', 'Quicksand', Arial, sans-serif;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  background: #f9fafb;
  color: #333;
  letter-spacing: 0.02em;
}
.about-title {
  font-weight: 700;
  color: #1976d2;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  letter-spacing: 1px;
}
.about-line {
  font-size: 1.13rem;
  margin: 0.5rem 0;
  line-height: 1.7;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.about-card a {
  color: #1976d2;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  word-break: break-all;
}
.about-card a:hover {
  color: #1565c0;
  text-decoration: underline;
}
.about-btn-wrap {
  margin-top: 1.2rem;
  text-align: right;
}
.about-modify-btn {
  font-family: inherit;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  box-shadow: 0 2px 8px rgba(255,179,0,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
.about-modify-btn:hover {
  background: linear-gradient(90deg, #ffa000 60%, #ffd54f 100%) !important;
  box-shadow: 0 4px 16px rgba(255,179,0,0.16);
}
</style>
