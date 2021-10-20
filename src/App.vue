<template>
  <div id="nav">
    <router-link to="/course"></router-link>
    <router-link to="/PainelAdm"></router-link> 
  </div>
  <router-view />
</template>


<script>

import STORE from "./store/index"

export default {
  setup() {
    STORE.dispatch('fetchAllTeachers')
    STORE.dispatch('fetchAllCourses')
  },
}
</script>


