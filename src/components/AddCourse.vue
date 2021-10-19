<template>


 <section class="section-card">
        <div class="container">
            <h2 class="title-component" style="margin-bottom: 30px;">Novo Curso</h2>
            <div class="form-curso">
                <form  @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <label for="tituloCurso" class="form-label">Título do curso</label>
                        <input type="text" class="form-control" id="tituloCurso" aria-describedby="emailHelp" v-model = "dado.title">
                        <div id="emailHelp" class="form-text">Por Favor, coloque o nome da Aula.</div>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Capa</label>
                        <input class="form-control" type="file" id="formFile" @change="previewFoto(this,'coursePhoto');">
                        <div id="imageHelp" class="form-text">Escolha uma imagem para ser a capa de seu curso.</div>
                    <div class="mb-3"><img id="coursePhoto" style="width:100% " :src="imageSrc"/></div>
                    </div>
                    <div class="mb-3">
                        <label for="nomeProfessor" class="form-label">Nome do professor</label>
                        <SelectTeachers :teacher="dado.teacher"  />
                        <input type="text" class="form-control" id="nomeProfessor" aria-describedby="nomeProfessor" v-model = "dado.teacher.name">
                    </div>
                    <div class="mb-3">
                        <label for="descricaoCurso" class="form-label">Descrição do curso</label>
                        <textarea class="form-control" id="FormControlTextarea1" rows="3" v-model = "dado.description"></textarea>
                    </div>
                    <div class = "mb-3 accordion" v-for="l in dado.lessons" :key = "l.id" id="lessonsAccordion">
                        <add-lesson :lesson ="l" /> 
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
import router from "../router/index"
import SelectTeachers from "../components/SelectTeachers.vue"
export default {
  components: { 
      AddLesson,
      SelectTeachers
    },
   name: "AddCourse",

   data(){
       return {
           dado: Object,
           qtdLessons : Number
       }
   },
   props:{
       course: Object
   },
   computed: {
       imageSrc() {
        if (this.dado.urlCover != null && this.dado.urlCover>=0) {
            return CONFIG.baseUrl+"/Images/"+this.dado.urlCover
        } else {
            return ""
        }
       }
   },
   created(){
       this.dado = this.course
        this.qtdLessons = this.course.lessons.length * -1
   },
   methods:{
       AddLesson(){
           this.qtdLessons--
           this.dado.lessons.push({
                 id: this.qtdLessons,
                 title: "Nova Aula",
                order: 0,
                link: null,
                urlImage: null,
                description: ""
           }
           )
           
       },
        onSubmit() {
            //verifica se a imagem é nova
            // se nova grava a imagem antes e atualiza o id da foto no this.dado
            this.$emit('CourseForm-submitted', this.dado);
            setTimeout(() => router.push({name:"PainelAdm",params:{}}) , 1000 )
        },
       previewFoto(evt, idElement) {
            this.dado.urlCover = 0

console.log("previewPhoto "+idElement)
    var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById(idElement).src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
}

   }

}




</script>

<style>
@import "../../public/BodyCss.css";
</style>