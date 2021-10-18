<template>
 
    
      <td colspan="2">{{course.title}}</td>
      <td >
        <router-link :to="{name:'CourseForm',params:{courseId:course.id}}" type="button" class="btn btn-warning"  >editar</router-link>
        <button type="button" class="btn btn-danger">excluir</button>
      </td>
    
 
</template>

<script>
export default {
  name: "CourseFormCard",
  props: {
    course: Object,
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>