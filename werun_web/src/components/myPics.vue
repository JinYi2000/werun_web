<template>
    <div>
        <div class='pics' v-for="(item,index) in pics" :key='index'>
            <img class='pic'  :id="`pic${index}`"  >
        </div>
        <div id='cover'>
            <span id='words'>Your world, we run</span>
        </div>
    </div>
</template>
<script>
import myMixin from './reSIzeMixin'

export default {
    data(){
        return{
            pics:[],
            picNum:0,//当前选中的图片
            loadedPicNums:0,//当前加载好的图片数量
        }
    },
    mounted(){
        this.requestPics()
    },
    mixins:[myMixin],
    methods:{
        requestPics(){//请求轮播图
            const self = this
            var req = async function(){//async/await异步
                var res = await self.$axios.get('https://club.werun.top:8888/homepage/rotationChart/listRotationChart')
                self.pics = res.data.data
                console.log('this.pics',self.pics)
                self.changePic(5000)
                self.$nextTick(self.loadPics)
            }
            req()
        },
        changePic(interval){      
            if(!this.timeInterval){
                this.timeInterval = setInterval(this.changePicOpacity,interval);
            }    
        },
        changePicOpacity(){//轮播图切换(更改透明度)
            if(this.picNum >= this.loadedPicNums){
                this.picNum = 0;
            }
            var pics = document.getElementsByClassName('pic');
            for(let i = 0;i < this.pics.length;i++){
                pics[i].style.opacity = 0;
            }
            pics[this.picNum].style.opacity = 1;
            this.picNum++;
        },
        loadPic(index){//加载单张图片
            return new Promise((resolve,reject)=>{ 
                var theId = 'pic' + index;
                var myPics = (document.getElementsByClassName('pic'));
                var pic = myPics[index];
                pic.style.opacity = 0;//完全加载完成之后再展示出来
                pic.src = this.pics[index].picUrl;
                var self = this;
                pic.onload = ()=>{
                    self.reSize();
                    this.loadedPicNums++;
                    resolve(index + 1);
                }
            })
        },
        loadPics(){
            const self = this
            var asyncLoadPics = async function(){
                var pic
                for(let i = 0;i < self.pics.length;i++){
                    pic = await self.loadPic(i)
                }
            }
            asyncLoadPics()
        },
    },
    beforeDestroy(){
        clearInterval(this.timeInterval)//组件销毁之前 清除定时器
    }
}
</script>
<style scoped>
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
#cover{
    position:absolute;
    left:0px;
    top:0px;
    margin-top:0;
    height:1200px;
    width:100%;

    background-color:rgba(153, 158, 185, 0.6);
    z-index:4;
}
</style>