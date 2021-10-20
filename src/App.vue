<template>
<header>
  <nav class="navbar navbar-expand-sm" style="background-color: #2E948A;">
    <div class="container">
      <a href="http://localhost:8080/course" class="navbar-brand">
        <img src="logoDin.svg" width="244">
      </a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-principal">

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/course" class="nav-link nav-font">Cursos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PainelAdm" class="nav-link nav-font">Painel Administrativo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
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


