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
        <article id='article'>
            <h1>{{data.title}}</h1>
            <img id='article_img' src='https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg'>
            <article id='context'>
                {{data.context}}
            </article>
        </article>
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
            data:{
                    title:"针对小文件的二级缓存预取的云存储框架及构建方法",
                    picSrc:'https://i.loli.net/2020/09/23/1hf6wYcr2ZyMsvi.png',
                    context:'针对小文件的二级缓存预取的云存储框架及构建方法'
                },
        }
    },
    methods:{
        
        
    },
    mounted(){
            
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>
h1{
    margin-top:150px;
    font-size: 45px;
}
#article_img{
    width:300px;
    
}
#article{
    margin:195px;
}
#context{
    margin-top:100px;
    font-size: 25px;
    line-height: 60px;
    text-align: left;
    
}
.header{
    height: 170px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
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
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}
#article{
    margin-top:170px;
    min-height:1070px;
}
#footer{
    
    height: 270px;  
    background-color:#0d3590 ;
    
}
</style>