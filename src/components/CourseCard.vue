<template>

  <div class = "details">
 <section class="home-title">
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="align-self-center">
                    
                    <p style="font-size: 20px; font-weight: 400;">                        
                        course.title
                    </p>
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
                    <img src ="" class="img-fluid">
                </div>
                <div class="col-md-6 d-flex">
                    <div class="align-self-center">
                        <h2 class="title-component"> course.name </h2>
                       
                        <p style="font-size: 18px; font-weight: 400;">
                            course.description
                            
                        </p>
                        <a href="" class="btn btn-default">começar agora</a>
                        
                    </div>
                </div>
                <div class="grey-line">
                </div>
            </div>
        </div>
    </section> 
  </div>

</template>

<script>
export default {
    name: "CourseCard",
    props:{
        course:Object,
    },
    computed:{
      image(){
        return require('../assets/' + this.course.image)
      },      
    },
}
</script>

<style>

</style>