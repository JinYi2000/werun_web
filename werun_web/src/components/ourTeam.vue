<template>
<div>
    <span id='title'>团队成员</span>
    <div id='newsContent'  @mouseover="showPics()" @mouseout="concealPics()">
        <div class='news' v-for="(item,key) in newsList">
            <img class='news_img' :src='item.img'>
            <span class='news_title'>{{item.name}}</span>
            
            <span class='description'>{{item.grade}}</span>
            <span class='description'>{{item.major}}</span>
            <span class='description'>{{item.dir}}</span>
        </div>
    </div>
    <span id='more'>更多 ></span>
    <div id='left'  @mouseover="showPics()" @mouseout="concealPics()">
        <img @click="moveLeft()" class='change' src='@/assets/img/左.png'>
    </div>
    <div id='right' @click="moveRight()" @mouseover="showPics()" @mouseout="concealPics()">
        <img class='change' src='@/assets/img/右.png'>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            leftDis:0,
            newsList:[ { img: 'https://i.loli.net/2020/09/24/XYgTzaldxZJksu2.jpg',
             name: '孙一恒',
              grade: '2017',
               major: '软件工程', dir: '后端' },
            { img: 'https://i.loli.net/2020/09/24/uNwtjIHARCJKo9r.jpg', name: '鹿轶轩', grade: '2018', major: '软件工程', dir: '后端' },
            { img: 'https://i.loli.net/2020/09/24/WH32b5Y1BxUO9jG.jpg', name: '莫张浩', grade: '2018', major: '计算机科学与技术', dir: '前端' },
            { img: 'https://i.loli.net/2020/09/24/3bTWSMKkhIFVENv.jpg', name: '刘俊良', grade: '2018', major: '软件工程', dir: '后端' }
            ,{ img: 'https://i.loli.net/2020/09/24/XYgTzaldxZJksu2.jpg',
             name: '孙一恒',
              grade: '2017',
               major: '软件工程', dir: '后端' },
            { img: 'https://i.loli.net/2020/09/24/uNwtjIHARCJKo9r.jpg', name: '鹿轶轩', grade: '2018', major: '软件工程', dir: '后端' },
            { img: 'https://i.loli.net/2020/09/24/WH32b5Y1BxUO9jG.jpg', name: '莫张浩', grade: '2018', major: '计算机科学与技术', dir: '前端' },
            { img: 'https://i.loli.net/2020/09/24/3bTWSMKkhIFVENv.jpg', name: '刘俊良', grade: '2018', major: '软件工程', dir: '后端' } ]
        }
    },
    methods:{
        showPics(){
            //console.log('ok');
            var left = document.getElementById('left');
            var right = document.getElementById('right');
            //console.log(left);
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
}
</script>
<style scoped>
.change{
    width:60px;
    margin-top:25px;
    
}
#left{
    position:absolute;
    width:100px;
    height:150px;
    background-color:black;
    opacity:0;
    top:6650px; 
    left:195px; 
    transition:1s;
}
#right{
    position:absolute;
    width:100px;
    height:150px;
    background-color:black;
    opacity:0;
    top:6650px; 
    right:195px;
    transition:1s;
}
.news_date{
    position:absolute;
    bottom:20px;
    left:20px;
    font-size:25px;
    color:#888888;
    font-weight:bold;
}
.news_img{
    width:370px;
    height:300px;
    
}
.news_title{
    display:block;
    text-align: center;
    margin:20px;
    margin-bottom:50px;
    font-weight:bold;
    font-size:27px;
}
.description{
    display:block;
    text-align: center;
    margin:20px;
    font-size:23px;
    color:#888888;
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
    top:6300px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
#more{
    position:absolute;
    top:6300px;
    right:195px;
    color:#455a64;
    font-size:45px;
}
.news{
    left:0px;
    position:relative;
    float:left;
    height:580px;
    width:350px;
    min-width:370px;
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
    height:600px;
    width:370px;
    min-width:370px;
    background-color: rgb(255, 255, 255);
    margin-top:0px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888;
    border-radius: 10px;
    
}
</style>