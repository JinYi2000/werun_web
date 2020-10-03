<template>
<div style='position:relative'>
    <span id='title'>项目展示</span>   
    <span id='more'>更多 ></span>
    <div id='projectsContext'>
        <div id='nav'>
            <div class='titles' @click='changeVal(0)'>
                <span>{{projectsList[0].title}}</span>
            </div>
            <div class='titles' @click='changeVal(1)'>
                <span>{{projectsList[1].title}}</span>
                </div>
            <div class='titles' @click='changeVal(2)'>
                <span>{{projectsList[2].title}}</span>
            </div>
            <div class='titles' @click='changeVal(3)'>
                <span>{{projectsList[3].title}}</span>
            </div>
        </div>
        <img id='project_pic' :src='projectsList[chosedProject].picSrc'>
        <div id='detail'>
            {{projectsList[chosedProject].context}}
        </div>
        
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
                    title:'房合荟',
                    picSrc:'https://i.loli.net/2020/09/22/v2AF8xskQrI9Yjm.jpg',
                    context:'实验室为瀚宝公司开发的房地产O2O平台'
                },
                
                {
                    title:'贤得家',
                    picSrc:'https://i.loli.net/2020/09/22/vLVz5pbIWs8ZiCQ.png',
                    context:'实验室为瀚宝公司开发的智慧社区平台'
                },
                {
                    title:'威海市经区警民服务',
                    picSrc:'https://i.loli.net/2020/09/22/CLHqd1OlxRVXfwj.jpg',
                    context:'实验室为威海公安开发的警民服务系统'
                },
                {
                    title:'绩效考评系统',
                    picSrc:'https://i.loli.net/2020/09/22/wIhk1xLySTEMegN.jpg',
                    context:'实验室为我校开发的教师绩效考评系统'
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
            var titles = document.getElementsByClassName('titles');
            //console.log(titles);
            for(let i = 0;i<4;i++){
                titles[i].style.backgroundColor = 'rgb(250, 250, 250)';
                titles[i].style.color = 'darkgrey';
            }
            titles[this.chosedProject].style.backgroundColor = '#0d3590';
            titles[this.chosedProject].style.color = 'white';
        }
    }
}
</script>
<style scoped>
#project_pic{
    float:right;
    width:360px;
    height:640px;
    transition:all 0.5s;
}
#title{
    position:absolute;
    top:-250px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
#more{
    position:absolute;
    top:-250px;
    right:195px;
    color:#455a64;
    font-size:45px;
}

#projectsContext{
    margin-right:185px;
    margin-left:195px;
    height:645px;
    margin-top:385px;
}
#nav{
    width:300px;
    height:600px;
    float:left;
}
.titles{
    width:300px;
    height:150px;
    
    margin-bottom:10px;
    background-color: rgb(250, 250, 250);
    font-size:30px;
    font-weight: bold;
    color:darkgrey;
    line-height:150px;   
    align-self:center;
    text-align: center;
    transition:all 0.5s;
}
.titles:nth-child(1){
    width:300px;
    height:150px;
    margin-bottom:10px;
    background-color:#0d3590 ;
    font-size:30px;
    font-weight: bold;
    color:white;
    line-height:150px;   
    align-self:center;
    text-align: center;
    transition:all 0.5s;
}
.titles:hover{
    width:300px;
    height:150px;
    margin-bottom:10px;
    background-color: rgb(250, 250, 250);
    font-size:30px;
    font-weight: bold;
    line-height:150px;   
    align-self:center;
    text-align: center;
    color:#0d3590;
}

#detail{
    font-size:20px;
    background-color: #0d3590;
    line-height:630px;
    height:643px;
    margin-left:310px;
    margin-right:370px;
    color:white;
    transition:all 0.5s;
}
</style>