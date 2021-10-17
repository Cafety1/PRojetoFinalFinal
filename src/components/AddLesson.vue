<template>

  <h4>Aula 1</h4>
                    <div class="mb-3">
                        <label for="tituloAula" class="form-label">Título da aula</label>
                        <input type="text" class="form-control" id="{{lesson.title}}" aria-describedby="tituloAula">
                    </div>
                    <div class="mb-3">
                        <label for="linkAula" class="form-label">Link da aula</label>
                        <input type="text" class="form-control" id="{{lesson.url}}" aria-describedby="linkAula">
                    </div>
                    <div class="mb-3">
                        <label for="descricaoAula" class="form-label">Descrição da aula</label>
                        <textarea class="form-control" id="{{lesson.description}}" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-default" style="margin-top: 20px;">salvar</button>
</template>

<script>
export default {

}
</script>

<style>

@import "../../public/BodyCss.css";

</style>