import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Counter from "@/components/Counter.vue";
import FetchData from "@/components/FetchData.vue";
import PhotoJob from "@/components/PhotoJob.vue";
import CreatePhotoJob from "@/components/CreatePhotoJob.vue";
import ApartmentCalc from "@/components/ApartmentCalc.vue";
import jobList from "@/components/calculator/jobList.vue";
import materialList from "@/components/calculator/materialList.vue";
import updateJob from "@/components/calculator/updateJob.vue";
import updateMaterial from "@components/calculator/updateMaterial.vue";

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
        path: "/jobList",
        name: "jobList",
        component: jobList,
    },
    {
        path: "/jobList/updateJob",
        name: "updateJob",
        component: updateJob,
    },
    {
        path: "/materialList",
        name: "materialList",
        component: materialList,
    },
    {
        path: "/materialList/updateMaterial",
        name: "updateMaterial",
        component: updateMaterial,
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
