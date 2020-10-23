<template>
<div id='content' >
    <div class='header'>
        <myHeader></myHeader>
    </div>
    <div id='myPic'>
    <div class='pics' v-for="(item,index) in pics">
        <img class='pic' :id="picId(index)" >
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
import {debounce,throttle} from './debounce_throttle'
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
            picHeight:0,
            timeInterval:0
        }       
    },
    mounted(){
        console.log('mounted');
        var res = new this.request('/project/listProject','',this.consoleData);
        res.get();
        this.reSize();
        var scrollTro = this.scroll_throttle();
        window.addEventListener('scroll',scrollTro);
        const self = this;
        var sizeChanged = this.debounce_reSize();
        window.onresize = function(){
            sizeChanged();
        };
        this.loadPics();
        this.changePic(3000);       
        
    },
    methods:{
        consoleData(data){
            //console.log(data);
            //console.log(this.pics);
            /* this.pics = data;
             */
        },
        debounce_reSize(){
            var timer = null;
            const self = this;
            return function(){
                if(timer){
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                self.reSize(); 
                }, 500);
            }  
        },
        reSize(){
            //console.log('ok');
            var width = document.body.clientWidth;
            var height = width/1.8;
            this.picHeight = height;
            //console.log(this.picHeight);
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
            let WIDTH = 1440;
            //document.documentElement.style.fontSize = (100*document.body.clientWidth)/WIDTH + 'px';
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
                /* console.log(pic); */
                pic.onload = ()=>{
                    /* setTimeout(() => {
                        pic.style.opacity = 1;
                        
                    }, 300); */
                    
                    //console.log('ok');
                    //console.log('pic loaded'+index);
                    this.picNums++;
                    resolve(index + 1);
                }
            })
        },
        loadPics(){
            this.loadPic(0).then((res)=>{
                
                return this.loadPic(res);
            }).then((res)=>{
                
                return this.loadPic(res);
            }).then((res)=>{
               
                return this.loadPic(res);
            }).then((res)=>{
               
                return this.loadPic(res);
            })
        },
        ifShow(){
            var url = window.location.hash;
            //console.log(url);
            if(url == '#/'){
                return true;
            }
            else{
                return false;
            }
        },
        scroll_throttle(){
            var lastTime = null;
            const self = this;
            return function(){
                var thisTime = Date.now();
                //console.log(thisTime);
                if(!lastTime || thisTime - lastTime > 700){
                    lastTime = thisTime;
                    if(self.ifShow()){
                        self.scrollToTop();
                        setTimeout(self.scrollToTop,500);
                    }
                    
                }
            }
        },
        scrollToTop(){
            //console.log('throttle');
            var dis = window.pageYOffset;
            //console.log(dis);
            var joinUs = document.getElementById('joinUs');
            if(dis > 4500){
                var joinUs_img = document.getElementById('joinUs_img');
                joinUs_img.src = 'https://i.loli.net/2020/09/23/jcp4N2mUZWz5eV3.jpg';
            }
            //console.log(dis);
            //this.changePic();
            if(dis > this.picHeight){     
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
            //console.log(window.timeInterval);
            if(!window.timeInterval){
                //console.log('triggered0');
                window.timeInterval = setInterval(this.changePic2,interval);
                //console.log(this.timeInterval);
            }    
        },
        changePic2(){
            console.log('triggered');
            //console.log(this);
            if(this.picNum >= this.picNums){
                this.picNum = 0;
            }
            var pics = document.getElementsByClassName('pic');
            for(let i = 0;i < this.picNums;i++){
                pics[i].style.opacity = 0;
            }
            pics[this.picNum].style.opacity = 1;
            //console.log(pics[this.picNum]);
            //console.log('opacity'+pics[this.picNum].style.opacity)
            //console.log('picNum'+this.picNum);
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