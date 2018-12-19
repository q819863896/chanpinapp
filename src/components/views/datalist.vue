<template>
    <div class="datawrap">
        
        <div class="viewWord">
            <i class="goback" @click="goback"></i>
            <p v-if="toggle" :class="{signUp: !isshow, ccc: isshow}" @click="jsbm">
                <span>接受报名</span>
            </p>
        </div>
        <div class="nodata" v-if="shownoData">
            <img class="noImg" src="../../assets/images/datalist/noData_icon.png" alt="">
            <p >未查询到您想要的数据，请重新查询</p>
            <router-link to="/home">重新查询</router-link>
        </div>
        <div class="yesdata" v-if="showyesData">
            <ul>
                <router-link v-for="(item, index) in items" :key="index" :to="'/viewlist?itemName='+(item.item_name)">
                    <b>{{item.item_name}}</b>
                    <p>{{item.count}}条</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import { getListByParam } from "../../api.js";
export default {
    name: "datawrap",
    data() {
        return {
            shownoData: false,
            showyesData: true,
            isshow: true,
            items: [],
            toggle: true
        }
    },
    created () {
        // this.items = JSON.parse(sessionStorage.getItem("allList"));
    },
    mounted () {
        if (sessionStorage.getItem("homeListBm") == "no") {
            this.isshow = false;
        }
        // this.jsbm();
        this.getItems();
        let tj = JSON.parse(sessionStorage.getItem("homeParams"));
        console.log(tj);
        // console.log(sessionStorage.getItem("homeListBm"));
    },
    methods: {
        goback () {
            this.$router.go(-1);    //返回上一层
            sessionStorage.removeItem("allList");
            sessionStorage.removeItem("homeParams");
        },
        // 接受报名
        jsbm () {
            this.isshow = !this.isshow;
             this.items = [];
            if (this.isshow == true) {
                let tj = JSON.parse(sessionStorage.getItem("homeParams"));
                
                delete(tj["acceptSign"]);
                // console.log(tj);
                getListByParam(tj).then((res) => {
                    if (res.status == 0) {
                        this.items = res.datas;
                    } else {
                        this.shownoData = true
                    }
                })
                sessionStorage.setItem("dataListBm", "no");
            } else if (this.isshow == false) {
                let tj = JSON.parse(sessionStorage.getItem("homeParams"));
                let params = {
                    acceptSign: "正在报名"
                };
                Object.assign(params, tj)
                getListByParam(params).then((res) => {
                    if (res.status == 0) {
                        this.items = res.datas;
                    } else {
                        this.shownoData = true
                    }
                })
                sessionStorage.setItem("dataListBm", "yes")
            }
        },
        getItems () {
            if (sessionStorage.getItem("homeListBm") == "no") {
                this.isshow = true;
                getListByParam(JSON.parse(sessionStorage.getItem("homeParams"))).then((res) => {
                    this.items = [];
                    if (res.status == 0) {
                        this.items = res.datas;
                    } else {
                        this.shownoData = true
                    }
                })
                sessionStorage.setItem("dataListBm", "no");
            }
            else if (sessionStorage.getItem("homeListBm") == "yes") {
                this.isshow = false;
                let tj = JSON.parse(sessionStorage.getItem("homeParams"));
                let params = {
                    acceptSign: "正在报名"
                };
                Object.assign(params, tj)
                getListByParam(params).then((res) => {
                    this.items = [];
                    if (res.status == 0) {
                        this.items = res.datas;
                    } else {
                        this.shownoData = true
                    }
                })
                sessionStorage.setItem("dataListBm", "yes")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.datawrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .viewWord{
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        border-bottom: 1px solid #eee;
        background: #fff;
        justify-content: space-around;
        display: flex;
        .goback{
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            line-height: 3rem;
            margin-top: .5rem;
            width: 2rem;
            height: 2rem;
            background: url(../../assets/images/datalist/arrow_left.png) no-repeat center center;
        }
        .signUp{
            width: 8rem;
            height: 2rem;
            border: 1px solid #f35e5b;
            color: #f35e5b;
            margin-top: .2rem;
            line-height: 2rem;
            border-radius: .4rem;
            background: url(../../assets/images/datalist/chose_red_icon.png) no-repeat .4rem .4rem;
            background-size: 1.3rem 1rem;
            padding-left: .5rem;
            span{
                padding-left: 1.5rem;
            }
        }
        .ccc{
            width: 8rem;
            height: 2rem;
            border: 1px solid #cccccc;
            color: #cccccc;
            margin-top: .2rem;
            line-height: 2rem;
            border-radius: .4rem;
            background: url(../../assets/images/datalist/chose_icon.png) no-repeat .4rem .4rem;
            background-size: 1.3rem 1rem;
            padding-left: .5rem;
            span{
                padding-left: 1.5rem;
            }
        }
    }
    .nodata{
        width: 100%;
        flex: 1;
        margin-top: 2.5rem;
        box-sizing: border-box;
        .noImg{
            width: 5rem;
            height: 5.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 6rem auto 0 auto;
        }
        p{
            width: 100%;
            text-align: center;
            margin: 2rem 0;
        }
        a{
            display: flex;
            width: 94%;
            height: 3rem;
            line-height: 3rem;
            background: #09BB07;
            color: #ffffff;
            margin: 0 3%;
            border-radius: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration : none;
        }
    }
    .yesdata{
        margin-top: 2.5rem;
        width: 100%;
        ul{
            width: 100%;
            a{
                display: inline-block;
                text-decoration: none;
                width: 100%;
                height: 3rem;
                line-height: 3rem;
                display: flex;
                padding: 0 .8rem;
                border-bottom: 1px solid #eee;
                color: #000000;
                b{
                    width: 84%;
                    font-size: 1rem;
                }
                p{
                    font-size: 1rem;
                    font-weight: 500;
                    // text-align: right;
                    // padding-right: .8rem;
                    background: url(../../assets/images/datalist/toRight.png) no-repeat center right;
                    background-size: auto 40%;
                }
            }
        }
    }
}
</style>
