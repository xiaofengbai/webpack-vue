import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/index.vue";
import Index1 from "../pages/index2.vue";
import NotFound from "../pages/404.vue";

Vue.use(Router);

export const constantRouterMap = [
  { path: "/", name: "shouye", component: Index },
  { path: "/a", name: "shouye1", component: Index1 },
  { path: "*", name: "shouye1", component: NotFound },
];

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
