<template>

  <td colspan="2" class="align-middle">{{ course.title }}</td>
  <td>
    <router-link
      :to="{ name: 'CourseForm', params: { courseId: course.id } }"
      type="button"
      class="btn btn-warning"
      style="margin: 5px;5px;5px;0px"
      >editar</router-link
    >
    <button
      type="button"
      class="btn btn-danger pull-right"
      style="margin: 5px;5px;5px;0px"
      data-toggle="modal"
      @click="deleteCourse"
    >
      excluir
    </button>
  </td>

</template>

<script>

import STORE from "../store/index";

export default {
  name: "CourseFormCard",
  props: {
    course: Object,
  },
  methods: {
    deleteCourse() {
      if (confirm("confirma a exclusão do curso \n" + this.course.title)) {
        STORE.dispatch("deleteCourse", this.course);
      }
      location.reload();
    },
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>