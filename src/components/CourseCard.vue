<template>
  <!-- Início Card 01 -->
  

  <section class="section-card">
    <div class="container">
      <h2> {{ course.title}} </h2>
     <p style="font-size: 18px; font-weight: 400">
              <br>
              {{ course.teacher.name}}
            </p>
      <div class="row">        
        <div class="col-md-4 d-flex">          
          <img :src="image" class="img-fluid" />
        </div>
        <div class="col-md-6 d-flex">
          <div class="align-self-center">
            <h2 class="title-component">{{ course.name }}</h2>

            <p style="font-size: 18px; font-weight: 400">
              {{ course.description }}
            </p>
            
            <router-link  :to="{name:'CourseDetails',params:{courseId:course.id}}" class="btn btn-default">começar agora</router-link>
          </div> 
        </div>
        <div class="grey-line"></div>
      </div>
    </div>
  </section>
</template>

<script>



export default {
  name: "CourseCard",
  props: {
    course: Object,
  },
  computed:{
    image(){
      return "http://ec2-18-231-171-55.sa-east-1.compute.amazonaws.com:5000/Images/" + this.course.urlCover
      
    },
  }
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>