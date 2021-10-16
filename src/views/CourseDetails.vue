<template>
  <div class = "details">
 <section class="home-title">
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="align-self-center">
                    <h2 class="title-home">Curso</h2>
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
// name: "Course",
    // props:["id"],

    // data(){
    //     return{
    //         course:null,
    //     }
    // },
    // created(){
    //     CourseServices.getCourse(this.id)
    //     .then(response =>{this.course = response.data;})
    //     .catch((error) =>{console.log(error);})
    // },
    // components:{
    //     image(){
    //         return require('../assets/' + this.course.image)
    //     }
    // }

}
</script>

<style>
.title-home {
    color: #FF4081;
    font-size: 60px;
    font-weight: 700;
}

.title-component {
    color: #FF4081;
    font-size: 35px;
    font-weight: 700;
}

.section-card {
    padding: 60px 0;
}

.home-title {
    padding: 60px 0;
}

.btn-default {
    color: white;
    letter-spacing: 1px;
    line-height: 25px;
    width: 233px;
    border: none;
    border-radius: 40px;
    background: #419488;
    transition: all 0.3s ease 0s;
  }

  .grey-line {
    height: 5px; 
    background: #C4C4C4;
    margin-top: 60px;
  }

</style>