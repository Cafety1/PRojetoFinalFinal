<template>

  <div class="col-md-5">
    <div class="embed-responsive embed-responsive-21by9">
      <img :src="image" class="img-fluid" />
    </div>
  </div>
  <div class="col-md-5">
    <h2 class="title-component" style="padding-top: 30px">
      Aula {{ lesson.order }} - {{ lesson.title }}
    </h2>
    <p style="font-size: 20px; font-weight: 300">
      {{ lesson.description }}
    </p>
    <button class="btn btn-default" @click="GoLink()">Assista agora</button>
  </div>
  <div class="grey-line-aulas col-md-10"></div>

</template>

<script>

import CONFIG from "../Service/Config";

export default {
  name: "LessonCard",
  props: {
    lesson: Object,
  },

  methods: {
    GoLink() {
      window.open(this.lesson.link);
    },
  },
  computed: {
    image() {
      if (this.lesson.urlImage != null && this.lesson.urlImage >= 0) {
        return CONFIG.baseUrl + "/Images/" + this.lesson.urlImage;
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>