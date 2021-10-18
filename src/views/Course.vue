<template>
  <div class="course">
    <CourseList :courses="coursesList"/>
  </div>

</template>

<script>

import CourseList from "../components/CourseList.vue";
import STORE from "../store/index"
export default {
    name: "course",
    components:{
        CourseList,
    },
    data(){
      return {
      coursesList: Object
      }
    },
    created(){
      setInterval(()=>this.coursesList = STORE.getters.getCourses, 500)
      

    }
    
}
</script>

<style>
@import '../../public/BodyCss.css';
</style>