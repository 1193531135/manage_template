<template>
    <div>
        <div class="con" @mouseout="HiddenList">
            <!-- 侧边栏的移动竖线 -->
            <div class="lie_line" ref="lie_line"></div>
            <!-- 侧边栏主体 -->
            <el-menu :default-active="nowPath" @select="cutPage" background-color="#E9EEF1">
                <div
                    v-for="(item,index) in listdom"
                    :key="index"
                    @mouseover="changeListStyle"
                    class="kuai"
                >
                    <el-menu-item v-if="!item.children" :index="item.path">
                        <i :class="[item.icon,'icon1']"></i>
                        <span slot="title">{{ item.meta }}</span>
                    </el-menu-item>
                    <!-- 有子元素 -->
                    <el-submenu v-else :index="item.path">
                        <template slot="title">
                            <i :class="[item.icon,'icon1']"></i>
                            <span>{{ item.meta }}</span>
                        </template>
                        <el-menu-item-group v-for="(item2,index2) in item.children" :key="index2">
                            <el-menu-item :index="item2.path">
                                <i :class="[item2.icon,'icon1']"></i>
                                <span>{{ item2.meta }}</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </el-menu>
        </div>
    </div>
</template>
<script>
import single from "../../../single";
export default {
    data() {
        return {
            listdom: [],
            listLineHeight: null,
        };
    },
    methods: {
        cutPage(e) {
            single.cutPage(e);
        },
        changeListStyle(e) {
            let classList = e.path[0].classList;
            for (let i = 0; i < classList.length; i++) {
                if (
                    classList[i] === "el-menu-item" ||
                    classList[i] === "el-submenu__title"
                ) {
                    let dom = e.path[0].getBoundingClientRect();
                    this.$refs["lie_line"].style.top = dom.top - 80 + "px";
                    this.$refs["lie_line"].style.height = dom.height + "px";
                }
            }
        },
        HiddenList(e) {
            let classList = e.fromElement.classList
            for(let i = 0; i < classList.length ;i++){
                if(
                    e.relatedTarget.classList.value != 'lie_line'&&   //阻止滑动竖线冒泡
                    e.relatedTarget.localName != 'span'&&            //阻止文字冒泡
                    e.relatedTarget.localName != 'i'&&               //阻止icon冒泡
                    e.relatedTarget.localName != 'ui'&&              //阻止整个导航栏冒泡
                    e.relatedTarget.localName != 'li'&&              //阻止其他li标签冒泡
                    (classList[i] === 'el-submenu__title' || classList[i] === 'el-menu-item')
                ){
                    let h = e.fromElement.getBoundingClientRect().height
                    this.$refs["lie_line"].style.height = 0 + "px";
                    this.$refs["lie_line"].style.top = parseInt(this.$refs["lie_line"].style.top) + h/2 + 'px';
                }
            }
        },
    },
    computed: {
        nowPath: {
            get() {
                return this.$store.state.nowPath;
            },
            set(newdata) {
                this.$store.commit("modifyData", { name: "nowPath", newdata });
            },
        },
    },
    created() {
        this.nowPath = this.$route.path;
        this.listdom = single.getRouterName(this.$router);
    },
    mounted() {},
};
</script>

<style scoped>
.lie_line {
    width: 5px;
    background-color: #3b8cff;
    position: absolute;
    height: 56px;
    left: 0;
    top: 0;
    z-index: 100;
    transition: all 0.2s;
}
.con {
    width: 100%;
    position: relative;
}
.con >>> .el-menu-item {
    text-align: left;
}
.con >>> .el-menu-item:hover,
.con >>> .el-submenu__title:hover {
    color: white !important;
}
.con >>> .el-submenu__title {
    text-align: left;
}
.con >>> .el-menu-item-group__title {
    padding: 0;
}
.kuai:hover {
    color: white;
}
.icon1 {
    color: inherit !important;
}
.is-active {
    background-color: rgb(210, 214, 217) !important;
}
</style>