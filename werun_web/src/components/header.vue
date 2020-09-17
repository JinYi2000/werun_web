<template>
<div>
    <img id='logo' src='@/assets/img/logo-werun.png'>
    <div class ='name'>
    <span>WERUN</span>
    <br/>
    <span>C L U B</span>
    </div>
</div>
</template>
<script>
export default {
    
    methods:{
        scrollToTop(){
            var dis = window.pageYOffset;
            console.log(dis);
        }
    }
}
</script>
<style scoped>
#logo{
    margin-top:70px;
    width:60px;
    height:60px;
    float:left; 
    margin-left:195px;
}
span{
    
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#eceff1;
    font-size:25px;
}
</style>