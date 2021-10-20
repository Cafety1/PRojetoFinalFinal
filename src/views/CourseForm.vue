<template>

  <AddCourse :course="dado" @CourseForm-submitted="saveCourse" />
  
</template>

<script>

import AddCourse from "../components/AddCourse.vue";
import ImageService from "../Service/ImageService";
import STORE from "../store/index";
import CourseClass from "../classes/Course";

export default {
  components: {
    AddCourse,
  },
  data() {
    return {
      dado: Object,
    };
  },
  props: {
    course: Object,
    courseId: String,
  },
  created() {
    if (this.courseId > 0) {
      this.dado = STORE.getters.getCourse(Number.parseInt(this.courseId));
    } else {
      this.dado = new CourseClass();
    }
  },
  methods: {
    async saveCourse(json) {
      let obj = JSON.parse(json);

      for (let i = 0; i < obj.lessons.length; i++) {
        if (obj.lessons[i].imageRender != "") {
          let idImg = await ImageService.saveImage(
            obj.lessons[i].urlImage == undefined
              ? 0
              : Number.parseInt(obj.lessons[i].urlImage),
            obj.lessons[i].imageRender
          );

          obj.lessons[i].urlImage = "" + idImg;
        }
      }

      if (obj.imageRender != undefined && obj.imageRender != "") {
        let idImg = await ImageService.saveImage(obj.urlCover, obj.imageRender);

        obj.urlCover = "" + idImg;
      }
      STORE.dispatch("saveCourse", obj);
    },
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>




