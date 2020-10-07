import axios from 'axios'

class axiosRequest{
    constructor(url,data,func){
        this.url = url;
        this.data = data;
        this.func = func;

    }
    returnRes(res){
        console.log('ok');
        console.log(res);
        console.log('ok');
        return res;
    }
    get(){
        var resUrl = this.url + '?';
        for(var p in this.data){
            resUrl+p+'='+this.data[p]+'&';
        }
        resUrl.slice(0,resUrl.length);
        const self = this;
        axios.get(resUrl).then(res=>{
            this.func(res.data.data);
        })
    }
    post(){
        var resUrl = this.url;
        var resData = JSON.stringify(data);
        axios.post(resUrl,resData).then(res=>{
            returnRes(res.data);
        })
    }
    
} 

export default axiosRequest;