<template>
<div>
    <span id='title'>最新动态</span>
    <div id='newsContent'  @mouseover="showPics()" @mouseout="concealPics()">
        <div class='news' v-for="(item,key) in newsList" @click="viewDetail()">
            <img class='news_img' :src='item.picSrc'>
            <span class='news_title'>{{item.title}}</span>
            <span class='news_date'>{{item.date}}</span>
        </div>
    </div>
    <span id='more'>更多 ></span>
    <div id='left2'  @mouseover="showPics()" @mouseout="concealPics()">
        <img @click="moveLeft()" class='change' src='@/assets/img/左.png'>
    </div>
    <div id='right2' @click="moveRight()" @mouseover="showPics()" @mouseout="concealPics()">
        <img class='change' src='@/assets/img/右.png'>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            leftDis:0,
            newsList:[
                {
                    title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                    picSrc:'https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg',
                    date:'Sep 02'
                },
                
                {
                    title:'2015级刘海青和章江山同学参与的发明专利获得授权',
                    picSrc:'https://i.loli.net/2020/09/18/NcQ4zFASxibyuM9.jpg',
                    date:'Sep 02'
                },
                {
                    title:'2016级林春旭，2017级郭振豪、孙一恒同学论文被国际学术会议ICAIS接收',
                    picSrc:'https://i.loli.net/2020/09/18/ePMsrQjTFmt3yu6.jpg',
                    date:'Sep 02'
                },
                {
                    title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                    picSrc:'https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg',
                    date:'Sep 02'
                },
                
                {
                    title:'2015级刘海青和章江山同学参与的发明专利获得授权',
                    picSrc:'https://i.loli.net/2020/09/18/NcQ4zFASxibyuM9.jpg',
                    date:'Sep 02'
                },
                {
                    title:'2016级林春旭，2017级郭振豪、孙一恒同学论文被国际学术会议ICAIS接收',
                    picSrc:'https://i.loli.net/2020/09/18/ePMsrQjTFmt3yu6.jpg',
                    date:'Sep 02'
                },
                
                
            ]
        }
    },
    methods:{
        viewDetail(){
            this.$router.push('newsDetail');
        },
        showPics(){
            //console.log('ok');
            var left = document.getElementById('left2');
            var right = document.getElementById('right2');
            left.style.opacity = 0.7;
            right.style.opacity = 0.7;
        },
        concealPics(){
            //console.log('ok');
            var left = document.getElementById('left2');
            var right = document.getElementById('right2');
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
        
            
        
    }   
}
</script>
<style scoped>
.change{
    width:50px;
    margin-top:25px;
    
}
#left2{
    position:absolute;
    width:70px;
    height:130px;
    background-color:black;
    opacity:0;
    top:550px; 
    left:195px; 
    transition:1s;
}
#right2{
    position:absolute;
    width:70px;
    height:130px;
    background-color:black;
    opacity:0;
    top:550px; 
    right:195px;
    transition:1s;
}
.news_date{
    position:absolute;
    bottom:20px;
    left:20px;
    font-size:20px;
    color:#888888;
    font-weight:bold;
}
.news_img{
    width:300px;
    height:250px;
}
.news_title{
    display:inline-block;
    text-align: left;
    margin:20px;
    font-weight:bold;
    font-size:20px;
    
}
#newsContent{
    margin-left:195px;
    display:flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow:hidden;
    height:625px;
    
    margin-top:385px;
}
#title{
    position:absolute;
    top:170px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
#more{
    position:absolute;
    top:170px;
    right:195px;
    color:#455a64;
    font-size:45px;
}
.news{
    left:0px;
    position:relative;
    float:left;
    height:450px;
    width:300px;
    background-color: rgb(255, 255, 255);
    margin-top:15px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888;
    border-radius: 10px;
    transition:all 0.2s linear;
    /* transition:left 0.5s linear; */
}
.news:hover{
    position:relative;
    float:left;
    height:450px;
    width:300px;
    background-color: rgb(255, 255, 255);
    margin-top:0px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888;
    border-radius: 10px;
    
}
</style>