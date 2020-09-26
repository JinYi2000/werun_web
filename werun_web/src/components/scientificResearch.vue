<template>
<div>
    <span id='title'>科研成果</span>   
    <span id='more'>更多 ></span>
    <div id='projectsContext'>
        <div id='titles'>
            <div class='researches' @click='changeVal(0)'>{{projectsList[0].context}}</div>
            <div class='researches' @click='changeVal(1)'>{{projectsList[1].context}}</div>
            <div class='researches' @click='changeVal(2)'>{{projectsList[2].context}}</div>
            <div class='researches' @click='changeVal(3)'>{{projectsList[3].context}}</div>
        </div>
        <img id='project_pic' :src='projectsList[chosedProject].picSrc'>

        
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            chosedProject:0,
            projectsList:[
                {
                    picSrc:'https://i.loli.net/2020/09/23/1hf6wYcr2ZyMsvi.png',
                    context:'针对小文件的二级缓存预取的云存储框架及构建方法'
                },
                
                {
                    
                    picSrc:'https://i.loli.net/2020/09/23/RMYdVtFePlWZ9av.jpg',
                    context:'A method of Text extremum region Extraction based on Joint-Channels'
                },
                {
                    
                    picSrc:'https://i.loli.net/2020/09/23/Qx6wHgIWF8P3sTU.jpg',
                    context:'MMLUP: Multi-source & Multi-task Learning for User Profiles in Social Network'
                },
                {
                    
                    picSrc:'https://i.loli.net/2020/09/23/Qx6wHgIWF8P3sTU.jpg',
                    context:'SNES: Social-network-oriented Public Opinion Monitoring Platform Based on ElasticSearch'
                },
            ]
        }
    },
    methods:{
        changeVal(val){
            this.chosedProject = val;
        },
        showPics(){
            //console.log('ok');
            var left = document.getElementById('left');
            var right = document.getElementById('right');
            left.style.opacity = 0.7;
            right.style.opacity = 0.7;
        },
        concealPics(){
            //console.log('ok');
            var left = document.getElementById('left');
            var right = document.getElementById('right');
            left.style.opacity = 0;
            right.style.opacity = 0;
        },
        moveRight(){
            //alert('ok');
            var news = document.getElementsByClassName('news');
         
            //console.log(news[0].style);
            var num = this.newsList.length;
            var dis = num - 3;
            if(this.leftDis > -450*dis){
                this.leftDis -= 450;
                console.log(this.leftDis + 'px')
                for(let i = 0;i < news.length;i++){
                    news[i].style.left = this.leftDis + 'px';
                }
            }
            
        },
        moveLeft(){
            //alert('ok');
            var news = document.getElementsByClassName('news');
         
            //console.log(news[0].style);
            var num = this.newsList.length;
            if(this.leftDis < 0){
                this.leftDis += 450;
                console.log(this.leftDis + 'px');
                console.log(news);
                for(let i = 0;i < news.length;i++){
                    news[i].style.left = this.leftDis + 'px';
                }
                
                
            }
            
        }
    },
    mounted(){
        var newsContent = document.getElementById('newsContent'); 
    },
    watch:{
        chosedProject(){
            var researches = document.getElementsByClassName('researches');
            //console.log(titles);
            for(let i = 0;i<4;i++){
                researches[i].style.borderBottom = '5px solid gray';
                researches[i].style.color = 'gray';
            }
            researches[this.chosedProject].style.borderBottom = '5px solid #0d3590';
            researches[this.chosedProject].style.color = '#0d3590';
        }
    }
}
</script>
<style scoped>
#project_pic{
    float:right;
    width:400px;
    height:640px;
    transition:all 0.5s linear;
}
#title{
    position:absolute;
    top:5200px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
#more{
    position:absolute;
    top:5200px;
    right:195px;
    color:#455a64;
    font-size:45px;
}

#projectsContext{
    margin-right:185px;
    margin-left:195px;
    height:645px;
    margin-top:285px;
   
}
#titles{
    width:calc(100% - 430px);    
    height:645px;
   
    float:left;
    display: flex;
    flex-wrap: wrap;
}
.researches:nth-child(1){
    flex:0 0 40%;
    display:inline-block;
    margin-top:50px;
    height:250px;
    border-bottom:5px solid #0d3590;
    margin-left:5%;
    margin-right:5%;
    font-size: 40px;
    text-align: left;
    color:#0d3590;
    font-weight: bold;
}
.researches{
    flex:0 0 40%;
    display:inline-block;
    margin-top:50px;
    height:250px;
    border-bottom:5px solid gray;
    margin-left:5%;
    margin-right:5%;
    font-size: 40px;
    text-align: left;
    color:grey;
    font-weight: bold;
    transition:all 0.5s ease;
}
.researches:hover{
    flex:0 0 40%;
    display:inline-block;
    margin-top:50px;
    height:250px;
    border-bottom:5px solid #0d3590;
    margin-left:5%;
    margin-right:5%;
    font-size: 40px;
    text-align: left;
    color:#0d3590;
    font-weight: bold;
}
</style>