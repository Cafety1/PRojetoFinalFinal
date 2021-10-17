import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Course from "../views/Course.vue";
import CourseForm from "../views/CourseForm.vue";
import PainelAdm from "../views/PainelAdm.vue";
import CourseDetails from "../views/CourseDetails.vue";
import AddCourse from "../components/AddCourse.vue";
import AddLesson from "../components/AddLesson.vue";
import FormEdit from "../components/FormEdit.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
  },
  {
    path: "/courseform",
    name: "CourseForm",
    component: CourseForm,
  },
  {
    path: "/PainelAdm",
    name: "PainelAdm",
    component: PainelAdm,
  },
  {
    path: "/CourseDetails",
    props: true,
    name: "CourseDetails",
    component: CourseDetails,
  },
  {
    path: "/AddCourse",
    name: "AddCourse",    
    component: AddCourse,
  },
  {
    path: "/AddLesson",
    name: "AddLesson",    
    component: AddLesson,
  },
  {
    path: "/FormEdit",
    name: "FormEdit",    
    component: FormEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
