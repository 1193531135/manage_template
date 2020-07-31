<template>
    <div>
        <div class="con">
            <el-menu :default-active="nowPath" @select="cutPage" background-color="#E9EEF1">
                <div v-for="(item,index) in listdom" :key="index">
                    <el-menu-item v-if="!item.children" :index="item.path">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.meta }}</span>
                    </el-menu-item>
                    <!-- 有子元素 -->
                    <el-submenu v-else :index="item.path">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.meta }}</span>
                        </template>
                        <el-menu-item-group v-for="(item2,index2) in item.children" :key="index2">
                            <el-menu-item :index="item2.path">
                                <i :class="item2.icon"></i>
                                <span>{{ item.meta }}</span>
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
        };
    },
    methods: {
        InitializeListDom() {},
        cutPage(e) {
            single.cutPage(e);
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
    beforeMount() {},
};
</script>

<style scoped>
· .con {
    width: 100%;
}
.con >>> .el-menu-item {
    text-align: left;
}
.con >>> .el-submenu__title {
    text-align: left;
}
.con >>> .el-menu-item-group__title {
    padding: 0;
}
</style>