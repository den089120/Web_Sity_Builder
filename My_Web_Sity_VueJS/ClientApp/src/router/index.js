import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Counter from "@/components/Counter.vue";
import FetchData from "@/components/FetchData.vue";
import PhotoJob from "@/components/PhotoJob.vue";
import CreatePhotoJob from "@/components/CreatePhotoJob.vue";
import ApartmentCalc from "@/components/ApartmentCalc.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData,
    },
    {
        path: "/PhotoJob",
        name: "PhotoJob",
        component: PhotoJob,
    },
    {
        path: "/CreatePhotoJob",
        name: "CreatePhotoJob",
        component: CreatePhotoJob,
    },
    {
        path: "/PhotoJob/ApartmentCalc",
        name: "ApartmentCalc",
        component: ApartmentCalc,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
