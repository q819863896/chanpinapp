<template>
    <div class="detail">
        <p class="back" @click="goBack">
            <img src="../../assets/images/datalist/arrow_left.png" alt="">
        </p>
        <div class="detailwrap" v-for="(item, index) in items" :key="index">
                <img class="zzbmSrc" src="../../assets/images/zzbm_icon.png" alt="">
                <img class="zbkfSrc" src="../../assets/images/zbkf_icon.png" alt="">
                <div class="box pre">
                    <div class="preTit">售前咨询</div>
                    <div class="boxdetail">
                        <p ref="zzbm" id="zzbm" style="display:none;">{{item.item_open_enroll}}</p>
                        <h1>
                            <i>{{item.item_is_exclusive}}</i>
                            {{item.item_name}}：{{item.item_direction}}
                        </h1>
                        <p>
                            <b>岗位/方向完整名称：</b>
                            <span>{{item.item_direction_desc}}</span>
                        </p>
                        <p class="red">
                            <b>剩余名额：</b>
                            <span>{{item.item_surplus_quota}}</span>
                        </p>
                        <p>
                            <b>对接人：</b>
                            <span>{{item.item_dock_person}}</span>
                        </p>
                        <p>
                            <b>项目时长：</b>
                            <span>{{item.length}}</span>
                        </p>
                        <p>
                            <b>实地/远程：</b>
                            <span>{{item.item_way}}</span>
                        </p>
                        <p>
                            <b>参与项目时间：</b>
                            <span>{{item.joinTimeName}}</span>
                        </p>
                        <p>
                            <b>项目起止日期：</b>
                            <span>{{item.item_st_time}}</span>
                        </p>
                        <p>
                            <b>专业方向：</b>
                            <span class="openText" ref="openText" v-if="allText">{{item.parentMajorName}}-{{item.majorName}}</span>
                            <span  class="quanbuText" v-if="partText">{{item.parentMajorName}}-{{item.majorName}}</span>
                            <i class="moreText" id="allBtn" @click="allBtn">{{toggleText}}</i>
                            <!-- <i class="partText" id="partBtn" @click="partBtn">部分收起 ↑ </i> -->
                        </p>
                        <div class="wid50">
                            <p class="w50">
                                <b>适合年级：</b>
                                <span>{{item.item_junior}}</span>
                            </p>
                            <p class="w50">
                                <b>相对难度：</b>
                                <span>{{item.item_degree}}</span>
                            </p>
                            <p class="w50">
                                <b>是否走人事：</b>
                                <span>{{item.item_have_personnel}}</span>
                            </p>
                            <p class="w50">
                                <b>是否接受毕业生：</b>
                                <span>{{item.item_have_grad}}</span>
                            </p>
                        </div>
                        
                        <p>
                            <b>是否有培训：</b>
                            <span>{{item.item_have_train}}</span>
                        </p>
                    </div>
                </div>
                <div class="box mid">
                    <div class="preTit">售中须知</div>
                    <div class="boxdetail">
                        <div class="item">
                            <div class="ht">
                                <div class="htName">
                                    <b>合同消息：</b>
                                    <p>
                                        {{item.item_contract_info}}
                                    </p>
                                </div>
                                <div class="htPrice" :class="{active:shows==1}" :data-price="item.item_prize" @click="priceToggle">
                                    <span class="price">价格</span>
                                    <p class="red" v-if="falsePri">******</p>
                                    <p class="red" v-if="truePri">{{item.item_prize}}</p>
                                </div>
                            </div>
                        </div>
                        <p class="item">
                            <b>项目介绍：</b>
                            <a class="see" target="_blank" @click="pdfFirst(item.item_desc)">点击查看内容</a>
                        </p>
                        <p class="item">
                            <b>报名流程：</b>
                            <span>{{item.item_enroll_flow}}</span>
                        </p>
                    </div>
                </div>
                <div class="box last">
                    <div class="preTit">售后服务</div>
                    <div class="boxdetail">
                        <p class="item">
                            <b>服务流程：</b>
                            <span>{{item.item_service_flow}}</span>
                        </p>
                        <p class="item">
                            <b>项目收获：</b>
                            <span>{{item.item_gain}}</span>
                        </p>
                        <p class="item">
                            <b>学生反馈：</b>
                            <a class="see" target="_blank" @click="pdfSecond(item.item_stu_feedback)">点击查看内容</a>
                        </p>
                    </div>
                </div>
            
        </div>
        <div class="mask"></div>
    </div>
</template>

<script>
import { getItemDetailById, showImage } from "../../api.js";
import { urlParse } from "../../assets/js/urltoJson.js";
import $ from "jquery";
export default {
    name: "detail",
    data() {
        return{
            allText: true,
            partText: false,
            toggleText: "全部展开 ↓",
            // part: false,
            shows: false,
            falsePri: true,
            truePri: false,
            items: []
        }
    },
    mounted () {
        this.getItemID();
    },
    updated () {
        if ($(".box #zzbm").text() == "暂不开放") {
            $(".zbkfSrc").show();
            $(".zzbmSrc").hide();
        } else if ($(".box #zzbm").text() == "正在报名") {
            $(".zzbmSrc").show();
            $(".zbkfSrc").hide();
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1);
        },
        allBtn () {
            this.allText = !this.allText;
            this.partText = !this.partText;
            if (this.allText == false) {
                this.toggleText = "部分收起 ↑";
            } else {
                this.toggleText = "全部展开 ↓";
            }
            // var off = true;
            // $(".detail").on("click", "#allBtn", function () {
            //     if (off) {
            //         $(this).prev().css({
            //             "overflow": "auto",
            //             "white-space": "initial",
            //             "height":"auto"
            //         });
            //         $(this).html("部分收起 ↑");
            //     } else {
            //         $(this).prev().css({
            //             "overflow": "hidden",
            //             "white-space": "nowrap",
            //             "height":"0.34rem"
            //         });
            //         $(this).html("全部展开 ↓");
            //         off = true;
            //     }
            // })
        },
        partBtn () {
            this.$refs.openText.style.height = 1.2+"rem";
            this.$refs.openText.style.whiteSpace = "nowrap";
            this.all = true;
            this.part = false;
        },
        priceToggle () {
            this.falsePri = !this.falsePri;
            this.truePri = !this.truePri;
            this.shows = !this.shows;
        },
        getItemID () {
            getItemDetailById(urlParse(window.location.href)).then((res) => {
                if (res.status == 0) {
                    this.items = res.datas;
                }
            })
        },
        pdfFirst (item_desc) {
            console.log(item_desc);
            this.$router.push({
                name: "compactPdf",
                params: {
                    item_desc
                }
            })
        },
        pdfSecond (item_stu_feedback) {
            console.log(item_stu_feedback);
            this.$router.push({
                name: "stuPdf",
                params: {
                    item_stu_feedback
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.detail{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    background: #e8e8e8 url(../../assets/images/bg.png) no-repeat center top;
    background-size: 100% auto;
    position: relative;
    z-index: 86;
    .back{
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 2rem;
        height: 2rem;
        z-index: 9;
    }
    
    .detailwrap{
        width: 94%;
        border-radius: .5rem;
        margin: 3%;
        background: #ffffff;
        position: relative;
        .zzbmSrc{
            position: absolute;
            right: 1rem;
            top: 2rem;
            z-index: 66;
            width: 7.2rem;
            height: 6.4rem;
            display: none;
            z-index: 99;
        }
        .zbkfSrc{
            position: absolute;
            right: 1rem;
            top: 2rem;
            z-index: 66;
            width: 7.2rem;
            height: 6.4rem;
            display: none;
            z-index: 99;
        }
        .box{
            padding: 1rem;
            z-index: 88;
            // background: #ffffff;
            // background: rgba(255, 255, 255, .8);
            // z-index: 11;
            .preTit{
                width: 8rem;
                height: 3rem;
                border: 1px solid #e8e8e8;
                border-radius: .5rem;
                text-align: center;
                line-height: 3rem;
                margin-bottom: .5rem;
            }
            .boxdetail{
                h1{
                    font-size: 1.3rem;
                    font-weight: 500;
                    z-index: 999;
                    i{
                        font-style: normal;
                        color: #f35e5b;
                        font-weight: 600;
                    }
                }
                p{
                    margin: .8rem 0;
                    .moreText{
                        color: #00b4ff;
                        font-weight: normal;
                        font-style: normal;
                        text-decoration: underline;
                    }
                    .partText{
                        color: #00b4ff;
                        font-weight: normal;
                        font-style: normal;
                        text-decoration: underline;
                        display: none;
                    }
                    .openText{
                        width: 100%;
                        height: 1.2rem;
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .quanbuText{
                        width: 100%;
                        display: block;
                    }
                }
                .wid50{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    .w50{
                        width: 50%;
                    }
                }
                .item{
                    .ht{
                        width: 100%;
                        display: flex;
                        border: 1px solid #eeeeee;
                        font-size: .8rem;
                        justify-content: center;
                        align-items: center;
                        .htName{
                            flex: 1;
                            border-right: 1px solid #eeeeee;
                            padding: .6rem .4rem;
                        }
                        .htPrice{
                            width: 5rem;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .price{
                                width: 3rem;
                                background: url(../../assets/images/datalist/price-false.png) no-repeat center right;
                                background-size: 1rem .6rem;
                            }
                        }
                        .active{
                            width: 5rem;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .price{
                                width: 3rem;
                                background: url(../../assets/images/datalist/price-true.png) no-repeat center right;
                                background-size: 1rem .6rem;
                            }
                        }
                    }
                    .see{
                        width: 8rem;
                        height: 2rem;
                        text-align: center;
                        line-height: 2rem;
                        background: #eeeeee;
                        border-radius: .4rem;
                        margin-top: 1rem;
                        text-decoration: none;
                        color: #000000;
                    }
                }
                a{
                    display: block;
                    width: 8rem;
                    height: 2rem;
                    text-align: center;
                    line-height: 2rem;
                    background: #eeeeee;
                    border-radius: .4rem;
                    margin-top: 1rem;
                    text-decoration: none;
                    color: #000000;
                }
            }
            .red{
                color: #f35e5b;
            }
        }
    }
    // .isSignUp{
    //     background: rgba(255, 255, 255, .8);
    //     width: 94%;
    //     height: 96%;
    //     border-radius: .5rem;
    //     background: #ffffff;
    //     margin: 3%;
    //     background: url(../../assets/images/zbkf_icon.png) no-repeat right top;
    //     background-size: 7rem 6.4rem;
    //     z-index: 999;
    // }
    // .noSignUp{
    //     background: rgba(255, 255, 255, .8);
    //     width: 94%;
    //     height: 96%;
    //     border-radius: .5rem;
    //     background: #ffffff;
    //     margin: 3%;
    //     background: url(../../assets/images/zzbm_icon.png) no-repeat right top;
    //     background-size: 7rem 6.4rem;
    //     z-index: 999;
    // }
    
}
</style>
