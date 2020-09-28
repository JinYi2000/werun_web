export function debounce(fn,wait){
//防抖 在一段时间之内再次下达该命令，则只执行新命令
//取消还未开始的操作
    let timer = null;
    return function(){
        if(timer){
        clearTimeout(timer);
        } 
        timer = setTimeout(()=>{
            fn.call(this);
        },wait);
    }
    
}

export function throttle(fn,gapTime){
//在一段时间内有大量操作，只执行其中一次
    let lastTime = null;
    let nowTime = null;
    nowTime = Date.now();
    if(!lastTime || nowTime - lastTime > gapTime){
        fn();
        lastTime = nowTime;
    }
}










