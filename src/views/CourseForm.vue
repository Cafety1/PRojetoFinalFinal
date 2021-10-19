<template>
  <!-- <add-course /> -->
  <AddCourse :course="dado" @CourseForm-submitted = "saveCourse"/>
</template>

<script>
import AddCourse from "../components/AddCourse.vue"

import STORE from "../store/index"
import CourseClass from "../classes/Course" 


export default {
  components: { 
      AddCourse
   },
   data() {
       return{
           dado : Object
       }
   },
   props:{
       course : Object,
       courseId: String
   },
   created(){
       if (this.courseId > 0 ) {
        this.dado = STORE.getters.getCourse(Number.parseInt(this.courseId))
       } else {
           this.dado = new CourseClass()
             
       }
   },
   methods: {
       saveCourse(obj){

              console.log(obj)
              STORE.dispatch('saveCourse',obj);
          }
   }

}



</script>

<style>
@import "../../public/BodyCss.css";
</style>