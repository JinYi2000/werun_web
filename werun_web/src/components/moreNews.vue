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
            <h1 style='color:#455a64;margin-bottom:100px;margin-left:195px;text-align:left;'>更多动态</h1>
            <div id="news">
                <div class='newDetail' v-for='(item,index) in newsList' >
                        <img class='news_img' :src='item.picUrl'>
                        <span class='title1'>{{item.title}}</span>
                        <div class='line'></div>
                        <span class='description'>{{item.context}}</span>
                        
                </div>
            </div>          
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
            newsList:[
            ]
        }
    },
    methods:{
        getNews(){
            this.$axios.get('https://club.werun.top:8888/homepage/news/listNews').then(res=>{
                console.log(res);
                this.newsList = res.data.data;
            })
        },
        
    },
    mounted(){
            this.getNews();
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>
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
    height:100%;
    overflow: auto;
}
#context{
    margin:auto;
    /* border:2px solid red; */
    flex:1 1 auto;
    margin-top:150px;
    
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
#context{
    height:100%;
}
#footer{
    margin-top:200px;
    height: 270px;  
    background-color:#0d3590 ;
}
.line{
    position:absolute;
    margin-top:85px;
    width:90%;
    margin-left: 5%;
    border-top:2px solid #0d3590;
}
</style>