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
                'https://i.loli.net/2020/09/18/NjPhxZG7mYElct1.jpg',
                'https://i.loli.net/2020/09/18/83UTGFNXZAqI4fj.jpg',
                'https://i.loli.net/2020/09/18/kiNqcVYyZlTdvRC.jpg',
                'https://i.loli.net/2020/09/18/JGKym8zxdevYuj5.jpg'],
            picNum:0,//当前选中的图片
            picNums:0,//当前加载好的图片数量
        }       
    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop);
        this.changePic(3000);
        
        this.loadPics();
    },
    methods:{
        picId(index){
            return 'pic' + index;
        },
        loadPic(index){
            //console.log(index);
            return new Promise((resolve,reject)=>{
                var theId = 'pic' + index;
                var pic = document.getElementById(theId);
                pic.src = this.pics[index - 1];
                console.log(pic);
                pic.onload = ()=>{
                    this.picNums++;
                    console.log('ok');
                    resolve(index + 1);
                }
            })
        },
        loadPics(){
            this.loadPic(1).then((res)=>{
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
            /* var pics = new Promise((resolve,reject)=>{
                console.log(this.getPic(1).complete);
                if(this.getPic(1).complete == 0){
                    //console.log('ok');
                    this.picNums ++;
                    //console.log('ok');
                    resolve(1);
                }
            })
            pics.then((res)=>{
                console.log(res);
                while(this.getPic(2).complete === true){
                    this.picNums ++;
                    resolve(2);
                }
            }).then((res)=>{
                console.log(res);
                while(this.getPic(3).complete === true){
                    this.picNums ++;
                    resolve(3);
                }
            }).then((res)=>{
                console.log(res);
                while(this.getPic(4).complete === true){
                    this.picNums ++;
                    resolve(4);
                }
            }).then(res=>{
                console.log(res);
                while(this.getPic(5).complete === true){
                    this.picNums ++;
                    resolve(5);
                }
            })
        },
        scrollToTop(){
            var dis = window.pageYOffset;
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
            } */
        },
        changePic(interval){      
            setInterval(this.changePic2,interval);
        },
        changePic2(){
            //console.log(this);
            if(this.picNum >= this.picNums){
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
    display:flex;
    flex-direction:column;
}
.pics{
    margin-top:0px;
    height: 1200px;
    width:100%;
    /* border:3px solid #0d3590; */  
    position: absolute;
    transition:1s;
}

.pics img{
    width:100%;
    height:100%;
}
#myPic{
    margin-top:-70px;
    height: 1100px;
    width:100%;
    /* border:3px solid rgb(2, 78, 40); */
}
#pic{ 
    transition: all 1s linear;
}
#cover{
    margin-top:-1100px;
    height: 1200px;
    width:101%;
    /* border:1px solid rgba(226, 12, 12);  */
    background-color:rgba(153, 158, 185, 0.6);
    z-index:4;
}
#words{
    position:absolute;
    top:450px;
    left:50%;
    margin-left:-335px;
    margin-top:0px;
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