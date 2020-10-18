<template>
<div style='minWidth:1500px'>
    <img id='logo' src='https://i.loli.net/2020/09/23/fH9ihPlvUqtZJ1Q.png'>
    <div class ='name'>
    <span>WERUN</span>
    <br/>
    <span>C L U B</span>
    </div>
    <div id='partsName' v-show='ifShow()'>
        <span @click='scroll(920)'>最新动态</span>
        <span @click='scroll(2057)'>研究方向</span>
        <span @click='scroll(3652)'>项目展示</span>
        <span @click='scroll(4810)'>科研成果</span>
        <span @click='scroll(5921)'>团队成员</span>
        <span @click='scroll(6616)'>加入我们</span>
    </div>
</div>
</template>
<script>
export default {
    methods:{
        scroll(height){
            window.scrollTo(0,height);
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
    margin-left:195px;
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
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