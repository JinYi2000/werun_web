<template>
<div>
    <span id='title'>最新动态</span>
    <div id='newsContent'>
        <div class='news' v-for="(item,key) in newsList">
            <img class='news_img' :src='item.picSrc'>
            <span class='news_title'>{{item.title}}</span>
            <span class='news_date'>{{item.date}}</span>
        </div>
    </div>
    <span id='more'>更多 ></span>
    <div id='left'>66666</div>
    <div id='change'>77</div>
</div>
</template>
<script>
export default {
    data(){
        return{
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
    }
    
}
</script>
<style scoped>
.change{
    position:absolute;
    width:100px;
    height:100px;
    background-color: red;  
    
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
    width:400px;
    height:300px;
}
.news_title{
    display:inline-block;
    text-align: left;
    margin:20px;
    font-weight:bold;
    font-size:27px;
    
}
#newsContent{
    margin-left:195px;
    display:flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow:hidden;
    height:1200px;
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
    position:relative;
    float:left;
    height:600px;
    width:400px;
    min-width:400px;
    background-color: rgb(255, 255, 255);
    margin-top:400px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888;
    border-radius: 10px;
    transition:all 0.2s linear;
}
.news:hover{
    position:relative;
    float:left;
    height:600px;
    width:400px;
    min-width:400px;
    background-color: rgb(255, 255, 255);
    margin-top:385px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888;
    border-radius: 10px;
    
}
</style>