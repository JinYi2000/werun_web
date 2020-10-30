<template>
    <div style='position:relative;'>
        <div class='header'>
            <img id='logo' src='https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png'>
            <div class ='name'>
            <span>WERUN</span>
            <br/>
            <span>C L U B</span>
            </div>
        </div>
        <div id='context'>
            <h1 style='color:#455a64;margin-bottom:100px;margin-left:195px;text-align:left;'>您的信息</h1>
            <div id="news">
                <div class='inputs'>
                    姓名：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    学号：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    手机：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    邮箱：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    专业：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    QQ：<el-input class='info' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    性别：<el-select class='info' v-model="input" placeholder="请输入内容"></el-select>
                </div>
                <div class='inputs'>
                    方向：<el-select class='info' v-model="input" placeholder="请输入内容"></el-select>
                </div>
                <div class='textareas'>
                    <span>请说一下来到实验室的目的：</span><el-input type='textarea' :rows="5" class='textarea' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='textareas'>
                    <span>你的闪光点（项目、获奖经历）：</span><el-input type='textarea' :rows="5" class='textarea' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='textareas'>
                    <span>你每天可以在实验室投入多少时间：</span><el-input type='textarea' :rows="5" class='textarea' v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                
                </div>
                
            </div>  
            <div id='button'>提交</div>        
        </div>
        <div id='footer'>
        <myFooter></myFooter>
        </div>
    </div> 
</template>
<script>
import myHeader from '@/components/header'
import myFooter from '@/components/footer'
export default {
    data(){
        return{
            input:'',
            
        }
    },
    mounted(){
       
    },
    methods:{
        viewDetail(id){
            this.$router.push('newsDetail'+id+'');
        },
        
    },
    mounted(){
            
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>
#button{  
    left:43%;
    position:absolute;
    line-height:70px;
    height:70px;
    width:220px;
    font-size:35px;
    border:3px solid #0d3590;
    border-radius:20px;
    color:#0d3590;
    transition:0.5s;
}
#button:hover{
    color:white;
    background-color: #0d3590;
    width:500px;
    
    position:absolute;
    line-height:70px;
    height:70px;
    width:220px;
    font-size:35px;
    border:3px solid #0d3590;
    border-radius:20px;
    font-weight:bold;
}
.info{
    display: inline-block;
    width:200px;
}
.inputs{
    
    display: inline-block;
    width:500px;
    margin-bottom:50px;
}
.textareas{
    position:relative;
    margin-bottom:50px;
}
.textareas span{
    text-align: left;
    position:relative;
    top:-70px;
    display: inline-block;
    width:130px;
}
.textarea{
    width:600px;
}
.newDetail{
    margin-left:5px;
    height:300px;
    width:98%;
    border:2px solid rgb(238, 243, 251);
    background-color: rgb(255, 255, 255);
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.1s linear;
}
.newDetail:hover{
    box-shadow:5px 5px 10px  rgb(235, 235, 235);
}
.news_img{
    width:120px;
    height:160px;
    border-radius: 5px;
    float:left;
    margin-top:100px;
    margin-left: 90px;
}
.title1{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    width:60%;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    margin-top:30px;
}
.description{
    position:absolute;
    left:250px;
    height:150px;
    font-size: 16px;
    margin-top:100px;
    margin-right:120px;
    color:grey;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
}
#news{
    margin:0 195px;
    position:relative;
    
    overflow: auto;
}
#context{
    margin-top:150px;
    height:calc(100vh - 420px);
    min-height:1200px;
}

.header{
    height: 130px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
#logo{
    margin-top:40px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:195px;
}
.name{
    float:left;
    margin-top:45px;
    margin-left:20px;
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}

#footer{   
    height: 270px;  
    background-color:#0d3590 ;
    bottom:0px;
}
.line{
    position:absolute;
    margin-top:85px;
    width:90%;
    margin-left: 5%;
    border-top:2px solid #0d3590;
}
</style>