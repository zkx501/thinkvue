import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/app.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: resolved => require(['./components/a.vue'], resolved) },
    { path: '/aaa', component: resolved => require(['./components/b.vue'], resolved) }
];

const router = new VueRouter({ routes })

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');