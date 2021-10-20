<template>
    <div>
        <img src='../assets/caffeine9.jpg'/>
    </div>    
</template>
<script>
import router from "../router/index"
export default {
    name: "home",
    created() {
        setTimeout(()=>{router.push({name:"Course"})}, 3000)
    }
}
</script>

<style>
@import '../../public/BodyCss.css';

</style>