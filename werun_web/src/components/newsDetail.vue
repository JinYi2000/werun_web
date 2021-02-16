<template>
    <div style='position:relative;'>
        <myHeader></myHeader>
        <article id='article'>
            <h1>{{data.title}}</h1>
            <img id='article_img' src='https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg'>
            <article id='context'>
                {{data.context}}
            </article>
        </article>
        <div id='footer'>
        <myFooter></myFooter>
        </div>
    </div> 
</template>
<script>
import myHeader from '@/components/headDetail'
import myFooter from '@/components/footer'
export default {
    data(){
        return{
            data:{
                title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                context:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。'
            }
        }
    },
    methods:{
        
        
    },
    mounted(){
            
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>
h1{
    margin-top:150px;
    font-size: 45px;
}
#article_img{
    width:300px;
    
}
#article{
    margin:195px;
}
#context{
    margin-top:100px;
    font-size: 25px;
    line-height: 60px;
    text-align: left;
}
.header{
    height: 170px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
#logo{
    margin-top:70px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:195px;
}
.name{
    float:left;
    margin-top:67px;
    margin-left:20px;
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}
#article{
    margin-top:170px;
}
#footer{
    
    height: 270px;  
    background-color:#0d3590 ;
    
}
</style>