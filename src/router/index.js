import LoginRegister from "@/components/LoginRegister.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
import Chat from "@/components/child/Chat.vue";
import Appointment from "@/components/child/Appointment.vue";
import Fold1 from "@/components/child/Fold1.vue";
import Win from "@/components/child/Win.vue";
import Leave from "@/components/child/Leave.vue";
import Info from "@/components/child/Info.vue";

const routes = [
    {path: "/login", component: LoginRegister},
    {path: "/", component: Layout, redirect: "/chat", children: [
            {path: "/chat", component: Chat},
            {path: "/appointment", component: Appointment},
            {path: "fold", component: Fold1},
            {path: "/win", component: Win},
            {path: "/leave", component: Leave},
            {path: "/info", component: Info}
        ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;