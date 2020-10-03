var request = new XMLHttpRequest();
request.open('GET','http://club.werun.top/homepage/rotationChart/listRotationChart')
request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        console.log('请求完成');
        console.log(request.response.status);
    }
}
request.send();