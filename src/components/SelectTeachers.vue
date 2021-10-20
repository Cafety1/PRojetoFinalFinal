<template>

  <select id="selectTeacher" v-model="objTeacher.id">
    <option v-for="t in teachers" v-bind:key="t.id" :value="t.id">
      {{ t.name }}
    </option>
  </select>
</template>

<script>

import STORE from "../store/index";

export default {
  name: "SelectTeachers",
  data() {
    return {
      teachers: Object,
      id: Number,
      objTeacher: Object,
    };
  },
  props: {
    teacher: Object,
  },
  created() {
    this.objTeacher = this.teacher;
    this.teachers = STORE.getters.getTeachers;
  },
};
</script>

<style>
</style>