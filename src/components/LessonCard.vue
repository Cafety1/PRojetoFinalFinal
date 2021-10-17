<template>
  <section class="section-card" style="background-color: #F6F6F6;"> <!-- Início Card 01 -->
        
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-md-5">
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" width="100%" height="260" src="{{lesson.url}}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <div class="col-md-5">
                    <h2 class="title-component">{{lesson.title}}</h2> pelo professor:{{lesson.teacher}}
                    <p style="font-size: 20px; font-weight: 300;">
                        {{lesson.description}}
                    </p>
                </div>

                <div class="grey-line-aulas col-md-10">
                </div>

            </div>
        </div>
    </section> <!-- /Fim Card 01 -->
    
</template>

<script>


export default {
    name: "LessonCard",
        props:{
            lesson:Object,
        },
}
</script>

<style>

@import '../../public/BodyCss.css';

</style>