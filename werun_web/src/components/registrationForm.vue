<template>
    <div style='position:relative;'>
        <div class='header'>
            <img id='logoDetail' src='https://i.loli.net/2020/09/23/O9CUbHKVoPci7q3.png'>
            <div class ='name'>
            <span>JOIN</span>
            <br/>
            <span>U S </span>
            </div>
            <!-- <img id='logo2' src='https://i.loli.net/2020/12/09/UGPRdMivHXzpLmk.png'> -->
            
        </div>
        <div id='context'>
            <h1 style='color:#0d3590;margin-bottom:100px;margin-left:10%;text-align:left;'>您的信息</h1>
            <div id="news">
                <div class='inputs'>
                    姓名：<el-input class='info' v-model="input.realname" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    学号：<el-input class='info' v-model="input.num" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    手机：<el-input class='info' v-model="input.mobile" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    邮箱：<el-input class='info' v-model="input.email" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    专业：<el-input class='info' v-model="input.major" placeholder="请输入内容"></el-input>
                </div>
                <div class='inputs'>
                    QQ：<el-input class='info' v-model="input.qnum" placeholder="请输入内容"></el-input>
                </div>
                <br/>
                <div class='inputs'>
                    性别：<el-select class='info' v-model="input.sex" placeholder="请选择">
                        <el-option
                            v-for="item in sexs"
                            :key="item.id"
                            :label='item.label'
                            :value='item.label'
                        ></el-option>
                    </el-select>
                </div>
                <div class='inputs'>
                    方向：<el-select class='info' v-model="input.drc" placeholder="请选择">
                        <el-option
                            v-for="item in drcs"
                            :key="item.id"
                            :label='item.label'
                            :value='item.label'
                        ></el-option>
                    </el-select>
                </div>
                <div class='textareas'>
                    <span>请说一下来到实验室的目的：</span><el-input type='textarea' :rows="5" class='textarea' v-model="input.aim" placeholder="请输入内容"></el-input>
                </div>
                <div class='textareas'>
                    <span>你的闪光点（项目、获奖经历）：</span><br/><el-input type='textarea' :rows="5" class='textarea' v-model="input.exp" placeholder="请输入内容"></el-input>
                </div>
                <div class='textareas'>
                    <span>你每天可以在实验室投入多少时间：</span><br/><el-input type='textarea' :rows="5" class='textarea' v-model="input.wtime" placeholder="请输入内容"></el-input>
                </div>
                
                
            </div>  
            <div id='button' @click='submit()'>提交</div>       
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
            input:{
                num:'',
                mobile:'',
                email:'',
                qnum:'',
                major:'',
                drc:'',
                sex:'',
                realname:'',
                aim:'',
                exp:'',
                wtime:''
            },
            sexs:[{id:1,label:'男'},{id:2,label:'女'}],
            drcs:[{id:1,label:'前端'},{id:2,label:'后端'},{id:4,label:'安卓'},{id:3,label:'小程序'},],
        }
    },
    mounted(){
       
    },
    methods:{
        viewDetail(id){
            this.$router.push('newsDetail'+id+'');
        },
        setNotice(words = '提交'){
            var button = document.getElementById('button')
            button.innerText = words;
        },
        submit(){
            //console.log(JSON.stringify(this.input))
            for(var i in this.input){
                if(!this.input[i]){
                    this.setNotice('请填写完整哟');
                    //setTimeout(this.setNotice('提交'),5000)
                    setTimeout(this.setNotice,5000)
                    return 0;
                }
            }
            this.setNotice('提交中');
            var myData = JSON.stringify(this.input);
            this.$axios.post('https://club.werun.top:8888/homepage/chart/submit',myData,{headers: {'Content-Type': 'application/json'}}).then(res=>{
                //console.log(myData)
                console.log('res:');
                console.log(res)
                if(res.data.data === '提交成功'){
                    this.setNotice('提交成功');
                    setTimeout(this.setNotice,5000)
                }
                this.input = {
                num:'',
                mobile:'',
                email:'',
                qnum:'',
                major:'',
                drc:'',
                sex:'',
                realname:'',
                aim:'',
                exp:'',
                wtime:''
            }
            })
        }
    },
    mounted(){
            
    },
    components:{
        myHeader,myFooter
    }
}
</script>
<style scoped>

.header{
    height: 130px;
    width:100%;
    position:fixed;
    top:0px;
    z-index:5;
    background-color: white;
    transition: background-color 0.5s linear
}
#logoDetail{
    margin-top:42px;
    width:50px;
    height:50px;
    float:left; 
    margin-left:10%;
}
#logo2{
    margin-top:37px;
    width:60px;
    height:60px;
    float:left; 
    margin-left:2%;
}
.name{
    float:left;
    margin-top:43px;
    margin-left:20px;
    color:#0d3590;
    font-size:20px;
    font-weight: bold;;
}
.textareas{
   height:0px;
   /*  margin-bottom:60px;
    width:99%;
    position: relative; */
}
.textareas span{
    float:left;
    display: inline-block;
    font-weight: bold;
    font-size:20px;
}
.el-textarea{
    float:left;
    text-align: left;
    width:90%;
    margin-bottom:30px;
}
#button{  
    left:45%;
    position:absolute;
    line-height:70px;
    height:70px;
    width:250px;
    font-size:35px;
    border:3px solid #0d3590;
    border-radius:20px;
    color:#0d3590;
    transition:0.5s;
    margin-left:-110px;
}
#button:hover{
    color:white;
    background-color: #0d3590;
    width:500px;
    
    position:absolute;
    line-height:70px;
    height:70px;
    width:250px;
    font-size:35px;
   
    border-radius:20px;
    font-weight:bold;
}

.el-input{
     display: inline-block;
     width:80%
 }
 .el-select{
     width:80%
 }
 #news{
    margin:0 10%;
    position:relative;
   
    overflow: auto;
}
@media screen and (min-width:800px){
#context{
    margin-top:150px;
    
}

.inputs{
   
    margin-left:0px; 
    display: inline-block;
    width:40%;
    margin-bottom:50px;
    margin-right:9%;
    float:left;
    text-align: left;
    font-weight: bold;
    font-size:20px;
}
}
@media screen and (max-device-width:800px){
#context{
    margin-top:150px;
}

.inputs{
    
    margin-left:0px; 
    display: inline-block;
    width:90%;
    margin-bottom:50px;
    margin-right:9%;
    float:left;
    text-align: left;
    font-weight: bold;
    font-size:20px;
}
}
footer{   
    height: 270px;  
    background-color:#0d3590 ;
   
    top:1500px;
    position:absolute;
    width:500px;
   
    z-index: 5;
}
.line{
    position:absolute;
    margin-top:85px;
    width:90%;
    margin-left: 5%;
   
}
#notice{
    position:relative;
    color:red;
}
</style>