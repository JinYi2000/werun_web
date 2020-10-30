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
            <h1 style='color:#455a64;margin-bottom:100px;margin-left:195px;text-align:left;'> 更多项目</h1>
            <div id="news">
                <div class='newDetail' v-for='(item,index) in projectsList' >
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
            projectsList:[
                
            ]
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.$axios.get('/project/listProject').then(res=>{
                console.log(res);
                this.projectsList = res.data.data;
            })
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
.newDetail{
    margin-left:5px;
    height:350px;
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
    width:200px;
    height:300px;
    border-radius: 5px;
    float:right;
    margin-top:30px;
    margin-right: 50px;
}
.title1{
    position:absolute;
    width:50%;
    text-align: center;
    left:100px;
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
    margin-top:30px;
}
.line{
    position:absolute;
    margin-top:70px;
    width:50%;
    left:100px;
    border-top:2px solid #0d3590;
}
.description{
    position:absolute;
    width:50%;
    text-align: center;
    left:100px;
    height:150px;
    font-size: 16px;
    margin-top:130px;
    color:grey;
}
#news{
    margin:0 195px;
    position:relative;
    height:100%;
    /* border:5px solid green; */
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

</style>