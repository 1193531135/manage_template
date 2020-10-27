import Vue from 'vue'
import Vuex from 'vuex'
import { diologData } from './base'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state:{
        token:null,                //存放token
        defineNowPath:'/main',    //基础页面路由
        nowPath:'/tax_compute',          //当前页面路由
        showDom:[],         //给Tab的数据
        allDom:[],    //全部的dom
        wid:null,      //页面宽度
        hei:null,      //页面高度

        moveDialogState:diologData  //dialog数据
    },
    mutations:{
        modifyData(state,data){
            state[data.name] = data.newdata
        },
        watchForMD(state,data){
            if(data.constructor === Array){
                state.moveDialogState[data[0]] = data[1]
            }
            state.moveDialogState[data.name] = data.newdata
        },
        showDomConfig(state,obj){
            if(obj['type'] === 'add'){
                state.showDom.push(obj.data)
            }
        }
    }    
})