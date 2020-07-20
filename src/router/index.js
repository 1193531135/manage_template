import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/main'
        },
        {
            path:'/',
            component:re => require(['../components/main/Main.vue'],re),
            children:[
                {
                }
            ]
        }
    ]
})