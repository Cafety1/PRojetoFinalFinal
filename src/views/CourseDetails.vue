<template>
  
    <section class="home-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="align-self-start">
              <h2 class="title-home">{{ coursedetail.title }}</h2>
              <p style="font-size: 20px; font-weight: 700">
                <br>pelo professor: {{ coursedetail.teacher.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Início Card -->
    <section class="section-card">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex">
            <img :src="image" class="img-fluid" />
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-start">
              <h2 class="title-component">{{ coursedetail.name }}</h2>
              <p
                class="align-self-start"
                style="font-size: 18px; font-weight: 400"
              >
                {{ coursedetail.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Início Lesson -->
    <section class="section-card" style="background-color: #f6f6f6">
      <LessonList :lessons="coursedetail.lessons" />
    </section>
  
</template>

<script>

import LessonList from "../components/LessonList.vue";
import STORE from "../store/index";

export default {
  components: {
    LessonList,
  },
  name: "lessonlist",
  data() {
    return {
      coursedetail: Object,
    };
  },
  props: {
    courseId: String,
    lessonlist: Object,
  },

  computed: {
    image() {
      return (
        "http://ec2-18-231-171-55.sa-east-1.compute.amazonaws.com:5000/Images/" + this.coursedetail.urlCover
      );
    },
  },
  created() {
    this.coursedetail = STORE.getters.getCourse(Number.parseInt(this.courseId));
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>