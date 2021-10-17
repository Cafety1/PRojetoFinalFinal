<template>
  <div class="course">
    <CourseList/>
  </div>

</template>

<script>

import CourseList from "../components/CourseList.vue";

export default {
    name: "course",
    components:{
        CourseList,
    }
    
}
</script>

<style>
@import '../../public/BodyCss.css';
</style>