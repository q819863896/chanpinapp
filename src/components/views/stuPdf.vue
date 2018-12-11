<template>
    <div class="stupdf">
        <p class="goBack" @click="goBack">返回</p>
        <iframe :src="'./pdf/web/viewer.html?file='+pdfSrc" frameborder="0"></iframe>
    </div>
</template>

<script>
import { showImage } from "../../api.js";
export default {
    name: "stupdf",
    data() {
        return{
            pdfSrc: ""
        }
    },
    mounted () {
        this.getPdf();
    },
    methods: {
        getPdf () {
            let params = {
                fileName: this.$route.params.item_stu_feedback
            };
            showImage(params).then((res) => {
                let blob = new Blob([res], { type: "application/pdf" });
                this.pdfSrc = window.URL.createObjectURL(blob);
            })
        },
        goBack () {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.stupdf{
    width: 100%;
    height: 100%;
    position: relative;
    iframe{
        width: 100%;
        height: 100%;
    }
    .goBack{
        position: absolute;
        top: 3rem;
        left: 1.8rem;
        color: #000000;
    }
}
</style>
