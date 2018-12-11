<template>
    <div class="page">
        <p class="goBack" @click="goBack">返回</p>
        <iframe :src="'./pdf/web/viewer.html?file='+pdfSrc" frameborder="0"></iframe>
    </div>
</template>

<script>
import { fileUpload, showImage } from "../../api.js";
import { urlParse } from "../../assets/js/urltoJson.js";
import { loading, closeLoading } from "../../assets/js/loading.js";
export default {
    name: "CompactPDF",
    data() {
        return {
            pdfSrc: ""
        };
    },
    mounted() {
        this.getContractPDF();
    },
    methods: {
        getContractPDF() {
            let params = {
                fileName: this.$route.params.item_desc
            };
            console.log(params);
            showImage(params).then((res) => {
                let blob = new Blob([res], { type: "application/pdf" });
                this.pdfSrc = window.URL.createObjectURL(blob);
                console.log(this.pdfSrc);
            })
        },
        goBack () {
            // this.$router.push({path: "/detail"})
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
.page{
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
