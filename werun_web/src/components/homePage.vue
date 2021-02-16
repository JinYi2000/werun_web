<template>
<div id='content' >
    <div class='header'>
        <myHeader></myHeader>
    </div>
    <div id='myPic'>
        <myPics></myPics>
    </div>
    <div id='news'>
        <latestNews></latestNews>
    </div>
    <div id='fields'>
        <myFields></myFields>
    </div>
    <div id='projects'>
        <projects></projects>
    </div>
    <div id='scientificResearch'>
        <scientificResearch></scientificResearch>
    </div>
    <!-- <div id='ourTeam'>
        <ourTeam></ourTeam>
    </div> -->
    <div id='joinUs'>
        <joinUs></joinUs>
    </div> 
    <div id='footer'>
        <myFooter></myFooter>
    </div>
</div>
</template>
<script>
import myHeader from '@/components/header'
import latestNews from '@/components/news'
import myFields from '@/components/myFields'
import projects from '@/components/projects'
import scientificResearch from '@/components/scientificResearch'
import myFooter from '@/components/footer'
import joinUs from '@/components/joinUs'
import ourTeam from '@/components/ourTeam'
import {debounce,throttle} from './debounce_throttle'
import myPics from './myPics.vue'
import myMixin from './reSIzeMixin'

export default {
    data(){
        return{
            picHeight:0,
            timeInterval:0
        }       
    },
    created(){
        
    },
    mixins:[myMixin],
    mounted(){
        var scrollTro = throttle(this.myScroll,200)
        window.addEventListener('scroll',scrollTro);

    },
    methods:{
        myScroll(){
            var width = document.body.clientWidth;
            var height = width/1.8;
            this.picHeight = height - 170;//轮播图图片高度
            var dis = window.pageYOffset;    
            var joinUs = document.getElementById('joinUs');//获取与滚动有关页面元素
            var header = document.getElementsByClassName('header'); 
            var name = header[0].getElementsByClassName('name');
            var partsName = document.getElementById('partsName');
            var logo = document.getElementById('logo');
            if(dis > 4500){//懒加载
                var joinUs_img = document.getElementById('joinUs_img');
                joinUs_img.src = 'https://i.loli.net/2020/09/23/jcp4N2mUZWz5eV3.jpg';
            }
            if(dis > this.picHeight){     
                logo.src = 'https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png';
                partsName.style.color = '#0d3590'
                header[0].style.backgroundColor = 'white';               
                name[0].style.color = '#0d3590';      
            }
            else{              
                logo.src = 'https://i.loli.net/2020/09/23/fH9ihPlvUqtZJ1Q.png';
                partsName.style.color = 'white'
                header[0].style.backgroundColor = 'transparent';
                name[0].style.color = 'white';        
            } 
        },
        
    },
    components:{
        myPics,myHeader,latestNews,myFields,projects,scientificResearch,joinUs,myFooter,ourTeam
    },
    destroy(){
        window.removeEventListener('scroll',scrollTro);
    }
}
</script>
<style scoped>
.header{
    height: 170px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    transition: background-color 0.5s linear
}
.header2{
    height: 170px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#eceff1;
    font-size:25px;
}
#content{
    display:flex;
    flex-direction:column;
}
.pics{
    margin-top:0px;
    width:100%;  
    position: absolute;
    transition:1s;
}
.pics img{
    width:100%;
    height:1200px;
}
#myPic{
    margin-top:0px;
    height:1200px;
    width:100%;
}
#pic{ 
    transition: all 1s linear;
}


#words span{
    opacity: 1 !important;
}
#news{
    position:relative;
    height: 1200px;
    width:100%;
   
}
#fields{
    height: 1500px;
    width:100%;
}
#projects{
    margin-top:100px;
    height: 1200px;
    width:100%;
    
}
#ourTeam{
    margin-top:200px;
}
#joinUs{
    margin-top:200px;
    height: 800px;
    width:100%;
}
#footer{
    margin-top:100px;
    height: 270px;
    background-color:#0d3590 ;
}
</style>