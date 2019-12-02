import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personal from "../views/Personal";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/personal',
        name: 'personal',
        component: Personal
    }
];

const router = new VueRouter({
    routes
});

export default router
