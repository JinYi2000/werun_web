<template>
<div id='content' >
    <div class='header'>
        <myHeader></myHeader>
    </div>
    <div id='myPic'>
    <div class='pics' v-for="(item,index) in pics">
        <img :id="picId(index)" >
    </div>
    </div>
    <div id='cover'>
        <span id='words'>Your world, we run</span>
    </div>
    <div id='news'>
        <latestNews></latestNews>
    </div>
    <div id='fields'>
        <fields></fields>
    </div>
    <div id='projects'>
        <projects></projects>
    </div>
    <div id='scientificResearch'>
        <scientificResearch></scientificResearch>
    </div>
    <div id='ourTeam'>
        <ourTeam></ourTeam>
    </div>
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
import fields from '@/components/fields'
import projects from '@/components/projects'
import scientificResearch from '@/components/scientificResearch'
import myFooter from '@/components/footer'
import joinUs from '@/components/joinUs'
import ourTeam from '@/components/ourTeam'
export default {
    data(){
        return{
            pics:['https://i.loli.net/2020/09/18/Nhb4kPpRyqSFKvo.jpg',
                'https://i.loli.net/2020/09/27/RtaveiXDTLlm9CG.jpg',
                'https://i.loli.net/2020/09/27/Spi7tWgye6jGEKT.jpg',               
                'https://i.loli.net/2020/09/27/MARlCZQq1przIsV.jpg',
                'https://i.loli.net/2020/09/27/Kyuwxb13BV9SLTk.jpg'],
            picNum:0,//当前选中的图片
            picNums:0,//当前加载好的图片数量
        }       
    },
    mounted(){
        this.reSize();
        window.addEventListener('scroll',this.scrollToTop);
        const self = this;
        window.onresize = function(){
            //console.log('ok');
            self.reSize();
        };
        this.changePic(3000);
        
        this.loadPics();
    },
    methods:{
        reSize(){
            var width = document.body.clientWidth;
            var height = width/1.8;
            for(let i = 0;i<this.pics.length;i++){
                var pic = document.getElementById(this.picId(i));
                pic.style.height = height + 'px';
                //onsole.log(pic.style.height);
            }
            var cover = document.getElementById('cover');
            cover.style.height = height + 'px';
            var myPic = document.getElementById('myPic');
            myPic.style.height = height + 'px';
            var img = document.getElementById('joinUs_img');
            img.style.height = (img.width)/2.2 + 'px';
            var cover2 = document.getElementById('cover2');
            cover2.style.height = (img.width)/2.2 + 'px';
            var joinUs = document.getElementById('joinUs');
            joinUs.style.height = (img.width)/2.2 + 'px';
        },
        picId(index){
            return 'pic' + index;
        },
        loadPic(index){
            //console.log(index);
            return new Promise((resolve,reject)=>{
                
                var theId = 'pic' + index;
                var pic = document.getElementById(theId);
                pic.src = this.pics[index];
                pic.style.opacity = 0;
                console.log(pic);
                pic.onload = ()=>{
                    setTimeout(() => {
                        pic.style.opacity = 1;
                    }, 3000);
                    
                    console.log('ok');
                    this.picNums++;
                    resolve(index + 1);
                }
            })
        },
        loadPics(){
            this.loadPic(0).then((res)=>{
                console.log(res);
                return this.loadPic(res);
            }).then((res)=>{
                console.log(res);
                return this.loadPic(res);
            }).then((res)=>{
                console.log(res);
                return this.loadPic(res);
            }).then((res)=>{
                console.log(res);
                return this.loadPic(res);
            })
        },
        scrollToTop(){
            var dis = window.pageYOffset;
            //console.log(dis);
            var joinUs = document.getElementById('joinUs');
            if(dis > 4500){
                var joinUs_img = document.getElementById('joinUs_img');
                joinUs_img.src = 'https://i.loli.net/2020/09/23/jcp4N2mUZWz5eV3.jpg';
            }
            //console.log(dis);
            //this.changePic();
            if(dis > 859.5){     
                var header = document.getElementsByClassName('header'); 
                var name = header[0].getElementsByClassName('name');
                var partsName = document.getElementById('partsName');
                var logo = document.getElementById('logo');
                //console.log(logo);
                logo.src = 'https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png';
                partsName.style.color = '#0d3590'
                header[0].style.backgroundColor = 'white';               
                name[0].style.color = '#0d3590';           
            }
            else{              
                var header = document.getElementsByClassName('header');               
                var name = header[0].getElementsByClassName('name');
                var partsName = document.getElementById('partsName');
                var logo = document.getElementById('logo');
                logo.src = 'https://i.loli.net/2020/09/23/fH9ihPlvUqtZJ1Q.png';
                partsName.style.color = 'white'
                header[0].style.backgroundColor = 'transparent';
                name[0].style.color = 'white';
                //console.log(name[0]);              
            } 
        },
        changePic(interval){      
            setInterval(this.changePic2,interval);
        },
        changePic2(){
            //console.log(this);
            if(this.picNum >= this.picNums - 1){
                this.picNum = 0;
            }
            var pics = document.getElementsByClassName('pics');
            for(let i = 0;i < this.picNums;i++){
                pics[i].style.opacity = 0;
            }
            pics[this.picNum].style.opacity = 1;
            this.picNum++;
        }
    },
    components:{
        myHeader,latestNews,fields,projects,scientificResearch,joinUs,myFooter,ourTeam
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
    height:1;
    display:flex;
    flex-direction:column;
}
.pics{
    margin-top:0px;
    /* height: 1200px; */
    width:100%;
    /* border:3px solid #0d3590; */  
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
#cover{
    position:absolute;
    left:0px;
    top:0px;
    margin-top:0;
    height:1200px;
    width:100%;
    /* border:1px solid rgba(226, 12, 12);  */
    background-color:rgba(153, 158, 185, 0.6);
    z-index:4;
}
#words{
    position:absolute;
    top:45%;
    left:50%;
    margin-left:-335px;
    margin-top:-75px;
    width:600px;
    height:150px;
    font-size: 100px;
    color:white;
    text-shadow:2px 2px 2px rgb(255, 255, 255);
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
#joinUs{
    margin-top:200px;
    height: 800px;
    width:100%;
}
#footer{
   
    margin-top:100px;
    height: 270px;
    
    border:1px solid rgb(37, 199, 164); 
    background-color:#0d3590 ;
}
</style>