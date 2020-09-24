<template>
<div>
    <img id='logo' src='https://i.loli.net/2020/09/23/fH9ihPlvUqtZJ1Q.png'>
    <div class ='name'>
    <span>WERUN</span>
    <br/>
    <span>C L U B</span>
    </div>
    <div id='partsName'>
        <span>最新动态</span>
        <span>研究方向</span>
        <span>项目展示</span>
        <span>科研成果</span>
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
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#eceff1;
    font-size:25px;
    font-weight: bold;;
}
#partsName{
    float:right;
    margin-right:195px;
    line-height:220px;
    color:#eceff1;
}
#partsName span{
    font-size:27px;
    margin:20px;
}
</style>