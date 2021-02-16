import {debounce,throttle} from './debounce_throttle'

var mixin = {
    mounted(){
        const self = this;
        self.reSize();
        window.onresize = function(){
            debounce(self.reSize,100)()
            // self.reSize()
        };
    },
    methods:{
        reSize(){//修改图片宽度
            console.log('mixin!!!!!')
            var width = document.body.clientWidth;
            var height = width/1.8;
            this.picHeight = height;
            var setHeight = (el,hei) => {
                var ele = document.getElementById(el)
                ele.style.height = hei + 'px';
            }
            var len = document.getElementsByClassName('pic').length
            for(let i = 0;i<len;i++){//调整图片高度
                setHeight(`pic${i}`,height);       
            }  
            setHeight('cover',height);
            setHeight('myPic',height);
            var imgHeight = (document.getElementById('joinUs_img').width)/2.2
            setHeight('joinUs_img',imgHeight);
            setHeight('cover2',imgHeight);
            setHeight('joinUs',imgHeight);
        },
    }
}

export default mixin