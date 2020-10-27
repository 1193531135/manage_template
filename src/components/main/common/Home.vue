<template>
    <div class="main">
        <dialogs></dialogs>
        <headers :btnshow="showlistbtn" @clickbtn="showlist"></headers>
        <div class="swicth_home_1"></div>
        <div class="body">
            <div class="list" :style="'min-height:'+hei+'px;'+`${showlistbtn?'left:0px;':''}`">
                <list @clickbtn="showlistbtn = false"></list>
            </div>
            <div class="vertical_wall"></div>
            <div class="nowpage">
                <tabs class="tabs"></tabs>
                <div class="con" :style="'height:'+(hei-96)+'px'">
                    <router-view />
                </div>
                <div class="movecon" :style="'height:'+hei+'px'" @click="showlistbtn = false">
                    <router-view />
                </div>
            </div>
            <div style="float:none;clear:both"></div>
        </div>
    </div>
</template>

<script>
import headers from "./Header.vue";
import list from "./List.vue";
import tabs from "./Tabs.vue";
import dialogs from '../MoveDialog'
export default {
    name: "Home",
    components: { headers,list,tabs,dialogs },
    data(){
        return{
            hei:null,
            showlistbtn:false,
        }
    },
    methods:{
        showlist(){
            this.showlistbtn = !this.showlistbtn
        }
    },
    created(){
        this.hei = this.$store.state.hei-80   //get page height
        if(this.$store.state.wid < 769){
            this.hei = this.$store.state.hei-(this.$store.state.wid/20*3.4)
        }
        let path = this.$route.path
        this.$store.state.allDom.some(item => {
            if(item.path === path){
                this.$store.commit('modifyData',{name:'showDom',newdata:[item]})
                return true
            }
        })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width:769px){
    .body{
        min-width: 0 !important;
    }
    .swicth_home_1{
        height: 0.4rem !important;
    }
    .list{
        width: 80% !important;
        position: absolute;
        left: -80%;
        transition:left 0.3s;
    }
    .tabs{display: none;}
    .vertical_wall{display: none;}
    .nowpage{
        width: 100% !important;
        min-width: 0 !important;
    }
    .con{display: none;}
    .movecon{display: block !important;}
}
.swicth_home_1{
height:15px;width:100%
}
.body{min-width: 1524px;position: relative;}
.body > div{
    float: left;
}
.main{
    background-color: rgb(238,238,238);
}
.vertical_wall{
    width: 0.7%;
    height: 500px;
    min-width: 15px;
}
.list{
    width: 11%;
    background-color: rgb(233,238,241);
}
.nowpage{
    width: 85%;
    box-sizing: border-box;
    min-width: 1300px;
    overflow-y: auto;
}
.con{
    background-color: rgb(242,244,246);
    overflow: auto;
}
.movecon{
    display: none;
    overflow: auto;
}
</style>
