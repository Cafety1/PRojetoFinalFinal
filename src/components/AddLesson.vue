<template>
  <div class="accoordion-item card">
    <h4 v-if="novo" class="accordion-header" :id="header">
        Nova Aula
     <i @click="emitAcima" class="fas fa-arrow-circle-up"></i>
          <i @click="emitAbaixo" class="fas fa-arrow-circle-down"></i>
          <span 
        class="badge bg-default position-absolute end-0"
        style="margin-right: 20px; background: #419488"
        data-bs-toggle="collapse"
        v-bind:data-bs-target="panelId"
        aria-expanded="true"
        v-bind:aria-controls="panel"
      >
      <i class="fas fa-chevron-down" ></i>
      </span>
      </h4>
    <h4 v-if="!novo" class="accordion-header" :id="header">
      {{ dado.title }}
          <i @click="emitAcima" class="fas fa-arrow-circle-up"></i>
          <i @click="emitAbaixo" class="fas fa-arrow-circle-down"></i>
          <span 
        class="badge bg-default position-absolute end-0"
        style="margin-right: 20px; background: #419488"
        data-bs-toggle="collapse"
        v-bind:data-bs-target="panelId"
        aria-expanded="true"
        v-bind:aria-controls="panel"
        
      >
      <i class="fas fa-chevron-down"></i>
      </span>
    </h4>
    <div
      :id="panel"
      :class="dado.id <=0 ? 'accordion-collapse collapse show':'accordion-collapse collapse'"
      v-bind:aria-labelledby="header"
    >
      <div class="accordion-body">
        <!--
        <h4>
          <i @click="emitAcima" class="fas fa-arrow-circle-up"></i>
          <i @click="emitAbaixo" class="fas fa-arrow-circle-down"></i>
        </h4>
        -->
        <div class="mb-3">
          <label for="tituloAula" class="form-label">Título da aula</label>
          <input
            type="text"
            class="form-control"
            id="lesson.title"
            aria-describedby="tituloAula"
            v-model="dado.title"
          />
        </div>
        <div class="mb-3">
          <label for="linkAula" class="form-label">Link da aula</label>
          <input
            type="text"
            class="form-control"
            id="lesson.url"
            aria-describedby="linkAula"
            v-model="dado.link"
          />
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Capa</label>
                <input class="form-control" type="file" id="formFile" @change="previewFoto(this, lessonPhotoId);">
                <div id="imageHelp" class="form-text">Escolha uma imagem para ser a capa da sua aula.</div>
          <div class="mb-3"><img :id="lessonPhotoId" style="width:60%" :src="imageSrc"/></div>
        </div>
        <div class="mb-3">
          <label for="descricaoAula" class="form-label"
            >Descrição da aula</label
          >
          <textarea
            class="form-control"
            id="lesson.description"
            rows="3"
            v-model="dado.description"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CONFIG from "../Service/Config";

export default {
  data() {
    return {
      dado: Object,
      imageRender:String
    };
  },
  props: {
    lesson: Object,
  },

  computed: {
    novo() {
      return this.dado.id <= 0;
      
    },
    header() {
        return "header_"+this.dado.id
    },
    
    panel() {
        return "panel_"+this.dado.id
    },
    panelId() {
        return "#panel_"+this.dado.id
    },
    lessonPhotoId() {
        return "lessonPhoto_"+this.dado.id
    },


    imageSrc() {
        if (this.dado.urlImage != null && this.dado.urlImage>=0) {
            return CONFIG.baseUrl + "/Images/" + this.dado.urlImage;
        } else {
            return ""
        }
    },
  },

  methods: {
    onSubmit() {
      this.$emit("lessonapagarcomclick", this.dado);
    },
    emitAcima() {
      this.$emit("lessonAcima", this.dado.id);

    },
    emitAbaixo() {
      this.$emit("lessonAbaixo", this.dado.id);

    },
    

    previewFoto(evt, idElement) {
        console.log(idElement)
            this.dado.urlImage = 0
    var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        this.dado.urlImage = -1
        this.dado.image64 = ""
        console.log(this)
        fr.onload = function () {
            console.log(this.parent)
            ///ver copm breno
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

  },

  created() {
    this.dado = this.lesson;
    this.dado.imageRender = ""
    this.imageRender = ""
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>