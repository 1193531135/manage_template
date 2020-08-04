<template>
    <div class="main">
        <headers></headers>
        <div style="height:15px;width:100%"></div>
        <div class="body">
            <div class="list" :style="'min-height:'+hei+'px'">
                <list></list>
            </div>
            <div class="vertical_wall"></div>
            <div class="nowpage">
                <tabs></tabs>
                <div class="con" :style="'min-height:'+(hei-96)+'px'">
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
export default {
    name: "Home",
    components: { headers,list,tabs },
    data(){
        return{
            hei:null
        }
    },
    created(){
        this.hei = document.documentElement.clientHeight-80   //get page height

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
.body{min-width: 1524px;}
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
    min-width: 200px;
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
}
</style>
