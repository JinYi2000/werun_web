<template>
    <div>
           
            <img id='joinUs_img' src=''>
        
        <div id='cover2'>
             <span id='title1'>加入我们</span>
             <span id='title2'>诚邀您的加入</span>
             <span id='title3'>加入我们的团队，与我们一起探索技术之美</span>
             <div id='button' @click="join()">查看机会</div>
        </div>
    </div>
</template>
<script>
import registrationFormVue from './registrationForm.vue'
export default {
    methods:{
        join(){
            this.$router.push('registrationForm');
        }
    }
}
</script>
<style scoped>
#cover2{
    position:absolute;
    background-color:rgba(153, 158, 185, 0.8); 
    margin-left: 195px;
    margin-right: 195px;
    height:800px;
    width:calc(100% - 390px);
    z-index:3;
    color:white;
}
img{
    float:left;
    margin-left: 195px;
    margin-right: 195px;
    height:800px;
    width:calc(100% - 390px);
    z-index:2;
}
#title1{
    color:white;
    font-size:40px;
    left:10vw;
    margin-top:7vw;
    position:absolute;
    font-weight: bold;
}
#title2{
    color:white;
    font-size:70px;
    left:10vw;
    margin-top:10vw;
    position:absolute;
}
#title3{
    color:white;
    font-size:40px;
    left:10vw;
    top:16vw;
    position:absolute;
}
#button{  
    left:10vw;
    top:25vw;
    position:absolute;
    line-height:70px;
    height:70px;
    width:220px;
    font-size:35px;
    border:3px solid white;
    border-radius:20px;
    color:white;
    transition:0.5s;
}
#button:hover{
    color:white;
    background-color: #0d3590;
    width:500px;
    left:10vw;
    top:25vw;
    position:absolute;
    line-height:70px;
    height:70px;
    width:220px;
    font-size:35px;
    border:3px solid #0d3590;
    border-radius:20px;
    font-weight:bold;
}
</style>