<template>


 <section class="section-card">
        <div class="container">
            <h2 class="title-component" style="margin-bottom: 30px;">Novo Curso</h2>
            <div class="form-curso">
                <form>
                    <div class="mb-3">
                        <label for="tituloCurso" class="form-label">Título do curso</label>
                        <input type="text" class="form-control" id="tituloCurso" aria-describedby="emailHelp" v-model = "dado.title">
                        <div id="emailHelp" class="form-text">Por Favor, coloque o nome da Aula.</div>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Capa</label>
                        <input class="form-control" type="file" id="formFile">
                        <div id="imageHelp" class="form-text">Escolha uma imagem para ser a capa da sua aula.</div>
                    <div><img :src="imageSrc"/></div>
                    </div>
                    <div class="mb-3">
                        <label for="nomeProfessor" class="form-label">Nome do professor</label>
                        <input type="text" class="form-control" id="nomeProfessor" aria-describedby="nomeProfessor" v-model = "dado.teacher.name">
                    </div>
                    <div class="mb-3">
                        <label for="descricaoCurso" class="form-label">Descrição do curso</label>
                        <textarea class="form-control" id="FormControlTextarea1" rows="3" v-model = "dado.description"></textarea>
                    </div>
                    <div class = "mb-3" v-for="l in dado.lessons" :key = "l.id">
                        <add-lesson :lesson ="l" @Nomedoeventoemitido = "metodoachamar" /> 
                    </div>
                    <button type = "button" @click ="AddLesson()" class="btn btn-default" style="margin-top: 20px;">Adicionar mais aulas</button>
                    
                    <button type="submit" class="btn btn-default" style="margin-top: 20px;">salvar</button>

                </form>
            </div>
        </div>
    </section>
</template>

<script>
import AddLesson from './AddLesson.vue'
import CONFIG from "../Service/Config"

export default {
  components: { 
      AddLesson 
    },
   name: "AddCourse",

   data(){
       return {
           dado: Object
       }
   },
   props:{
       course: Object
   },
   computed: {
       imageSrc() {
           return CONFIG.baseUrl+"/Images/"+this.dado.urlCover
       }
   },
   created(){
       console.log(this.dado)
       console.log(this.course)
       this.dado = this.course
   },
   methods:{
       AddLesson(){
           this.dado.lessons.push({
                 id: 0,
                 title: "",
                order: 0,
                link: null,
                urlImage: null,
                description: ""
           }
           )
           
       },
       
   }

}
</script>

<style>
@import "../../public/BodyCss.css";
</style>