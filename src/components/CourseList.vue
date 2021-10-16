<template>
    <div class="card-group"> 
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
        
    data(){
        return {

            course :null,
            }
    },
}

</script>

<style>

</style>