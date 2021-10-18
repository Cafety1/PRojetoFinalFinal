<template>
  <!-- <add-course /> -->
  <AddCourse :course="dado"/>
</template>

<script>
import AddCourse from "../components/AddCourse.vue"

import STORE from "../store/index"



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
       this.dado = STORE.getters.getCourse(Number.parseInt(this.courseId))
   },

}



</script>

<style>
@import "../../public/BodyCss.css";
</style>