<template>
<div id='content'>
    <div class='header'>
        <myHeader></myHeader>
    </div>
    <div id='pics'>
        <img id='pic' src='@/assets/img/pic1.jpg'>
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
    </div>
    <div id='joinUs'>
    </div>
    <div id='footer'>
    </div>
</div>
</template>
<script>
import myHeader from '@/components/header'
import latestNews from '@/components/news'
import fields from '@/components/fields'
export default {
    data(){
        return{
            pics:['https://i.loli.net/2020/09/18/Nhb4kPpRyqSFKvo.jpg',
                'https://i.loli.net/2020/09/18/NjPhxZG7mYElct1.jpg',
                'https://i.loli.net/2020/09/18/83UTGFNXZAqI4fj.jpg',
                'https://i.loli.net/2020/09/18/kiNqcVYyZlTdvRC.jpg',
                'https://i.loli.net/2020/09/18/JGKym8zxdevYuj5.jpg'],
            picNum:0,
        }
            
    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop);
        //this.changePic(1000);
    },
    methods:{
        scrollToTop(){
            var dis = window.pageYOffset;
            //console.log(dis);
            //this.changePic();
            if(dis > 859.5){     
                var header = document.getElementsByClassName('header'); 
                var name = header[0].getElementsByClassName('name');
                //console.log(name[0]);
                header[0].style.backgroundColor = 'white';               
                name[0].style.color = '#0d47a1';           
            }
            else{              
                var header = document.getElementsByClassName('header');               
                var name = header[0].getElementsByClassName('name');
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
            if(this.picNum >= this.pics.length){
                this.picNum = 0;
            }
            var pic = document.getElementById('pic');
            console.log(this.picNum);
            console.log(this.pics[this.picNum])
            pic.src = this.pics[this.picNum];
            this.picNum++;
        }
    },
    components:{
        myHeader,latestNews,fields
    }
}
</script>
<style scoped>
.header{
    height: 170px;
    width:100%;
    border:1px solid rgb(182, 51, 123);
    position:fixed;
    top:0px;
    z-index:5;
    transition: background-color 0.5s linear

}
.header2{
    height: 170px;
    width:100%;
    border:1px solid rgb(182, 51, 123);
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
#pics{
    margin-top:-70px;
    height: 1100px;
    width:100%;
    border:3px solid rgb(47, 20, 202);  
}
#pics img{
    width:100%;
    height:1038px;
}
#pic{
    transition: all 0.5s linear;
}
#cover{
    margin-top:-1170px;
    height: 1100px;
    width:100%;
    border:1px solid rgba(226, 12, 12); 
    background-color: rgba(13,71,161,0.6);
}
#words{
    position:absolute;
    top:30%;
    left:50%;
    margin-left:-345px;
    margin-top:-65px;
    width:690px;
    height:150px;
    font-size: 130px;
    color:white;
    
}
#words span{
    opacity: 1 !important;
}
#news{
    position:relative;
    height: 1200px;
    width:100%;
    border:1px solid rgb(228, 191, 28); 
}
#fields{
    height: 1200px;
    width:100%;
    border:1px solid rgb(184, 41, 60); 
}
#projects{
    height: 500px;
    width:100%;
    border:1px solid rgb(102, 211, 130); 
}
#joinUs{
    height: 500px;
    width:100%;
    border:1px solid rgb(95, 128, 219); 
}
#footer{
    height: 300px;
    width:100%;
    border:1px solid rgb(37, 199, 164); 
}
</style>