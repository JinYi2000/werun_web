<template>
    <div style='position:relative;'>
        <div class='header'>
            <img id='logo' src='https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png'>
            <div class ='name'>
            <span>WERUN</span>
            <br/>
            <span>C L U B</span>
            </div>
        </div>
        <div id='context'>
            <h1 style='color:#455a64;margin-bottom:100px;margin-left:195px;text-align:left;'>更多动态</h1>
            <div id="news">
                <div class='newDetail' v-for='(item,index) in newsList' >
                        <img class='news_img' :src='item.picSrc'>
                        <span class='title1'>{{item.title}}</span>
                        <div class='line'></div>
                        <span class='description'>{{item.content}}</span>
                        
                </div>
            </div>          
        </div>
        <div id='footer'>
        <myFooter></myFooter>
        </div>
    </div> 
</template>
<script>
import myHeader from '@/components/header'
import myFooter from '@/components/footer'
export default {
    data(){
        return{
            newsList:[
                {
                    title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                    picSrc:'https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'01',
                },
                
                {
                    title:'2015级刘海青和章江山同学参与的发明专利获得授权',
                    picSrc:'https://i.loli.net/2020/09/18/NcQ4zFASxibyuM9.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'02',
                },
                {
                    title:'2016级林春旭，2017级郭振豪、孙一恒同学论文被国际学术会议ICAIS接收',
                    picSrc:'https://i.loli.net/2020/09/18/ePMsrQjTFmt3yu6.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'03',
                },
                {
                    title:'2016级舒钰博同学论文发表于JCR 1区杂志 CMC-Computers Materials & Continua',
                    picSrc:'https://i.loli.net/2020/09/18/57uEnyzQJaI4HPA.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'04',
                },
                
                {
                    title:'2015级刘海青和章江山同学参与的发明专利获得授权',
                    picSrc:'https://i.loli.net/2020/09/18/NcQ4zFASxibyuM9.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'05',
                },
                {
                    title:'2016级林春旭，2017级郭振豪、孙一恒同学论文被国际学术会议ICAIS接收',
                    picSrc:'https://i.loli.net/2020/09/18/ePMsrQjTFmt3yu6.jpg',
                    content:'多模态学习多模态学习研究的是如何同时基于视频、图像、文本、语音等不同模态的数据进行学习，这类技术能让 AI 更全面地学习有关这个世界的知识，也因此被认为是 AI 发展的未来方向，在自动驾驶、机器人、医疗和数字助理等领域都有重要的应用前景。多模态学习是腾讯 AI Lab 的重点研究领域之一，也是腾讯 AI Lab 近来重点研发的数字人的核心技术，今年有 4 篇相关论文被 ECCV 2020 接收，其涵盖的主题主要是视频/图像与文本的多模态学习。1. 针对视频中时序句子定位和事件描述任务的学习模态间交互Learning Modality Interaction for Temporal Sentence Localization and Event Captioning in Videos本文为 ECCV 2020 Spotlight 论文，由腾讯 AI Lab 与复旦大学合作完成，提出了一种用于描述并定位视频事件的视频-文本多模态学习新方法。自动生成描述事件的句子并在视频中定位句子的位置这两个重要任务连接了语言和视频两大领域。近期的技术多通过使用现成的视频特征来利用视频的多模态本质，但却很少探讨模态之间的交互。受人脑中存在跨模态交互这一事实的启发，本文提出了一种学习成对模态交互的新方法，以便更好地利用视频中每对模态的互补信息，从而改善两项任务的性能。研究者以成对方式在序列和通道级别上对模态交互进行建模，并且成对交互还为目标任务的预测提供了一些可解释性。研究者还进行了广泛的控制变量实验，结果表明新提出的方法是有效的，特定的设计选择也在其中得到了验证。',
                    id:'06',
                },
                
                
            ]
        }
    },
    methods:{
        viewDetail(id){
            this.$router.push('newsDetail'+id+'');
        },
        
    },
    mounted(){
            
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>
.newDetail{
    margin-left:5px;
    height:300px;
    width:98%;
    border:2px solid rgb(238, 243, 251);
    background-color: rgb(255, 255, 255);
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.1s linear;
}
.newDetail:hover{
    box-shadow:5px 5px 10px  rgb(235, 235, 235);
}
.news_img{
    width:120px;
    height:160px;
    border-radius: 5px;
    float:left;
    margin-top:100px;
    margin-left: 90px;
}
.title1{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    width:60%;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    margin-top:30px;
}
.description{
    position:absolute;
    left:250px;
    height:150px;
    font-size: 16px;
    margin-top:100px;
    margin-right:120px;
    color:grey;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
}
#news{
    margin:0 195px;
    position:relative;
    height:100%;
    overflow: auto;
}
#context{
    margin:auto;
    /* border:2px solid red; */
    flex:1 1 auto;
    margin-top:150px;
    
}

.header{
    height: 130px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
#logo{
    margin-top:40px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:195px;
}
.name{
    float:left;
    margin-top:45px;
    margin-left:20px;
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}
#context{
    height:100%;
}
#footer{
    margin-top:200px;
    height: 270px;  
    background-color:#0d3590 ;
}
.line{
    position:absolute;
    margin-top:85px;
    width:90%;
    margin-left: 5%;
    border-top:2px solid #0d3590;
}
</style>