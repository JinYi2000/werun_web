<template>
<div style='minWidth:1500px'>
    <img id='logo' src='https://i.loli.net/2020/09/23/fH9ihPlvUqtZJ1Q.png'>
    <img id='logo2' src='https://i.loli.net/2020/12/09/X2h8TmILKsPWCE4.png'>
    <div class ='name'>
    <span>WERUN</span>
    <br/>
    <span>C L U B</span>
    </div>
    <div class ='name2'>
    <span>I C E</span>
    <br/>
    <span>PHONE</span>
    </div>
    <div id='partsName' v-show='ifShow()'>
        <span @click='scroll("news")'>最新动态</span>
        <span @click='scroll("fields")'>研究方向</span>
        <span @click='scroll("projects")'>项目展示</span>
        <span @click='scroll("scientificResearch")'>科研成果</span>
        <span @click='scroll("ourTeam")'>团队成员</span>
        <span @click='scroll("joinUs")'>加入我们</span>
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
#logo{
    margin-top:70px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:105px;
}
#logo2{
    position:absolute;
    margin-top:55px;
    width:60px;
    height:80px;
    float:left; 
    left:265px;
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#eceff1;
    font-size:20px;
    font-weight: bold;;
}
.name2{
    float:left;
    margin-top:67px;
    margin-left:80px;
    color:#eceff1;
    font-size:20px;
    font-weight: bold;;
}
#partsName{
    float:right;
    margin-right:195px;
    line-height:200px;
    color:#eceff1;
}
#partsName span{
    font-size:23px;
    margin:20px;
}
</style>