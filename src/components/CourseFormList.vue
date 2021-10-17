<template>
    <div class="mb-3"> 
        <div v-for = "courseform in courseforms" :key = "courseform.id">
            <CourseFormCard :courseform = "courseform"/>
        </div>
    </div>
</template>

<script>

import CourseFormCard from './CourseFormCard.vue';
import FormService from '../Service/FormService.js';

export default {
    components:{
        CourseFormCard,
        },
        
    data(){
        return {

            courseforms :null,
            }
    },
    created(){
        FormService.getAllCoursesForm().then(response => {this.coursesform = response.data
        console.log(response.data)
        })
        
    }
}

</script>

<style>

@import '../../public/BodyCss.css';

</style>