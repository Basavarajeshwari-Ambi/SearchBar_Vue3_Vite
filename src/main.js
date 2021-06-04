import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorldd from './components/HelloWorldd.vue'
import Home from './components/Home.vue'
let router = createRouter({ history: createWebHashHistory(), routes: [{ path: "/posts", component: HelloWorldd }, { path: "/", component: Home }] });
createApp(App).use(router).mount('#app')
