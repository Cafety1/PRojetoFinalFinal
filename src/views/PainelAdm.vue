<template>
    <section class="home-title">
        
   <div class="container" style="margin-top: 40px;">
            <button @click="newCourse" class="btn btn-default" style="margin-bottom: 60px;">+ adicionar novo curso</button>
            <div class="row">
                <div class="col-12 col-md-8 d-flex">
                    <table class="table table-sm table-responsive">
                        <thead class="table-thead">
                            <tr>
                                <th colspan="2">Curso</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="table-tbody">
                            <CourseFormList :courses="coursesList"/>
                        </tbody>

                    </table>
                </div>
            </div>
    </div>
        
    </section>

</template>

<script>

import CourseFormList from '../components/CourseFormList.vue';
import STORE from "../store/index";
import router from "../router/index";

export default {

    name: "courseformlist",

    components:{

        CourseFormList,
    },
    data(){
        return {

            coursesList: Object
        }
    },
    async created(){
       
        await STORE.dispatch('fetchAllCourses')        
        this.coursesList = STORE.getters.getCourses
        
    },
     methods: {
         newCourse() {

             router.push({name:"CourseForm",params:{courseId:0}})
            }
    }
}
</script>

<style>

@import '../../public/BodyCss.css';

</style>