import { createStore } from "vuex";
import CourseService from '../Service/CourseService';

const STORE =  createStore({
  state: {
    courses: [],
    teachers:[]
  },
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses;
    },
    PUSH_COURSE(state, course){
      state.courses.push(course);
    },
    SET_TEACHERS(state, teachers) {
      state.teachers = teachers;
    },
    PUSH_TEACHER(state, teacher){
      //to-do
      // verificra se o course a inserir já não existe no state.courses
      state.teachers.push(teacher);
    },
  },
  actions: {
    async fetchAllCourses(context) {
        let response = await CourseService.getAllCourses()
        await context.commit('SET_COURSES',response.data)
        console.log("commit com "+response.data)
    },
    async fetchAllTeachers(context) {
      let response = await CourseService.getAllTeachers()
      await context.commit('SET_TEACHERS',response.data)
      console.log("commit com "+response.data)
    },
    saveCourse(context, course) {
      let ret = CourseService.saveCourse(course);
      context.commit("PUSH_COURSE", ret);
    },
    deleteCourse(course) {
      let ret = CourseService.deleteCourse(course.id);
      //to-do fazer o muttation do state de courses para exluir do array o curso
      context.commit("PUSH_COURSE", ret);
    }
  },
  getters: {
    getCourse: (state) =>(id) =>{
      let ret = id
      //console.log(state.courses)
      state.courses.forEach(c => {if (c.id == id){ret = c}})
      return ret;
    },
    getCourses: (state) =>{
      return state.courses;
    },
    getTeachers: (state) =>{
      return state.teachers;
    }
  },
  modules: {},
});

export default STORE;