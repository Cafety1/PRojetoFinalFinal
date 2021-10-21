<template>
  <header>
  <section role="navigation">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <img src="logoDin.svg" width="244">
                    </a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false"
                        aria-label="Toggle navigation">
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
          </section>
<router-view />
  </header>
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


