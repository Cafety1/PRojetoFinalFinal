<template>

  <h4 v-if="novo">Nova Aula</h4>
  <h4 v-if="!novo">{{dado.title}}</h4>

                    <div class="mb-3">
                        <label for="tituloAula" class="form-label">Título da aula</label>
                        <input type="text" class="form-control" id="lesson.title" aria-describedby="tituloAula" v-model="dado.title">
                    </div>
                    <div class="mb-3">
                        <label for="linkAula" class="form-label">Link da aula</label>
                        <input type="text" class="form-control" id="lesson.url" aria-describedby="linkAula" v-model="dado.link">                        
                        <div><img :src="imageSrc"/></div>
                    </div>
                    <div class="mb-3">
                        <label for="descricaoAula" class="form-label">Descrição da aula</label>
                        <textarea class="form-control" id="lesson.description" rows="3" v-model ="dado.description"></textarea>
                    </div>
                    
</template>

<script>
import CONFIG from "../Service/Config"

export default {
    data(){
        return{
            dado : Object
        }
    },
        props:{
            lesson: Object
        },

    computed : {
        novo(){
            return this.dado.id == 0
        },
        
       imageSrc() {
           return CONFIG.baseUrl+"/Images/"+this.dado.urlImage
       }
  
    },

    methods:{
        onSubmit() {
            this.$emit('lessonapagarcomclick', this.dado);
   }
    },
   
   created(){
       this.dado = this.lesson
   }
}
</script>

<style>

@import "../../public/BodyCss.css";

</style>