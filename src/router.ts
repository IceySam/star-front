import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/view/HomePage.vue";
import InfoPage from "@/view/InfoPage.vue";
import { useAppService } from "@/service/AppService.ts";

const { setLayout, setLoading } = useAppService();

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
        layout: "work"
    }
},{
    path: '/info',
    name: 'Information',
    component: InfoPage,
    meta: {
        layout: "info"
    }
}];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
    setLoading(true);
    setLayout(to.meta.layout ?? 'full')
})

router.afterEach(() => {
    setLoading(false);
})

export default router

