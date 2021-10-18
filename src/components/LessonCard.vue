<template>
        <div class="container">
            

                <div class="col-md-5">
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" width="100%" height="260" src="{{lesson.link}}"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="col-md-5">
                    <h2 class="title-component">Aula {{lesson.order}} </h2>
                    <p style="font-size: 20px; font-weight: 300;">
                         {{lesson.description}}
                    </p>
                </div>
                    <div class="grey-line-aulas col-md-10">
                    </div>
            
        </div>

           
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