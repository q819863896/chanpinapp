<template>
    <div class="compare">
        <div class="illustrate">
            <p @click="goBack">
                <img src="../../assets/images/datalist/arrow_left.png" alt="">
            </p>
            <div class="item" v-for="(ids,Idx) in comId.id" :key="Idx">
                <span>{{ids}}</span>
            </div>
        </div>
        <ul class="iltable">
            <li class="clearfix" v-for="(item, index) in items" :key="index">
                <div class="comKey">
                    {{item.name}}
                </div>
                <div class="comWord">
                    <p>
                        {{item.value[0]}}
                    </p>
                    <p>
                        {{item.value[1]}}
                    </p>
                    <p>
                        {{item.value[2]}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getContrastByNo } from "../../api.js";
import { Toast } from "mint-ui";
export default {
    name: "compare",
    data() {
        return {
            items: [],
            comId: []
        }
    },
    mounted () {
        this.getCompare();
    },
    methods: {
        goBack () {
            this.$router.go(-1);
        },
        getCompare () {
            let newStr = sessionStorage.getItem("compares");
            let params = {
                v_itemNo: newStr
            };
            getContrastByNo(params).then((res) => {
                if (res.status == 0) {
                    this.items = res.datas.compare;
                    this.comId = res.datas;
                } else {
                    Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.compare{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    .illustrate{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        flex-shrink: 0;
        display: flex;
        border-bottom: 1px solid #cccccc;
        background: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        p{
            width: 2rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .item{
            flex: 1;
            text-align: center;
            &:nth-of-type(1){
                color: #82d1c8;
                background: url(../../assets/images/compare/icon_1.png) no-repeat 15.2px center;
                background-size: .8rem .6rem;
            }
            &:nth-of-type(2){
                color: #06c0ef;
                background: url(../../assets/images/compare/icon_2.png) no-repeat 15.2px center;
                background-size: .8rem .6rem;
            }
            &:nth-of-type(3){
                color: #0167c0;
                background: url(../../assets/images/compare/icon_3.png) no-repeat 15.2px center;
                background-size: .8rem .6rem;
            }
        }
    }
    .iltable{
        width: 100%;
        flex: 1;
        margin-top: 3rem;
        .clearfix{
            width: 100%;
            display: flex;
            border-bottom: 1px solid #cccccc;
            line-height: 1.8rem;
            align-items: center;
            .comKey{
                width: 6.6rem;
                text-align: center;
                padding: 1rem;
                font-size: .9rem;
            }
            .comWord{
                flex: 1;
                border-left: 1px solid #cccccc;
                padding: 1rem;
                p{
                    &:nth-of-type(1){
                        color: #82d1c8;
                    }
                    &:nth-of-type(2){
                        color: #06c0ef;
                    }
                    &:nth-of-type(3){
                        color: #0167c0;
                    }
                }
                
            }
        }
    }
}
</style>
