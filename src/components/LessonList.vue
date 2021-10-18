<template>
    <div class="col-md-5"> 
        <div class = "accordion" id ="accordion-lesson" v-for = "lesson in lessons" :key = "lesson.id">
            <LessonCard :lesson = "lesson"/>
            
        </div>
    </div>
</template>

<script>

import LessonCard from './LessonCard.vue';


export default {
    components:{
        LessonCard
        },
        
    props:{
            lessons :[],
        
    }
   
    
}

</script>

<style>

@import '../../public/BodyCss.css';

</style>