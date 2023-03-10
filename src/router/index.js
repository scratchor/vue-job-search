import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView");
const JovResultsView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JovResultsView");
const JobView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobView");
const TeamsView = () => import("@/views/TeamsView");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/result",
    name: "JobResults",
    component: JovResultsView,
  },
  {
    path: "/jobs/result/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
