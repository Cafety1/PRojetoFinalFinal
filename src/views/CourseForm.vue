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
       async saveCourse(json) { //}, idImage, img){
            
              //console.log(json)
              let obj = JSON.parse(json)
              console.log(obj)
              //console.log((img+"").substring(0,1))
              for (let i = 0; i < obj.lessons.length; i++) {
                    if (obj.lessons[i].imageRender!= "") {
                        console.log("saveCourse "+obj.lessons[i].urlImage+" "+obj.lessons[i].imageRender.substring(0,10))
                       let idImg = await ImageService.saveImage((obj.lessons[i].urlImage==undefined? 0 : Number.parseInt(obj.lessons[i].urlImage)), obj.lessons[i].imageRender)
                       obj.lessons[i].urlImage = ""+idImg
                       //delete l.imageRender 
                    }
                }
/*
                obj.lessons.forEach(async l => {
                    if (l.imageRender!= "") {
                        console.log("saveCourse "+l.urlImage+" "+l.imageRender.substring(0,10))
                       let idImg = await ImageService.saveImage((l.urlImage==undefined? 0 : Number.parseInt(l.urlImage)), l.imageRender)
                       l.urlImage = ""+idImg
                       //delete l.imageRender 
                    }
                });

*/


                if (obj.imageRender != undefined && obj.imageRender != "") {
                  console.log("saveImage " + obj.urCover)

                  let idImg = await ImageService.saveImage(obj.urlCover, obj.imageRender)
                  //delete obj.imageRender
                  console.log(idImg)
                  obj.urlCover=""+idImg
              }
              console.log("antes de grvar o course")
              console.log(obj)
              STORE.dispatch('saveCourse',obj);
          }
   }

}



</script>

<style>
@import "../../public/BodyCss.css";
</style>




