import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/login',
            component:re => require(['../components/main/common/Login.vue'],re)
        },
        {
            path:'/',
            redirect:'/main'
        },
        {
            meta:'start',
            path:'/',
            component:re => require(['../components/main/common/Home.vue'],re),
            children:[
                {
                    path:'/main',
                    component:re => require(['../components/main/First.vue'],re),
                    meta:'首页',icon:'el-icon-switch-button'
                },
                {
                    meta:'税务功能',
                    icon:'el-icon-money',
                    path:'/tax_manage',
                    component:re => require(['../components/main/Tax_manage.vue'],re),
                    children:[
                        {
                            meta:'税务计算',
                            icon:'el-icon-coin',
                            path:'/tax_compute',
                            component:re => require(['../components/main/func/tax_compute.vue'],re),
                        }
                    ]
                },
                {
                    meta:'新功能',
                    icon:'el-icon-circle-plus-outline',
                    path:'/new_function',
                    component:re => require(['../components/main/New_func.vue'],re)
                },
            ]
        }
    ]
})