<template>
       
            
            
                <div class="col-md-5">
                    <div class="embed-responsive embed-responsive-21by9">
                        <!-- <iframe class="embed-responsive-item"  src="https://www.youtube.com/watch?v=0-mKwNMXETo"> -->
                        <img src="{{lesson.urlImage}}" class="img-thumbnail"/>
                        


                        <!-- </iframe> -->
                    </div>
                </div>
                <div class="col-md-5">
                    <h2 class="title-component">Aula {{lesson.order}} - {{lesson.title}} </h2>
                    <p style="font-size: 20px; font-weight: 300;">
                         {{lesson.description}}
                    </p>
                </div>
                    <div class="grey-line-aulas col-md-10">
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