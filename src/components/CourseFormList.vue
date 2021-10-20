<template>

  <tr v-for="course in courses" :key="course.id">

    <CourseFormCard :course="course" />

  </tr>

</template>

<script>

import CourseFormCard from "./CourseFormCard.vue";

export default {
  components: {
    CourseFormCard,
  },
  props: {
    courses: Object,
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>