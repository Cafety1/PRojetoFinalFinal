<template>

  <section class="section-card">
    <div class="container">
      <h2 class="title-component" style="margin-bottom: 30px" >Novo Curso</h2>
      <div class="form-curso">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="tituloCurso" class="form-label">Título do curso</label>
            <input
              type="text"
              class="form-control"
              id="tituloCurso"
              aria-describedby="emailHelp"
              v-model="dado.title"
            />
            <div id="emailHelp" class="form-text">
              Por favor, coloque o nome da Aula.
            </div>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Capa do curso</label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              @change="previewFoto(this, 'coursePhoto')"
            />
            <div id="imageHelp" class="form-text">
              Escolha uma imagem para ser a capa do seu curso.
            </div>
            <div class="mb-3">
              <img id="coursePhoto" style="width: 60%" :src="imageSrc" />
            </div>
          </div>
          <div class="mb-3">
            <label for="nomeProfessor" class="form-label"
              >Nome do professor &nbsp; </label
            >
            <SelectTeachers :teacher="dado.teacher" />
            <input style ="display: none"
              type="text"
              class="form-control"
              id="nomeProfessor"
              aria-describedby="nomeProfessor"
              v-model="dado.teacher.name"
            />
          </div>
          <div class="mb-3">
            <label for="descricaoCurso" class="form-label"
              >Descrição do curso</label
            >
            <textarea
              class="form-control"
              id="FormControlTextarea1"
              rows="3"
              v-model="dado.description"
            ></textarea>
          </div>
          <div
            class="mb-3 accordion"
            v-for="l in dado.lessons"
            :key="l.id"
            id="lessonsAccordion"
          >
            <add-lesson
              :lesson="l"
              @lessonAcima="acima"
              @lessonAbaixo="abaixo"
            />
          </div>
          <button
            type="button"
            @click="AddLesson()"
            class="btn btn-default"
            style="margin-top: 20px; margin-right: 10px"
          >
            adicionar mais aulas
          </button>

          <button
            type="submit"
            class="btn btn-default"
            style="margin-top: 20px"
          >
            salvar
          </button>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
import AddLesson from "./AddLesson.vue";
import CONFIG from "../Service/Config";
import router from "../router/index";
import SelectTeachers from "../components/SelectTeachers.vue";
import Utils from "../Service/Utils";

export default {
  components: {
    AddLesson,
    SelectTeachers,
  },
  name: "AddCourse",

  data() {
    return {
      dado: Object,
      qtdLessons: Number,
      imageRender: String,
    };
  },
  props: {
    course: Object,
  },
  computed: {
    imageSrc() {
      if (this.dado.urlCover != null && this.dado.urlCover >= 0) {
        return CONFIG.baseUrl + "/Images/" + this.dado.urlCover;
      } else {
        return "";
      }
    },
  },
  created() {
    this.dado = this.course;
    this.qtdLessons = this.course.lessons.length * -1;
    this.imageRender = "";
  },
  methods: {
    acima(id) {
      let i = -1;
      for (let x = 0; x < this.dado.lessons.length; x++) {
        if (this.dado.lessons[x].id == id) {
          i = x;
        }
      }
      if (i > 0) {
        let temp = this.dado.lessons[i];
        this.dado.lessons[i] = this.dado.lessons[i - 1];
        this.dado.lessons[i - 1] = temp;
      }
    },
    abaixo(id) {
      let i = -1;
      for (let x = 0; x < this.dado.lessons.length; x++) {
        if (this.dado.lessons[x].id == id) {
          i = x;
        }
      }
      if (i < this.dado.lessons.length - 1) {
        let temp = this.dado.lessons[i];
        this.dado.lessons[i] = this.dado.lessons[i + 1];
        this.dado.lessons[i + 1] = temp;
      }
    },
    AddLesson() {
      this.qtdLessons--;
      this.dado.lessons.push({
        id: this.qtdLessons,
        title: "Nova Aula",
        order: 0,
        link: null,
        urlImage: null,
        description: "",
      });
    },
    onSubmit() {
      Utils.wait();      
      this.$emit("CourseForm-submitted", JSON.stringify(this.dado)); 
      setTimeout(() => router.push({ name: "PainelAdm", params: {} }), 1000);
    },
    previewFoto(evt, idElement) {
      var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
          document.getElementById(idElement).src = fr.result;
        };
        fr.readAsDataURL(files[0]);
      }else {//Sai do else
                    
      }
    },
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>