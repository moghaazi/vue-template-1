import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Team from "../views/Team.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  // About
  {
    path: "/About",
    name: "About",
    component: About
  },

  // Contact
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },

  // Team
  {
    path: "/Team",
    name: "Team",
    component: Team
  },

  // Blog
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  }
];

const router = new VueRouter({
  routes
});

export default router;
