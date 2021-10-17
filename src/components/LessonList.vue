<template>
    <div class="col-md-5"> 
        <div v-for = "lesson in lessons" :key = "lesson.id">
            <LessonCard :lesson = "lesson"/>
        </div>
    </div>
</template>

<script>

import LessonCard from './LessonCard.vue';
import LessonService from '../Service/LessonService.js';

export default {
    components:{
        LessonCard
        },
        
    data(){
        return {

            lessons :null,
            }
    },
    created(){
        LessonService.getAllLessons().then(response => {this.lessons = response.data
        console.log(response.data)
        })
        
    }
}

</script>

<style>

@import '../../public/BodyCss.css';

</style>