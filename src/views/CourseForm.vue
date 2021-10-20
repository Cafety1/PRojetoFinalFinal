<template>
  <!-- <add-course /> -->
  <AddCourse :course="dado" @CourseForm-submitted = "saveCourse"/>
</template>

<script>
import AddCourse from "../components/AddCourse.vue"
import ImageService from "../Service/ImageService"
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
       async saveCourse(json, idImage, img){

              console.log(json)
              let obj = JSON.parse(json)
              console.log(obj)
              console.log((img+"").substring(0,1))
              if ((img+"").substring(0,1) == '/') {
                  console.log("saveImage " + obj.urlImage)
                  let idImg = await ImageService.saveImage(idImage, img)
                  console.log(idImg)
                  obj.urlCover=""+idImg
              }
              STORE.dispatch('saveCourse',obj);
          }
   }

}



</script>

<style>
@import "../../public/BodyCss.css";
</style>