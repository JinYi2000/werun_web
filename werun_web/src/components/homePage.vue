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
    border:1px solid rgb(182, 51, 123);
    position:fixed;
    top:0px;
    
}
#content{
    display:flex;
    flex-direction:column;
}
#pics{
    margin-top:-70px;
    height: 500px;
    width:100%;
    border:1px solid rgb(47, 20, 202);   
}
#news{
    height: 500px;
    width:100%;
    border:1px solid rgb(228, 191, 28); 
}
#fields{
    height: 500px;
    width:100%;
    border:1px solid rgb(184, 41, 60); 
}
#projects{
    height: 500px;
    width:100%;
    border:1px solid rgb(102, 211, 130); 
}
#joinUs{
    height: 500px;
    width:100%;
    border:1px solid rgb(95, 128, 219); 
}
#footer{
    height: 300px;
    width:100%;
    border:1px solid rgb(37, 199, 164); 
}
</style>