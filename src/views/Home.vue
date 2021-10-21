<template>

  <div class="container">
    <div class="center-center " style="margin:0 auto">
        <img src="../assets/home-01.png" />
    </div>
  </div>  
  
</template>

<script>

import router from "../router/index";

export default {
  name: "home",

  created() {
    setTimeout(() => {
      router.push({ name: "Course" });
    }, 3000);
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>