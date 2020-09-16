<template>
<div id='content'>
    <div id='header'>
        <myHeader></myHeader>
    </div>
    <div id='pics'>
    </div>
    <div id='news'>
    </div>
    <div id='fields'>
    </div>
    <div id='projects'>
    </div>
    <div id='joinUs'>
    </div>
    <div id='footer'>
    </div>
</div>
</template>
<script>
import myHeader from '@/components/header'
export default {
    data(){

    },
    components:{
        myHeader
    }
}
</script>
<style scoped>
#header{
    height: 170px;
    width:100%;
    border:1px solid rgb(47, 20, 202);
    position:fixed;
    top:0px;
    
}
#content{
    display:flex;
    flex-direction:column;
}
#pics{
    margin-top:170px;
    height: 360px;
    width:100%;
    border:1px solid rgb(47, 20, 202);   
}
</style>