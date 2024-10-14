import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import EventDetail from "../components/EventDetail.vue";
// import CreateEvent from "../components/CreateEvent.vue";
// import Profile from "../components/Profile.vue"; //

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
