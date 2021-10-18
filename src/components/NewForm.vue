<template>
    <section class="section-card">
        <div class="container">
            <h2 class="title-component" style="margin-bottom: 30px;">Novo Curso</h2>
            <div class="form-curso">
                <form>
                    <div class="mb-3">
                        <label for="tituloCurso" class="form-label">Título do curso</label>
                        <input type="text" class="form-control" id="tituloCurso" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">Fique tranquilo, nós não vamos compartilhar seu e-mail com
                            ninguém.</div>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Capa</label>
                        <input class="form-control" type="file" id="formFile">
                        <div id="imageHelp" class="form-text">Escolha uma imagem para ser a capa da sua aula.</div>
                    </div>
                    <div class="mb-3">
                        <label for="nomeProfessor" class="form-label">Nome do professor</label>
                        <input type="text" class="form-control" id="nomeProfessor" aria-describedby="nomeProfessor">
                    </div>
                    <div class="mb-3">
                        <label for="descricaoCurso" class="form-label">Descrição do curso</label>
                        <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                    </div>

                    <h4>Aula 1</h4>
                    <div class="mb-3">
                        <label for="tituloAula" class="form-label">Título da aula</label>
                        <input type="text" class="form-control" id="tituloAula" aria-describedby="tituloAula">
                    </div>
                    <div class="mb-3">
                        <label for="linkAula" class="form-label">Link da aula</label>
                        <input type="text" class="form-control" id="linkAula" aria-describedby="linkAula">
                    </div>
                    <div class="mb-3">
                        <label for="descricaoAula" class="form-label">Descrição da aula</label>
                        <textarea class="form-control" id="FormControlTextarea2" rows="3"></textarea>
                    </div>

                    
                    <button type="submit" class="btn btn-default" style="margin-top: 20px;">salvar</button>

                </form>
            </div>
        </div>
    </section>

</template>

<script>


export default {
}
</script>

<style>
@import "../../public/BodyCss.css";
</style>