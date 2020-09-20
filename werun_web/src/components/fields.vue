<template>
<div>
    <div id='fieldsContent'>
    <span id='title'>研究方向</span>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    }
    
}
</script>
<style scoped>
#title{
    position:absolute;
    top:100px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
#fieldsContent{
    position:relative;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow:hidden;
    height:1200px;
}
</style>