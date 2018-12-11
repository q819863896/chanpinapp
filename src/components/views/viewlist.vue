<template>
    <div class="viewlist" ref="viewlist">
        <div class="header">
            <i class="goback" @click="goback"></i>
            <p :class="{signUp: !isshow, ccc: isshow}" @click="jsbm">
                <span>接受报名</span>
            </p>
            <p class="filter" @click="filter">
                筛选
                <img src="../../assets/images/datalist/filter_icon.png" alt="">
            </p>
        </div>
        <div class="scroll-item">
            <div class="box" v-for="(item, index) in items" :key="index">
                <router-link :to="'/detail?itemId='+(item.itemId)" class="item-name" target="view_window">
                    <b>{{item.itemIsExclusive}}</b>
                    {{item.itemNo}}&nbsp;{{item.itemName}}：{{item.itemDirection}}
                </router-link>
                <div class="item-info">
                    <div class="left">
                        <div class="info-black">
                            <!-- <img class="sdSrc" src="../../assets/images/datalist/sd_icon.png" alt="">
                            <img class="ycSrc" src="../../assets/images/datalist/yc_icon.png" alt=""> -->
                            <!-- 实地 -->
                            <span id="itemWay" ref="itemWay">{{item.itemWay}}</span>
                        </div>
                        <div class="info-gray">
                            <p class="gray-person">
                                对接人：{{item.itemDockPerson}}
                            </p>
                            <p class="gray-require">特殊要求：{{item.itemSpecialNeed}}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="btnsCompare" @click="btnCompare($event,index)" id="btn-compare" :data-compareid="item.itemNo">
                            <span>加入对比</span>
                        </div>
                        <div class="btns-price" :class="{active:index==shows}" :data-price="item.itemPrize" :data-index="item.itemId" id="dj">
                            <i>价格</i>
                            <span class="truepri" :data-price="item.itemPrize">{{item.itemPrize}}</span>
                            <span class="falsepri" >******</span>
                            <!-- <span>******</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="compareBox" v-show="togglecom">
            <div class="compareLogo">
                <p class="compareInfo" id="compareInfo">
                </p>
            </div>
            <div class="compareToBtn" @click="compareBtn">对比</div>
        </div>
        <div class="slideBox" v-if="slideBox">
            <div class="slide-first" v-show="slideFirst">
                <div class="slide-title">二级筛选</div>
                <div class="slide-filtrate">
                    <div class="bar">
                        <div class="slide-bar">
                            <span class="title">专业大类</span>
                            <span class="selected" @click="marjorBtn">
                                <span>{{zydlsztoString()}}</span>
                                <img src="../../assets/images/datalist/toRight.png" alt="">
                            </span>
                        </div>
                        <div class="slide-btns">
                            <div class="clearfix">
                                <mt-checklist
                                    v-model="zydlvaluesz"
                                    :options="zydlOptions">
                                </mt-checklist>
                            </div>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="slide-bar">
                            <span class="title">项目地点(可多选)</span>
                            <span class="selected" @click="prolocation">
                                <span>{{xmddvaluetoString()}}</span>
                                <img src="../../assets/images/datalist/toRight.png" alt="">
                            </span>
                        </div>
                        <div class="slide-btns">
                            <div class="clearfix" ref="xmdd" id="xmddTo">
                                <mt-checklist
                                    v-model="xmddvaluesz"
                                    :options="xmddOptions">
                                </mt-checklist>
                            </div>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="slide-bar">
                            <span class="title">是否有培训</span>
                            <span class="selected" @click="pxtoggle">
                                <span>{{pxbvalue}}</span>
                            </span>
                        </div>
                        <div class="slide-btns">
                            <div class="clearfix" style="height:auto;">
                                <mt-radio
                                    v-model="pxbvalue"
                                    :options="pxbli">
                                </mt-radio>
                            </div>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="slide-bar">
                            <span class="title">是否走人事</span>
                            <span class="selected" @click="rstoggle">
                                <span>{{zrsvalue}}</span>
                            </span>
                        </div>
                        <div class="slide-btns">
                            <div class="clearfix">
                                <mt-radio
                                    v-model="zrsvalue"
                                    :options="zrsli">
                                </mt-radio>
                            </div>
                        </div>
                    </div>
                    <div class="bar">
                        <div class="slide-bar">
                            <span class="title">是否接受毕业生</span>
                            <span class="selected">
                                {{bysvalue}}
                            </span>
                        </div>
                        <div class="slide-btns">
                            <div class="clearfix">
                                <mt-radio
                                    v-model="bysvalue"
                                    :options="graduateli">
                                </mt-radio>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slideBtn">
                    <div class="reset" @click="reset">重置</div>
                    <div class="submit" @click="submit">确定</div>
                </div>
            </div>
            <div class="slide-second" v-show="slideSecond">
                <div class="sec-head">
                    <p class="back" @click="secBack">
                        <img src="../../assets/images/datalist/arrow_left.png" alt="">
                    </p>
                    <div class="tit">全部分类</div>
                </div>
                <ul>
                    <mt-checklist
                        v-model="zydlvaluesz"
                        :options="zydlOptions">
                    </mt-checklist>
                </ul>
            </div>
        </div>
        <div class="mark" v-if="mark" @click="markBtn" ref="mark"></div>
        <div class="toTop" v-if="toTop" @click="returnTop">
            <img src="../../assets/images/datalist/ico_top.png" alt="">
        </div>
        <div class="mask" id="mask"></div>
        <div class="showModel">
            <div class="dataTip">
                <p></p>
                <div id="closeMask" class="viewBtn-sure">
                    确定
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var _len;
import $ from "jquery";
import { getParentMajor, getLocale, getListByItemName, getListByParam } from "../../api.js";
import { urlParse, ab2str } from "../../assets/js/urltoJson.js";
import { Toast } from "mint-ui";
export default {
    name: "viewlist",
    data() {
        return {
            Exclusive: false,
            toTop: false,
            mark: false,
            slideBox: false,
            isshow: true,
            regvalue: "",       // 接受报名--开关
            items: [],
            compareInfoInp: "",
            togglecom: false,
            marjor: "全部",
            prolocale: "全部",
            others: false,
            slideFirst: true,
            slideSecond: false,
            graduate: "",
            pbxcla: -1,
            pxb: "",
            pxbvalue: "",
            pxbli: ["无", "有职规服务", "线上/下3-4周", "线上3-4周", "线上约2周"],
            zrsvalue: "",
            zrsli: ["是", "否"],
            graducla: -1,
            graduateli: ["是", "否"],
            bysvalue: "",
            allMaj: [],
            allmajcla: -1,
            dbcla: -1,
            shows: -1,
            zydlvalue: [],      // 专业大类--value
            zydlvaluesz: [],
            zydlOptions: [],    // 专业大类--数据
            zydlOptionssz: [],
            parentMaj: [],
            proDd: [],
            xmddvalueStr: "",
            xmddvalue: [],
            xmddvaluesz: [],
            xmddOptions: [],
            pageNum: 1,
            pageSize: 10
        }
    },
    created () {
        // this.jsbm();
        
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop);
        this.zydl();
        this.zydlsz();
        this.getProlocale();
        this.getItemName();
        this.jsbm();
        // 对比框添加数据
        function addCompareBox(arr){
            var spanStr="";
            $.each(arr, function(i,e){
                spanStr+='<span data-listindex='+e[1]+'>'+e[0]+'</span>';
            })
            $("#compareInfo").html(spanStr);
        }
        // 删除数组中指定一项
        Array.prototype.removeByValue = function(val) {
            for(var i=0; i<this.length; i++) {
                if(this[i][0] == val) {
                    this.splice(i, 1);
                    break;
                }
            }
        }
        var compareArr = [];
        // 加入对比
        $(".scroll-item").on("click", "#btn-compare", function (event) {
            $(".compareBox").show();
            _len = $("#compareInfo span").length;
            var _compareId = $(this).data("compareid");
            var _listIndex = $(".right #btn-compare").index($(this));
            if ($(this).hasClass("compare-true")) {
                $(this).removeClass("compare-true");
                compareArr.removeByValue(_compareId);
                addCompareBox(compareArr);
                if(compareArr.length < 1){
                    $(".compareBox").hide();
                }
            } else {
                $(this).addClass('compare-true');
                if (_len > 2) {
                    $("#mask").show();
                    $(".showModel").show().find("p").html("最多对比3个方向！");
                    $(this).removeClass('compare-true');
                } else {
                    compareArr.push([_compareId,_listIndex]);
                    $(".compareBox").show();
                    addCompareBox(compareArr);
                }
            }
        })
        $("#closeMask").on("click", function(){
            $(".showModel, #mask").hide();
        })
        // 删除对比
        $("#compareInfo").on("click", "span", function(){
            var _compareId = $(this).html();
            var _listindex = $(this).data("listindex");
            console.log(_listindex);
            $(".box").eq(_listindex).find("#btn-compare").removeClass('compare-true');
            compareArr.removeByValue(_compareId);
            addCompareBox(compareArr);
            if(compareArr.length < 1){
                $(".compareBox").hide();
            }
        })

        $(".scroll-item").on("click", ".btns-price", function () {
            var bPrice = $(this).data("price");
            var priIndex = $(".right .btns-price").index($(this));
            $(this).find("span").toggle();
        })

        this.items = JSON.parse(sessionStorage.getItem("listItemName"));

    },

    updated () {
        // for(var ycsd = 0; ycsd < $(".scroll-item .info-black").length; ycsd++) {
        //     // console.log($(".scroll-item .info-black")[ycsd].innerText);
        //     if ($(".scroll-item .info-black")[ycsd].innerText == "实地") {
        //         console.log("r");
        //         $(".sdSrc").show();
        //         $(".ycSrc").hide();
        //         // $(".scroll-item .info-black").addClass("sd");
        //     } else if ($(".scroll-item .info-black").innerText == "远程") {
        //         // $(".scroll-item .info-black").addClass("yc");
        //         $(".sdSrc").hide();
        //         $(".ycSrc").show();
        //     }
        // }
    },
    watch: {
        value:function(val,oldvalue) {
            console.log(val);
        }
    },
    methods: {
        scrollToTop (el) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            if (scrollTop > browserHeight) {
                this.toTop = true;
            } else {
                this.toTop = false;
            }
        },
        getItemName () {
            var urlinfo = window.location.href;//获取url
            var userName = urlinfo.split("?")[1].split("=")[1];//拆分url得到”=”後面的参数
            let viewName = decodeURI(userName);
            let params = {
                itemName: viewName
            };
            this.items = [];
            getListByItemName(params).then((res) => {
                if (res.status == 0) {
                    this.items = res.datas;
                    sessionStorage.setItem("listItemName", JSON.stringify(res.datas));
                }
            })
        },
        getCom () {
            console.log(document.getElementById("compareInfo").getElementsByClassName("span").innerText);
        },
        // 后退
        goback () {
            this.$router.go(-1);
            sessionStorage.removeItem("itemName");
        },
        // 接受报名
        jsbm () {
            this.isshow = !this.isshow;
            var urlinfo = window.location.href;//获取url
            var userName = urlinfo.split("?")[1].split("=")[1];//拆分url得到”=”後面的参数
            let viewName = decodeURI(userName);
            let params = {
                itemName: viewName
            };
            if (this.isshow == true) {
                getListByItemName(params).then((res) => {
                    if (res.status == 0) {
                        Toast({
                            message: res.message,
                            position: 'middle',
                            duration: 2000
                        });
                        this.items = res.datas;
                    }
                })
            } else {
                let params = {
                    acceptSign: "正在报名",
                    itemName: viewName
                };
                getListByItemName(params).then((res) => {
                    if(res.status == 0) {
                        Toast({
                            message: res.message,
                            position: 'middle',
                            duration: 2000
                        });
                        this.items = res.datas;
                    }
                })
            }
        },
        // 筛选
        filter () {
            this.zydlvaluesz = [];
            this.xmddvalue = [];
            this.pxbvalue = "";
            this.zrsvalue = "";
            this.bysvalue = "";
            this.mark = !this.mark;
            this.slideBox = !this.slideBox;
            this.slideFirst = true;
        },
        markBtn () {
            this.mark = !this.mark;
            this.slideBox = false;
            this.slideFirst = false;
        },
        // 加入对比
        btnCompare (e, idx) {
            this.dbcla = idx;
            // // var _len;
            // let arr = [];
            // if (e.path[4].childNodes[0].innerText.substring(0, 4)) {
            //     // this.togglecom = true;
            //     // this.getCom();
            //     let comId = e.path[4].childNodes[0].innerText.substring(0, 4);
            //     let createSpan = document.createElement("span");
            //     document.getElementById("compareInfo").appendChild(createSpan);
            //     createSpan.innerText = comId;
            //     arr.push(createSpan);
                
            //     if (arr[0].offsetParent.children[0].children[0].children.length > 3) {
            //         Toast({
            //             message: '最多对比3个方向！',
            //             position: 'middle',
            //             duration: 2000
            //         });
            //         return false;
            //     } else {
                    
            //     }
            // }
            // _len = $("#right span").length;
            // var _compareId =  = $(this).data("compareid");
        },
        // 对比
        compareBtn () {
            _len = $("#compareInfo span").length;
            if (_len < 2) {
                $("#mask").show();
                $(".showModel").show().find("p").html("最少对比2个方向！");
            } else {
                this.$router.push({path: "/compare"});
                let newArr = [];
                for(let i = 0; i < $("#compareInfo span").length; i++) {
                    newArr.push($("#compareInfo span")[i].innerText)
                }
                sessionStorage.setItem("compares", newArr.join(","));
            }
        },
        // 专业大类
        marjorBtn () {
            this.slideSecond = true;
        },
        // 项目地点
        prolocation () {
            console.log("项目地点");
            if ($("#xmddTo").height() < 50) {
                $("#xmddTo").animate({height:17+"rem"});
            } else {
                $("#xmddTo").animate({height:2+"rem"});
            }
        },
        // 二层---返回
        secBack () {
            this.slideFirst = true;
            this.slideSecond = false;
        },
        // 二级筛选---重置
        reset () {
            this.zydlvaluesz = [];
            this.xmddvaluesz = [];
            this.pxbvalue = "";
            this.zrsvalue = "";
            this.bysvalue = "";
        },
        // 二级筛选---确定
        submit () {
            let links = this.parentMaj;
            for(let i = 0; i < links.length; i++) {
                for(let j = 0; j < this.zydlvaluesz.length; j++) {
                    if (links[i].parentMajorName == this.zydlvaluesz[j]) {
                        // console.log("存在---" + this.zydlvaluesz[j]);
                        this.zydlvaluesz[j] = links[i].parentMajorId
                    } else {
                        // console.log("不存在---" + this.zydlvaluesz);
                    }
                }
            }

            let locallinks = this.proDd;
            for(let a = 0; a < locallinks.length; a++) {
                for(let b = 0; b < this.xmddvaluesz.length; b++) {
                    if (locallinks[a].localeName == this.xmddvaluesz[b]) {
                        // console.log("存在---" + this.xmddvaluesz[b]);
                        this.xmddvaluesz[b] = locallinks[a].localeId
                    } else {
                        // console.log("不存在---" + this.xmddvaluesz);
                    }
                }
            }
            var urlinfo = window.location.href;//获取url
            var userName = urlinfo.split("?")[1].split("=")[1];//拆分url得到”=”後面的参数
            let viewName = decodeURI(userName);
            let params = {
                itemName: viewName
            };
            this.zydlvaluesz ? (params.parentMajor = this.zydlvaluesz.join(",")) : "",
            this.xmddvaluesz ? (params.itemLocale = this.xmddvaluesz.join(",")) : "",
            this.pxbvalue ? (params.itemHaveTrain = this.pxbvalue) : "",
            this.zrsvalue ? (params.itemHavePersonnel = this.zrsvalue) : "",
            this.sfjsvys ? (params.itemHaveGrad = this.sfjsvys) : "",
            console.log(params);
            this.items = [];
            getListByItemName(params).then((res) => {
                if (res.status == 0) {
                    this.items = res.datas;
                    Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 2000
                    });
                } else {
                    if (res.message == "当前没有数据") {
                        Toast({
                            message: res.message,
                            position: 'middle',
                            duration: 2000
                        });
                    } else if (res.message == "获取失败") {
                        Toast({
                            message: res.message,
                            position: 'middle',
                            duration: 2000
                        });
                    }
                }
            })
            this.slideBox = false;
            this.mark = false;
            this.zydlvaluesz = [];
            this.xmddvaluesz = [];
            this.pxbvalue = "";
            this.zrsvalue = "";
            this.bysvalue = "";
        },
        // 是否走培训
        pxtoggle () {
            console.log("是否走培训");
        },
        // 是否走人事
        rstoggle () {
            console.log("是否走人事");
        },
        returnTop () {
            let back = setInterval(() => {
                if(document.body.scrollTop||document.documentElement.scrollTop || window.pageYOffset){
                    document.body.scrollTop-=100;
                    document.documentElement.scrollTop-=100;
                }else {
                    clearInterval(back);
                }
            });
        },
        // 专业大类
        zydl () {
            getParentMajor().then((res) => {
                this.parentMaj = res.datas;
                this.zydlOptions = [];
                for(let i = 0; i < this.parentMaj.length; i++) {
                    this.zydlOptions.push(this.parentMaj[i].parentMajorName);
                }
            })
        },
        zydlsz () {
            getParentMajor().then((res) => {
                this.parentMaj = res.datas;
                this.zydlOptionssz = [];
                for(let i = 0; i < this.parentMaj.length; i++) {
                    this.zydlOptionssz.push(this.parentMaj[i].parentMajorId);
                }
            })
        },
        zydltoString () {
            return this.zydlvalue.join(",");
        },
        zydlsztoString () {
            return this.zydlvaluesz.join(",");
        },
        // 项目地---转string
        xmddvaluetoString () {
            return this.xmddvaluesz.join(",");
        },
        // 项目地点
        getProlocale () {
            getLocale().then((res) => {
                this.proDd = res.datas;
                this.xmddOptions = [];
                for(let i = 0; i < this.proDd.length; i++) {
                    this.xmddOptions.push(this.proDd[i].localeName)
                }
            })
        },
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop); 
    }
}
</script>

<style lang="scss">
.viewlist{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
    .header{
        width: 100%;
        height: 3rem;
        display: flex;
        border-bottom: 1px solid #cccccc;
        flex-shrink: 0;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffffff;
        z-index: 99;
        .goback{
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
            margin-top: .5rem;
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
            margin-top: .5rem;
            line-height: 2rem;
            border-radius: .4rem;
            background: url(../../assets/images/datalist/chose_icon.png) no-repeat .4rem .4rem;
            background-size: 1.3rem 1rem;
            padding-left: .5rem;
            span{
                padding-left: 1.5rem;
            }
        }
        .filter{
            width: 6rem;
            height: 2rem;
            border: 1px solid #cccccc;
            margin-top: .5rem;
            line-height: 2rem;
            border-radius: .4rem;
            margin-left: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 1.2rem;
                height: auto;
            }
        }
    }
    .scroll-item{
        width: 100%;
        flex: 1;
        // margin-top: 3rem;
        position: absolute;
        top: 3rem;
        left: 0;
        .box{
            width: 100%;
            padding: .6rem 3% .6rem 3%;
            border-bottom: 1px solid #cccccc;
            a{
                color: #000000;
                text-decoration: none;
                font-size: 1.1rem;
                b{
                    color: #f35e5b;
                }
            }
            .item-info{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .left{
                    .info-black{
                        .sdSrc{
                            width: .8rem;
                            display: none;
                        }
                        .ycSrc{
                            width: .8rem;
                            display: none;
                        }
                        .yc{
                            background: url(../../assets/images/datalist/yc_icon.png) no-repeat center left;
                            background-size: .8rem .8rem;
                        }
                        .sd{
                            background: url(../../assets/images/datalist/sd_icon.png) no-repeat center left;
                            background-size: .8rem .8rem;
                        }
                        // span{
                        //     padding-left: 1rem;
                        // }
                    }
                    
                    .info-gray{
                        font-size: .8rem;
                        color: #8d8a8a;
                    }
                }
                .right{
                    .btnsCompare{
                        width: 7rem;
                        background: url(../../assets/images/datalist/btns_compare.png) no-repeat .4rem .1rem;
                        background-size: 1rem 1rem;
                        span{
                            margin-left: 2rem;
                        }
                    }
                    .compare-true{
                        width: 7rem;
                        background: url(../../assets/images/datalist/compare-true.png) no-repeat .4rem .1rem;
                        background-size: 1rem 1rem;
                        span{
                            margin-left: 2rem;
                        }
                    }
                    .btns-price{
                        width: 7rem;
                        color: #a9a9a9;
                        padding-top: 0.2rem;
                        display: flex;
                        i{
                            font-style: normal;
                        }
                        span{
                            font-size: .9rem;
                            padding-right: 1rem;
                            padding-left: 0.1rem;
                            background: url(../../assets/images/datalist/price-false.png) no-repeat right center;
                            background-size: .9rem .6rem;
                        }
                        .truepri{
                            font-size: .9rem;
                            padding-right: 1rem;
                            padding-left: 0.1rem;
                            background: url(../../assets/images/datalist/price-true.png) no-repeat right center;
                            background-size: .9rem .6rem;
                            display: none;
                        }
                        .falsepri{
                            font-size: .9rem;
                            padding-right: 1rem;
                            padding-left: 0.1rem;
                            background: url(../../assets/images/datalist/price-false.png) no-repeat right center;
                            background-size: .9rem .6rem;
                        }
                        .priactive{
                            font-size: .9rem;
                            padding-right: 1rem;
                            padding-left: 0.1rem;
                            background: url(../../assets/images/datalist/price-true.png) no-repeat right center;
                            background-size: .9rem .6rem;
                        }
                    }
                    .active{
                        width: 7rem;
                        color: #a9a9a9;
                        padding-top: 0.2rem;
                        i{
                            font-style: normal;
                        }
                        span{
                            font-size: .9rem;
                            padding-right: 1rem;
                            padding-left: 0.1rem;
                            background: url(../../assets/images/datalist/price-true.png) no-repeat right center;
                            background-size: .9rem .6rem;
                        }
                    }
                    .pricetrue{
                        width: 6rem;
                        background: url(../../assets/images/datalist/price-true.png) no-repeat center right;
                        background-size: 1rem .5rem;
                        i{
                            font-style: normal;
                        }
                    }
                }
            }
        }
    }
    .compareBox{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        background: #ffffff;
        border-top: 1px solid #cccccc;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 0 0;
        .compareLogo{
            span{
                padding: 0 .3rem;
                border: 1px solid #A2A2A2;
                border-radius: .4rem;
                color: #A2A2A2;
                margin: 0 .3rem;
            }
            .disnone{
                display: none;
            }
        }
        .compareToBtn{
            width: 3rem;
            height: 1.6rem;
            line-height: 1.6rem;
            background: #FAAB02;
            border-radius: .4rem;
            color: #ffffff;
            text-align: center;
            margin: .2rem 0;
        }
    }
    .slideBox{
        width: 90%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 10%;
        z-index: 10001;
        background: #fff;
        .slide-first{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            
            .slide-title{
                width: 100%;
                height: 2.5rem;
                line-height: 2.5rem;
                text-align: center;
                flex-shrink: 0;
            }
            .slide-filtrate{
                width: 100%;
                flex: 1;
                overflow: hidden;
                overflow-y: scroll;
                .bar{
                    width: 100%;
                    padding: .5rem 0 .5rem 0;
                    border-top: 1px solid #cccccc;
                    .slide-bar{
                        height: 2rem;
                        display: flex;
                        padding: 0 .7rem;
                        line-height: 2rem;
                        text-align: right;
                        .title{
                            display: inline-block;
                            width: 7rem;
                            font-size: .8rem;
                            text-align: left;
                        }
                        .selected{
                            display: block;
                            flex: 1;
                            white-space: nowrap;
                            font-size: .6rem;
                            color: #f35e5b;
                            
                            img{
                                width: 1rem;
                                height: .7rem;
                            }
                        }
                    }
                    .slide-btns{
                        width: 100%;
                        .clearfix{
                            width: 100%;
                            height: 2rem;
                            overflow: hidden;
                            display: flex;
                            flex-wrap: wrap;
                            .btn-items{
                                background: #F1F2F6;
                                margin-left: .2rem;
                                height: 1.5rem;
                                line-height: 1.5rem;
                                width: 32%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                float: left;
                                font-size: .8rem;
                                border-radius: .4rem;
                                margin-top: .5rem;
                                span{
                                    height: 100%;
                                    display: block;
                                    text-align: center;
                                    line-height: 1.5rem;
                                    background: #f1f2f6;
                                    border-radius: 5px;
                                    border: 1px solid #f1f2f6;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                            }
                            .mint-checklist{
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                .mint-checklist-title{
                                    display: none;
                                }
                                a{
                                    width: 33.3%;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    .mint-cell-title{
                                        width: 100%;
                                        border-radius: .4rem;
                                        .mint-checkbox-label{
                                            font-size: .7rem;
                                        }
                                    }
                                    
                                    .mint-checkbox-core{
                                        // background-color: #ffffff;
                                        border-color: #cccccc;
                                        width: .6rem;
                                        height: .6rem;
                                    }
                                }
                            }
                            .mint-radiolist{
                                width: 100%;
                                height: auto;
                                display: flex;
                                flex-wrap: wrap;
                                .mint-radiolist-title{
                                    display: none;
                                }
                                a{
                                    width: 33.3%;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    .mint-radio-core{
                                        width: .6rem;
                                        height: .6rem;
                                    }
                                    .mint-radio-label{
                                        font-size: .7rem;
                                    }
                                }
                            }
                            .active{
                                border: 1px solid #cccccc;
                                border-radius: .4rem;
                                background: #fff;
                                span{
                                    display: inline-block;
                                    color: #f23030;
                                    width: 100%;
                                    height: 100%;
                                    i{
                                        display: inline-block;
                                        background: url(../../assets/images/datalist/chose_red_icon.png) no-repeat center center;
                                        background-size: .8rem .6rem;
                                        width: .8rem;
                                        height: .62rem;
                                        position: relative;
                                        top: -1px;
                                        margin-right: 2px;
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
            .slideBtn{
                width: 100%;
                height: 3rem;
                line-height: 3rem;
                display: flex;
                border-top: 1px solid #cccccc;
                flex-shrink: 0;
                div{
                    width: 50%;
                    text-align: center;
                }
                .submit{
                    background: #09bb07;
                    color: #ffffff;
                }
            }
        }
        .slide-second{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            overflow-y: scroll;
            background: #f3f5f7;
            .sec-head{
                width: 100%;
                height: 2.5rem;
                line-height: 2.5rem;
                display: flex;
                position: relative;
                text-align: center;
                background: #ffffff;
                flex-shrink: 0;
                .back{
                    position: absolute;
                    width: 3rem;
                    height: 3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 25%;
                    }
                }
                .tit{
                    width: 100%;
                }
            }
            ul{
                margin-top: .6rem;
                width: 100%;
                flex: 1;
                background: #ffffff;
                li{
                    width: 100%;
                    border-bottom: 1px solid #eeeeee;
                    height: 3rem;
                    line-height: 3rem;
                    position: relative;
                    span{
                        display: block;
                        width: 100%;
                        color: #000;
                        font-size: .9rem;
                        padding-left: 0.7rem;
                    }
                }
                .active{
                    
                    span{
                        color: #f35e5b;
                        position: relative;
                    }
                    i{
                        display: block;
                        background: url(../../assets/images/datalist/chose_redbig_icon.png) no-repeat center center;
                        background-size: 1.5rem 1rem;
                        width: 1rem;
                        height: 1rem;
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                    }
                }
            }
        }
    }
    .mark{
        z-index: 10000;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .toTop{
        width: 3rem;
        height: 3rem;
        z-index: 99;
        cursor: pointer;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mask{
        z-index: 10000;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
    }
    .showModel{
        width: 80%;
        min-height: 1rem;
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
        /* overflow: hidden; */
        display: none;
        position: fixed;
        left: 50%;
        top: 30%;
        margin-left: -40%;
        z-index: 10001;
        .dataTip{
            p{
                padding: 3.2rem 0 1.4rem;
                font-size: 0.9rem;
                color: #999;
                background: url(../../assets/images/datalist/info_icon.png) no-repeat center 0.86rem;
                background-size: 1.8rem 2rem;
            }
            .viewBtn-sure{
                font-size: 1rem;
                border-top: 1px solid #d2d3d5;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 2rem;
                min-height: 2rem;
                width: 100%;
                color: #00cc00;
            }
        }
    }
    .mint-checkbox-input:checked + .mint-checkbox-core, .mint-radio-input:checked + .mint-radio-core{
        background-color: #f35e5b;
        border-color: #f35e5b;
    }
    
}
</style>
