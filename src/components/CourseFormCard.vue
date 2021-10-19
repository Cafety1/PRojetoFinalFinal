<template>
 
    
      <td colspan="2">{{course.title}}</td>
      <td >
        <router-link :to="{name:'CourseForm',params:{courseId:course.id}}" type="button" class="btn btn-warning"  >editar</router-link>
        <button type="button" class="btn btn-danger">excluir</button>
        <button type="button" class="btn btn-danger pull-right" data-toggle="modal" v-on:submit.prevent="DeleteCourse(course.id)" @click="DeleteCourse(course.id)" >Excluir</button>
      </td>
    
 
</template>

<script>
export default {
  name: "CourseFormCard",
  props: {
    course: Object,
  },
  
}
</script>

<style>
@import "../../public/BodyCss.css";
</style>