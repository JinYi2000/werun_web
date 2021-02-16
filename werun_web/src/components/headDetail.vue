<template>
<div style='minWidth:1500px'>
    <div class='header'>
            <img id='logoDetail' src='https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png'>
            <div class ='name'>
            <span>WERUN</span>
            <br/>
            <span>C L U B</span>
            </div>
        </div>
</div>
</template>
<script>
export default {
    methods:{
        scroll(key){
            var obj = document.getElementById(key);
            var topHeight = obj.offsetTop - 150;
            //console.log(topHeight);
            window.scrollTo({
                top:topHeight,
                left:0,
                behavior:'smooth'
            });
        },
        ifShow(){
            var url = window.location.hash;
            if(url == '#/'){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
</script>
<style scoped>
.header{
    height: 170px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
#logoDetail{
    margin-top:70px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:195px;
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}
</style>