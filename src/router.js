import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import home from "./components/home.vue";
import w4 from "./components/w4.vue";
import ips from "./components/ips.vue";


const routes = [
    {
        path: "/",
        name:"home",
        component: home,
    },   
     {
        path: "/ips",
        name:"ips",
        component: ips,
    },

    {
        path: "/w4",
        name:"w4",
        component: w4,
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router