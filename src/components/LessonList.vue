<template>
         
        <div class="container" v-for = "lesson in lessons" :key = "lesson.id">
            <div class="row justify-content-center">
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