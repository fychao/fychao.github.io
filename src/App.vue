<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>August F.Y. Chao - 趙逢毅</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link
        v-for="item in navItems"
        :key="item.title"
        :to="item.path"
        custom
        v-slot="{ navigate, href, isActive }"
      >
        <v-btn :text="!isActive" :color="isActive ? 'secondary' : undefined" @click="navigate">{{ item.title }}</v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app class="footer-bar" color="primary" dark>
      <v-container class="text-center py-2">
        <span class="footer-text">
          &copy; 2021–2025 August F.Y. Chao &nbsp;|&nbsp; All rights reserved. &nbsp;|&nbsp;
          <a href="mailto:fychao@gmail.com" class="footer-link">Contact</a>
        </span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.footer-bar {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.02rem;
  letter-spacing: 0.01em;
  border-top: 2px solid #1a237e;
  background: linear-gradient(90deg, #283593 0%, #1565c0 100%);
}
.footer-text {
  color: #fff;
  opacity: 0.92;
}
.footer-link {
  color: #ffeb3b;
  text-decoration: underline dotted;
}
.footer-link:hover {
  color: #fff176;
}
</style>

<script setup>
const navItems = [
  { title: 'About', path: '/about' },
  { title: 'Experience', path: '/experience' },
  { title: 'Education', path: '/education' },
  { title: 'Patents', path: '/patents' },
  { title: 'Publications', path: '/publications' },
  { title: 'Certification', path: '/certification' },
];
</script>
