<template>
    <div>
        <div class="conta" :style="'height:'+hei+'px'">
            <div class="conta2">
                <div class="header">后台管理系统</div>
                <div class="input">
                    <input placeholder="账号" v-model="account"/>
                </div>
                <div class="input">
                    <input  placeholder="密码" v-model="password" type="password"/>
                </div>
                <el-button class="btn" type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hei:null,
            account:null,
            password:null
        }
    },
    methods:{
        login(){
            //一段请求
            setTimeout(() => {
                //成功后把回调token存入store
                let token = 123
                this.$store.commit('modifyData',{name:'token',newdata:token})
                //需要页面缓存的调用该函数
                this.localDown(token)
                //token在store中存在的时候，可以跳转到主页面
                this.$router.push('/')
            },800)
        },
        localDown(token){
            sessionStorage.setItem('token',token)
        }
    },
    created(){
        this.hei = document.documentElement.clientHeight
    }
}
</script>
<style scoped>
.conta{
    background-color: rgba(50,65,87);
    height: 500px;
    width: 100%;
}
.conta2{
    width: 380px;
    height: 240px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -190px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 40px 0;
}
.header{
    position: absolute;
    top: -80px;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 30px;
}
.input{
    width: 80%;
    margin: auto;
    height: 35px;
    margin-bottom: 20px;
}
.input input{
    width: 100%;
    height: 33px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
    padding: 0 15px;
}
.input input:focus{
    border: 1px solid rgb(102,177,255) !important;
}
.input input:hover{
    border-color: rgba(0,0,0,0.3);
}
.input input::-webkit-input-placeholder{color: rgba(0,0,0,0.2);}
.btn{
    width: 80%;
    height: 37px;
    color: white;
}
</style>