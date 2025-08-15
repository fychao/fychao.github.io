<template>
  <v-container class="py-4">
    <v-card class="mb-4" elevation="2">
      <v-card-title>關於 About Me</v-card-title>
      <v-card-text>
        <p><em>In honor of Chao's and Ma's Families</em></p>
        <p><em>Be A Happy Philosopher</em></p>
        <v-list density="compact">
          <v-list-item>
            <v-list-item-title>Email: <a href="mailto:FYCHAO.tw@gmail.com">FYCHAO.tw@gmail.com</a></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Address: No. 300, Liuhe Rd., Magong City, Penghu County 880011</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><a href="https://devsecopslab-csie-npu.github.io/" target="_blank">DevSecOps Lab @NPU-CSIE</a></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><a href="https://orcid.org/0009-0009-9111-9763" target="_blank">ORCID</a></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><a href="https://github.com/fychao/fychao.github.io" target="_blank">Modify This</a></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card elevation="2">
      <v-card-title>照片集</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="img in imgs" :key="img.src" cols="6" md="2">
            <v-img :src="img.src" :alt="img.alt" :title="img.title" height="120" contain></v-img>
            <div class="text-center">{{ img.label }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
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
