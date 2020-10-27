<template>
    <div class="movedialog">
        <el-dialog :visible.sync="dialogVisible" 
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :show-close="false" 
        custom-class="dialogMove"
        >
            <div class="dialog_move_all">
                <h1 style="height:2rem"></h1>
                <div class="dialog_move_title">{{ title }}</div>
                <div class="dialog_move_body">{{ message }}</div>
                <div class="line"></div>
                <div v-if="type" class="dialog_move_end_alert">
                    <div @click="successnow">确认</div>
                </div>
                <div v-else class="dialog_move_end_confirm">
                    <div @click="cancelnow" class="cancel">取消</div>
                    <div @click="successnow" class="confirm">确认</div>
                    <div class="line_vertical"></div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    computed:{
        dialogVisible:{
            get(){
                return this.$store.state.moveDialogState.show
            },
            set(newdata){
                this.$store.commit('watchForMD',['show',newdata])
            }
        },
        title(){
            return this.$store.state.moveDialogState.title
        },
        message(){
            return this.$store.state.moveDialogState.message
        },
        type(){
            return this.$store.state.moveDialogState.type
        },
        success(){
            return this.$store.state.moveDialogState.success
        },
        cancel(){
            return this.$store.state.moveDialogState.cancel
        },
    },
    methods:{
        successnow(){
            this.dialogVisible = false
            this.success()
        },
        cancelnow(){
            this.dialogVisible = false
            this.cancel()
        }
    },
}
</script>

<style scoped>
.movedialog >>> .dialogMove{
    margin-top: 30vh !important;
    border-radius: 16px;
    width: 80%;
}
.movedialog >>> .dialogMove > .el-dialog__header{
    display: none;
}
.movedialog >>> .dialogMove > .el-dialog__body{
    padding: 0;
}
.movedialog >>> .dialog_move_title{
    font-size: 0.8rem;
    color: black;
}
.movedialog >>> .dialog_move_body{
    margin: 0.5rem 0 1.5rem 0;
    box-sizing: border-box;
    padding: 0 5%;
    font-size: 0.7rem;
}
.movedialog >>> .line{
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.07);
}
.movedialog >>> .dialog_move_end_alert,.movedialog >>> .dialog_move_end_confirm {
    line-height: 2.5rem;
    position: relative;
}
.movedialog >>> .dialog_move_end_confirm >div:nth-last-child(n+3){
    float: left;
    width: 50%;
}
.movedialog >>> .cancel:active{
    background-color: rgb(230,230,230);
    border-radius: 0 0 0 16px;
}
.movedialog >>> .confirm:active{
    background-color: rgb(230,230,230);
    border-radius: 0 0 16px 0;
}
.line_vertical{
    position: absolute;
    height: 2.5rem;
    width: 1px;
    background-color: rgba(0,0,0,0.07);
    left: 50%;
    margin-left: -0.5px;
    top: 0;
}
</style>