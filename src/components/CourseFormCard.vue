<template>
 
    
      <td colspan="2">{{course.title}}</td>
      <td >
        <router-link :to="{name:'CourseForm',params:{courseId:course.id}}" type="button" class="btn btn-warning"  >editar</router-link>
        <button type="button" class="btn btn-danger pull-right" data-toggle="modal"  @click="deleteCourse" >Excluir</button>
      </td>
    
 
</template>

<script>

import STORE from "../store/index"
export default {
  name: "CourseFormCard",
  props: {
    course: Object,
  },
  methods: {
    deleteCourse() {
      if(confirm("confirma a exclusão do curso \n"+this.course.title)){
        STORE.dispatch('deleteCourse', this.course)
      }
    }
  }
  
}
</script>

<style>
@import "../../public/BodyCss.css";
</style>