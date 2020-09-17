<template>
<div id='content'>
    <div class='header'>
        <myHeader></myHeader>
    </div>
    <div id='pics'>
        <img src='@/assets/img/pic1.jpg'>
    </div>
    <div id='cover'>
        <span id='words'>Your world, we run</span>
    </div>
    <div id='news'>
    </div>
    <div id='fields'>
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
export default {
    data(){

    },
    mounted(){
        window.addEventListener('scroll',this.scrollToTop)
    },
    methods:{
        scrollToTop(){
            var dis = window.pageYOffset;
            console.log(dis);
            
            if(dis > 859.5){     
                var header = document.getElementsByClassName('header'); 
                var name = header[0].getElementsByClassName('name');
                console.log(name[0]);
                header[0].style.backgroundColor = 'white';
                
                name[0].style.color = '#0d47a1';
                
                
                
            }
            else{              
                var header = document.getElementsByClassName('header'); 
                header.style.opacity = '0.5';
                var name = header[0].getElementsByClassName('name');
                header[0].style.removeProperty('backgroundColor');
                name[0].style.color = 'white';
                console.log(name[0]);  
               
            }
        }
    },
    components:{
        myHeader
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
    z-index:5
}
.header2{
    height: 170px;
    width:100%;
    border:1px solid rgb(182, 51, 123);
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
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
#cover{
    margin-top:-1170px;
    height: 1100px;
    width:100%;
    border:1px solid rgb(226, 12, 12); 
    background-color: #0d47a1;
    opacity:0.5
}
#words{
    position:absolute;
    top:30%;
    left:50%;
    margin-left:-300px;
    margin-top:-25px;
    width:600px;
    height:150px;
    font-size: 100px;
    color:#eceff1;
    opacity: 1 !important;
}
#words span{
    opacity: 1 !important;
}
#news{
    height: 500px;
    width:100%;
    border:1px solid rgb(228, 191, 28); 
}
#fields{
    height: 500px;
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