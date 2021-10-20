<template>
  <div class="course">
    <CourseList :courses="coursesList"/>
  </div>

</template>

<script>

import CourseList from "../components/CourseList.vue";
import STORE from "../store/index"
import Utils from "../Service/Utils"

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
    beforeCreate() {
        Utils.wait()
    },
    updated(){
        Utils.fimWait()
    },
    created(){
      setInterval(()=>this.coursesList = STORE.getters.getCourses, 500)
      

    }
    
}
</script>

<style>
@import '../../public/BodyCss.css';
</style>