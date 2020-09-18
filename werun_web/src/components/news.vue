<template>
<div>
    <span id='title'>最新动态</span>
    <div id='newsContent'>
        <div class='news' v-for="(item,key) in newsList">
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            newsList:[
                {
                    title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                    picSrc:'https://sm.ms/image/57uEnyzQJaI4HPA',
                    date:'Sep 02'
                },
                
                {
                    title:'2015级刘海青和章江山同学参与的发明专利获得授权',
                    picSrc:'https://sm.ms/image/NcQ4zFASxibyuM9',
                    date:'Sep 02'
                },
                {
                    title:'2016级林春旭，2017级郭振豪、孙一恒同学论文被国际学术会议ICAIS接收',
                    picSrc:'https://sm.ms/image/ePMsrQjTFmt3yu6',
                    date:'Sep 02'
                },
                
            ]
        }
    }
    
}
</script>
<style scoped>
#newsContent{
    display:flex;
}
#title{
    position:absolute;
    top:170px;
    left:195px;
    color:#455a64;
    font-size:45px;
}
.news{
    position:relative;
    float:left;
    left:195px;
    height:600px;
    width:400px;
    background-color: rgb(255, 255, 255);
    margin-top:400px;
    margin-right:50px;
    box-shadow: 5px 5px 5px 3px #888888
}
</style>