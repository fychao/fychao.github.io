import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import './assets/main.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Education from './components/Education.vue';
import Patents from './components/Patents.vue';
import Publications from './components/Publications.vue';
import Certification from './components/Certification.vue';

const routes = [
	{ path: '/about', component: About },
	{ path: '/experience', component: Experience },
	{ path: '/education', component: Education },
	{ path: '/patents', component: Patents },
	{ path: '/publications', component: Publications },
	{ path: '/certification', component: Certification },
	{ path: '/', redirect: '/about' },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App).use(vuetify).use(router).mount('#app')
