<template>

  <section class="home-title">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex">
          <div class="align-self-center">
            <h2 class="title-home">Cursos</h2>
            <p style="font-size: 20px; font-weight: 400">
              Educação financeira é tudo de bom.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

            <!-- Inicio da Lista Curso -->

  <div class="section-card">
    <div class="container">
      <div style="padding-top: 30px" v-for="course in courses" :key="course.id">

        <CourseCard :course="course" />
        
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";

export default {
  components: {
    CourseCard,
  },

  props: {
    courses: [],
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>