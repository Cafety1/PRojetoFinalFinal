<template>
  <div class="details">
    <section class="home-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2 class="title-home">Curso</h2>
              <p style="font-size: 20px; font-weight: 400">{{course.title}}</p> pelo professor:{{course.teacher.name}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Início Card 01 -->
    <section class="section-card">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex">
            <img src="" class="img-fluid" />
          </div>
          <div class="col-md-6 d-flex">
            <div class="align-self-center">
              <h2 class="title-component">{{course.name}}</h2>

              <p style="font-size: 18px; font-weight: 400">
                {{course.description}}
              </p>              
            </div>
          </div>
          <div class="grey-line"></div>
        </div>
      </div> 
    </section>
  </div>
    <LessonList/>
    
</template>

<script>
import LessonList from "../components/LessonList.vue";

export default {
  name: "lessonlist",
  props:["coursedetails"],
  components: {
    LessonList,
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>