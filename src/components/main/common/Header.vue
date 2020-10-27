<template>
    <div class="bgcdiv">
        <div class="tit_text">
            <i
                class="el-icon-s-tools"
                @click="showlist"
                :style="showlistbtn ? 'color:black' : ''"
            ></i>
            <span>通用管理系统</span>
        </div>
        <div class="user">
            <img class="img1" :src="headeimg" />
            <div class="username">{{ username }}</div>
            <div class="exit" @click="signOut">
                <p class="swicth_1">退出</p>
                <i class="el-icon-switch-button"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ["btnshow"],
    data() {
        return {
            headeimg: require("../../../assets/default_head.jpg"),
            username: "游客",
        };
    },
    computed: {
        showlistbtn() {
            return this.btnshow;
        },
    },
    methods: {
        signOut() {
            if (this.$store.state.wid < 769) {
                return this.$dialog({
                    message:'确认退出该账户？',
                    title:'提示',
                    success(){
                        this.$router.push('/login')
                    }
                })
            }
            this.$confirm("是否退出管理系统", "警告", { type: "warning" })
                .then(() => {
                    this.$router.push("/login");
                })
                .catch(() => {});
        },
        showlist() {
            this.$emit("clickbtn");
        },
    },
};
</script>

<style scoped>
@media screen and (max-width: 769px) {
    .bgcdiv {
        height: 3rem !important;
        padding: 0 1.5rem !important;
    }
    .bgcdiv > div {
        line-height: 3rem !important;
    }
    .img1 {
        height: 2rem !important;
        width: 2rem !important;
        padding: 0.5rem 0 !important;
    }
    .user {
        width: auto !important;
    }
    .swicth_1 {
        display: none;
    }
    .el-icon-switch-button {
        display: inline !important;
    }
    .el-icon-s-tools {
        display: inline !important;
        margin-right: 1rem;
    }
    .exit {
        font-size: 1rem;
        display: inline-block;
    }
}
.el-icon-switch-button {
    display: none;
}
.el-icon-s-tools {
    display: none;
}

.bgcdiv {
    background-color: rgb(59, 140, 255);
    height: 65px;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
}
.bgcdiv > div {
    float: left;
    color: white;
    line-height: 65px;
}
.img1 {
    height: 45px;
    width: 45px;
    display: block;
    float: left;
    border-radius: 50%;
    padding: 10px 0;
}
.user {
    float: right !important;
    width: 200px;
    font-size: 14px;
}
.user > div {
    float: left;
}
.exit {
    margin-left: 20px;
}
.el-icon-switch-button:active {
    color: red;
}

.username {
    margin-left: 15px;
}
</style>