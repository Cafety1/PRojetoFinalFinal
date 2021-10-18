import { createRouter, createWebHistory } from "vue-router";
import Course from "../views/Course.vue";
import CourseForm from "../views/CourseForm.vue";
import PainelAdm from "../views/PainelAdm.vue";
import CourseDetails from "../views/CourseDetails.vue";
import AddCourse from "../components/AddCourse.vue";
import AddLesson from "../components/AddLesson.vue";
import NewForm from "../components/NewForm.vue";


const routes = [
  
  
  {
    path: "/course",
    name: "Course",
    component: Course,
  },
  {
    path: "/courseform",
    name: "CourseForm",
    props: true,
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
    path: "/NewForm",
    name: "NewForm",    
    component: NewForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
