<template>
<section class="home-title">
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="align-self-center">
                    <h2 class="title-home">Cursos</h2>                    
                </div>
            </div>
        </div>
    </div>
</section>

    <div class="section-card"> 
        <div v-for = "course in courses" :key = "course.id">
            <CourseCard :course = "course"/>
        </div>
    </div>
</template>

<script>

import CourseCard from './CourseCard.vue';

export default {
    components:{
        CourseCard
        },
        
    props:{
            courses :[],
            
    }
}

</script>

<style>

@import '../../public/BodyCss.css';

</style>