<template>
    <div class="schAll">
        <!-- 宫格 -->
        <div class="place">
            <div class="placeWrap">
                <div class="wid100">
                    <div class="ViewCont1" @click="prodirBtn">
                        <div class="view1" v-if="prodirFir" :style="{background: '#e5f8fa'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/major_icon.png" alt="">
                                <span>专业方向</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="prodirSec" :style="{background: '#e5f8fa'}">
                            <p class="txtHeader" :style="{background: '#4fdae8'}">专业方向</p>
                            <p class="txtContent">
                                <span>{{prodirInp}}</span>
                                <span style="visibility:hidden;">{{prodirInpsz}}</span>
                            </p>
                        </div>
                    </div>

                    <div class="ViewCont1" @click="proTypeBtn">
                        <div class="view1" v-if="proTypeFir" :style="{background: '#eefaf4'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/type_icon.png" alt="">
                                <span>项目类型</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="proTypeSec" :style="{background: '#eefaf4'}">
                            <p class="txtHeader" :style="{background: '#57d897'}">项目类型</p>
                            <p class="txtContent">
                                <span>{{proTypeInp}}</span>
                                <span style="visibility:hidden;">{{proTypeInpsz}}</span>
                            </p>
                        </div>
                    </div>

                    <div class="ViewCont1" @click="proNameBtn">
                        <div class="view1" v-if="proNameFir" :style="{background: '#fef1ef'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/product_icon.png" alt="">
                                <span>产品名称</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="proNameSec" :style="{background: '#fef1ef'}">
                            <p class="txtHeader" :style="{background: '#fa7a64'}">产品名称</p>
                            <p class="txtContent">{{proName}}</p>
                        </div>
                    </div>
                
                    <div class="ViewCont1" @click="enterpriseBtn">
                        <div class="view1" v-if="enterpriseFir" :style="{background: '#faf1fa'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/mode_icon.png" alt="">
                                <span>企业/部门/科研方向</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="enterpriseSec" :style="{background: '#faf1fa'}">
                            <p class="txtHeader" :style="{background: '#cb76cf'}">企业/部门/科研方向</p>
                            <p class="txtContent">{{enterpriseInp}}</p>
                        </div>
                    </div>

                    <div class="ViewCont1" @click="prodiffBtn">
                        <div class="view1" v-if="prodiffFir" :style="{background: '#F0F9F8'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/difficulty_icon.png" alt="">
                                <span>项目相对难度</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="prodiffSec" :style="{background: '#fdf7eb'}">
                            <p class="txtHeader" :style="{background: '#ecb03c'}">项目相对难度</p>
                            <p class="txtContent">{{prodiffInp}}</p>
                        </div>
                    </div>

                    <div class="ViewCont1" @click="prolenBtn">
                        <div class="view1" v-if="prolenFir" :style="{background: '#f5f8ee'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/protime_icon.png" alt="">
                                <span>项目时长</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="prolenSec" :style="{background: '#f5f8ee'}">
                            <p class="txtHeader" :style="{background: '#9cbc5b'}">项目时长</p>
                            <p class="txtContent">
                                <span>{{prolenInp}}</span>
                                <span style="visibility:hidden;">{{prolenInpsz}}</span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="ViewCont1" @click="longOronBtn">
                        <div class="view1" v-if="longOronFir" :style="{background: '#f2faf9'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/remote_icon.png" alt="">
                                <span>远程/实地</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="longOronSec" :style="{background: '#f2faf9'}">
                            <p class="txtHeader" :style="{background: '#82d1c8'}">远程/实地</p>
                            <p class="txtContent">{{longOronInp}}</p>
                        </div>
                    </div>

                    <div class="ViewCont1" @click="proTimeBtn">
                        <div class="view1" v-if="proTimeFir" :style="{background: '#eef6fd'}">
                            <div class="top">
                                <img class="imgIcon" src="../../../assets/images/index/parttime_icon.png" alt="">
                                <span>参与项目时间</span>
                            </div>
                            
                        </div>
                        <div class="view2" v-if="proTimeSec" :style="{background: '#eef6fd'}">
                            <p class="txtHeader" :style="{background: '#59a6ee'}">参与项目时间</p>
                            <p class="txtContent">
                                <span>{{proTimeInp}}</span>
                                <span style="visibility:hidden;">{{proTimeInpsz}}</span>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="signUpBox">
                    <!-- <mt-switch v-model="registration" @click="sfbm">只显示接受报名项目</mt-switch> -->
                    <p :class="{signUp: !isshow, ccc: isshow}" id="signUp" @click="toggleBtn">
                        只显示接受报名项目
                    </p>
                </div>
                <div class="confirmBtn" @click="confirmBtn">搜索产品</div>

            </div>

            <div class="cover" :style="{display: showCoverModel == true ? 'block' : 'none'}" @click="coverToggle"></div>

            <!-- 专业方向 -->
            <div v-if="prodirState" class="coverModel">
                <p class="coverHeader">
                    <span>专业方向</span>
                </p>
                <div class="dataInp">
                    <div class="inpBox">
                        <mu-row gutter>
                            <mu-col span="24" lg="4" sm="6">
                                <mu-auto-complete placeholder="请输入专业方向" :data="optionsMaj" label=" " v-model="schNaData" :data-val="optionsMaj"></mu-auto-complete>
                            </mu-col>
                        </mu-row>
                    </div>
                    <div class="btnGroup">
                        <div class="btn-false" @click="prodircancelBtn">取消</div>
                        <div class="btn-true" @click="prodirSureBtn">确定</div>
                    </div>
                </div>
            </div>

            <!-- 项目类型 -->
            <div v-if="proTypeState" class="inputAch">
                <p class="inpTxt" @click="proTypeHead">项目类型</p>
                <mt-radio
                    v-model="proTypeInp"
                    align="right"
                    :options="opprotype"
                    @change="protypecheck">
                </mt-radio>
            </div>
            <!-- 产品名称 -->
            <div v-if="proNameState" class="coverModel">
                <p class="coverHeader">
                    <span>产品名称</span>
                </p>
                <div class="dataInp">
                    <div class="inpBox">
                        <mu-row gutter>
                            <mu-col span="24" lg="4" sm="6">
                                <mu-auto-complete placeholder="请输入产品名称" :data="sqjgOPtions" label=" " v-model="applyresults" ></mu-auto-complete>
                            </mu-col>
                        </mu-row>
                    </div>
                    <div class="btnGroup">
                        <div class="btn-false" @click="proNamecancelBtn">取消</div>
                        <div class="btn-true" @click="proNameSureBtn">确定</div>
                    </div>
                </div>
            </div>
            <!-- 企业/部门/科研方向 -->
            <div v-if="enterpriseState" class="coverModel">
                <p class="coverHeader">
                    <span>企业/部门/科研方向</span>
                </p>
                <div class="dataInp">
                    <div class="inpBox">
                        <mu-row gutter>
                            <mu-col span="24" lg="4" sm="6">
                                <mu-auto-complete placeholder="请输入企业/部门/科研方向" :data="sqxeOptions" label=" " v-model="applyDegree" ></mu-auto-complete>
                            </mu-col>
                        </mu-row>
                    </div>
                    <div class="btnGroup">
                        <div class="btn-false" @click="enterprisecancelBtn">取消</div>
                        <div class="btn-true" @click="enterpriseSureBtn">确定</div>
                    </div>
                </div>
            </div>
            <div v-if="prodiffState" class="inputAch"><!-- 项目相对难度 -->
                <p class="inpTxt" @click="prodiffStateHead">项目相对难度</p>
                <mt-radio
                    v-model="prodiffInp"
                    align="right"
                    :options="opprodiff"
                    @change="prodiffcheck">
                </mt-radio>
            </div>
            <div v-if="prolenState" class="inputAch"><!-- 项目时长 -->
                <p class="inpTxt" @click="prolenHead">项目时长</p>
                <mt-radio
                    v-model="prolenInp"
                    align="right"
                    :options="opprolen"
                    @change="prolencheck">
                </mt-radio>
            </div>
            <div v-if="longOronState" class="inputAch"> <!-- 远程/实地 -->
                <p class="inpTxt" @click="longOronHead">远程/实地</p>
                <mt-radio
                    v-model="longOronInp"
                    align="right"
                    :options="oplongOron"
                    @change="longOroncheck">
                </mt-radio>
            </div>
            <div v-if="proTimeState" class="inputAch"><!-- 参与项目时间 -->
                <p class="inpTxt" @click="proTimeHead">参与项目时间</p>
                <mt-radio
                    v-model="proTimeInp"
                    align="right"
                    :options="opproTime"
                    @change="proTimecheck">
                </mt-radio>
            </div>
        </div>
    </div>
</template>

<script>
import { getMajorByInput, getTypeByOption, getItemNameByInput, getItemDirection, getlengthName, getJoinTime, getListByParam } from "../../../api";
import { Toast } from 'mint-ui';
import Vue from "vue";
import MuseUI from "muse-ui";
import 'muse-ui/dist/muse-ui.css';
var Bmparams = {};
var Zlparams = {};
Vue.use(MuseUI);
export default {
    name: "schAll",
    data() {
        return {
            showCoverModel: false, // cover---true:显示//false:隐藏
            prodirState: false,
            proTypeState: false,
            isshow: true,
            proNameState: false, // 产品名称---state
            sqjg: [],
            sqxw: [],
            proTypeInp: "",
            proTypeInpsz: "",
            sqjgOPtions: [],
            sqxeOptions: [],
            applyresults: [], // 产品名称
            applyDegree: [], // 项目类型
            enterpriseState: false, // 申请学位---state
            dataMaj: [], // 专业方向--data
            dataType: [],
            prodirInp: "",
            prodirInpsz: "",
            prodirFir: true, // 学校的第一个显示
            prodirSec: false, // 学校的第二个显示
            schNaData: "",
            schNaDatasz: "",
            majorData: "",
            proTypeFir: true,
            proTypeSec: false,
            proNameFir: true,
            proNameSec: false,
            enterpriseFir: true,
            enterpriseSec: false,
            prodiffFir: true,
            prodiffSec: false,
            prolenFir: true,
            prolenSec: false,
            longOronFir: true,
            longOronSec: false,
            proTimeFir: true,
            proTimeSec: false,
            prodiffInp: "",
            prodiffState: false,
            prolenState: false,
            longOronState: false,
            proTimeState: false,
            prolenInp: "",
            prolenInpsz: "",
            longOronInp: "",
            proTimeInps: "",
            proTimeInp: "",
            proTimeInpsz: "",
            pageNo: 1,
            pageSize: 10,
            optionsMaj: [],     // 专业方向
            registration: true,
            opprodiff: ['全部', '标准', '进阶', '高阶'],
            prolen: [],
            opprolen: [],
            opprotype: [],
            oplongOron: ["全部", "远程", "实地"],      // 远程/实地
            proTime: [],
            opproTime: []
        };
    },
    watch: {
        value: function (val, oldvalue) {
            console.log(val);
        }
    },
    mounted () {
        this.toggleBtn();
    },
    methods: {
        // 专业方向
        prodirBtn() {
            console.log("专业方向");
            
            getMajorByInput().then(res => {
                this.dataMaj = res.datas;
                for(let a = 0; a < this.dataMaj.length; a++) {
                    this.optionsMaj.push(this.dataMaj[a].majorName);
                }}).catch(err => {
                    console.log(err);
                });
            
            this.showCoverModel = true; // cover---显示
            this.prodirState = true;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        // 专业方向--取消
        prodircancelBtn () {
            this.prodirInp = "";
            this.prodirInpsz = "";
            this.prodirFir = true;
            this.prodirSec = false;
            this.showCoverModel = false;
            this.prodirState = false;
        },
        // 专业方向--确定
        prodirSureBtn() {
            // console.log(this.schNaData);
            if (this.schNaData != "" && this.schNaData != undefined) {
                this.prodirInp = this.schNaData;
                this.prodirInpsz = this.schNaDatasz;
                this.prodirFir = false;
                this.prodirSec = true;
                this.showCoverModel = false;
                this.prodirState = false;
            } else {
                this.prodirInp = "";
                this.prodirInpsz = "";
                this.prodirFir = true;
                this.prodirSec = false;
                this.showCoverModel = false;
                this.prodirState = false;
            }
            let links = this.dataMaj;
            for(let i = 0; i < links.length; i++) {
                if (links[i].majorName == this.prodirInp) {
                    // console.log("存在---" + this.prodirInp);
                    this.prodirInpsz = links[i].majorId
                } else {
                    // console.log("不存在---" + this.prodirInp);
                }
            }
        },
        // 项目类型
        proTypeBtn() {
            console.log("项目类型");
            getTypeByOption().then(res => {
                this.dataType = res.datas;
                console.log(this.dataType);
                this.opprotype = [];
                for(let i = 0; i < this.dataType.length; i++) {
                    this.opprotype.push(this.dataType[i].typeName);
                }
            }).catch(err => {
                console.log(err);
            });
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = true;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        // 项目类型---取消
        proTypeHead () {
            this.proTypeInp = "";
            this.proTypeFir = true;
            this.proTypeSec = false;
            this.showCoverModel = false;
            this.proTypeState = false;
        },
        protypecheck (value) {
            this.proTypeInp = value;
            this.proTypeFir = false;
            this.proTypeSec = true;
            this.showCoverModel = false;
            this.proTypeState = false;

            let links = this.dataType;
            for(let i = 0; i < links.length; i++) {
                if (links[i].typeName == this.proTypeInp) {
                    // console.log("存在---" + this.proTypeInp);
                    this.proTypeInpsz = links[i].typeId
                } else {
                    // console.log("不存在---" + this.proTypeInp);
                }
            }
        },
        // 项目类型---确定
        proTypeSureBtn() {
            if (this.majorData != "" && this.majorData != undefined) {
                this.proTypeInp = this.majorData;
                this.proTypeFir = false;
                this.proTypeSec = true;
                this.showCoverModel = false;
                this.proTypeState = false;
            } else {
                this.proTypeFir = true;
                this.proTypeSec = false;
                this.showCoverModel = false;
                this.proTypeState = false;
            }
        },
        // 产品名称----取消
        proNamecancelBtn () {
            this.proName = "";
            this.proNameFir = true;
            this.proNameSec = false;
            this.showCoverModel = false;
            this.proNameState = false;
        },
        // 产品名称----确定
        proNameSureBtn() {
            if (this.applyresults != "") {
                this.proName = JSON.stringify(this.applyresults).replace(/"|\[|\]/g,"");
                this.proNameFir = false;
                this.proNameSec = true;
                this.showCoverModel = false;
                this.proNameState = false;
            } else {
                this.proNameFir = true;
                this.proNameSec = false;
                this.showCoverModel = false;
                this.proNameState = false;
            }
        },
        // 产品名称
        proNameBtn() {
            console.log("产品名称");
            getItemNameByInput().then(res => {
                this.sqjg = res.datas;
                this.sqjgOPtions = [];
                for(let i = 0; i < this.sqjg.length; i++) {
                    this.sqjgOPtions.push(this.sqjg[i].itemName);
                }
            }).catch(err => {
                console.log(err);
            });

            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = true;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        // 企业/部门/科研方向
        enterpriseBtn() {
            getItemDirection().then(res => {
                this.sqxw = res.datas;
                this.sqxeOptions = [];
                for(let i = 0; i < this.sqxw.length; i++) {
                    this.sqxeOptions.push(this.sqxw[i].itemDirection);
                }
                }).catch(err => {
                    console.log(err);
                });
            console.log("企业/部门/科研方向");
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = true;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        // 企业/部门/科研方向----取消
        enterprisecancelBtn () {
            this.enterpriseInp = "";
            this.enterpriseFir = true;
            this.enterpriseSec = false;
            this.showCoverModel = false;
            this.enterpriseState = false;
        },
        // 企业/部门/科研方向----确定
        enterpriseSureBtn() {
            if (this.applyDegree != "") {
                this.enterpriseInp = JSON.stringify(this.applyDegree).replace(/"|\[|\]/g, "");
                this.enterpriseFir = false;
                this.enterpriseSec = true;
                this.showCoverModel = false;
                this.enterpriseState = false;
            } else {
                this.enterpriseFir = true;
                this.enterpriseSec = false;
                this.showCoverModel = false;
                this.enterpriseState = false;
            }
        },
        // 项目相对难度
        prodiffBtn() {
            console.log("项目相对难度");
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = true;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        prodiffStateHead () {
            this.showCoverModel = false; // cover---隐藏
            this.prodiffFir = true;
            this.prodiffSec = false;
            this.prodiffState = false;
            this.prodiffInp = "";
        },
        prodiffcheck (value) {
            if (value) {
                this.showCoverModel = false; // cover---隐藏
                this.prodiffFir = false;
                this.prodiffSec = true;
                this.prodiffState = false;
                this.prodiffInp = value;
            }
        },
        // prolenBtn
        prolenBtn() {
            getlengthName().then((res) => {
                this.prolen = res.datas;
                console.log(this.prolen);
                for(let i = 0; i < this.prolen.length; i++) {
                    this.opprolen.push(this.prolen[i].lengthName);
                }
            }).catch(err => {
                console.log(err);
            })
            console.log("项目时长");
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = true;
            this.longOronState = false;
            this.proTimeState = false;
        },
        prolenHead () {
            this.prolenFir = true;
            this.prolenSec = false;
            this.prolenInp = "";
            this.showCoverModel = false; // cover---隐藏
            this.prolenState = false;
        },
        // 项目时长----切换
        prolencheck (value) {
            this.prolenFir = false;
            this.prolenSec = true;
            this.prolenInp = value;
            this.showCoverModel = false; // cover---隐藏
            this.prolenState = false;

            let links = this.prolen;
            for(let i = 0; i < links.length; i++) {
                if (links[i].lengthName == this.prolenInp) {
                    // console.log("存在---" + this.prolenInp);
                    this.prolenInpsz = links[i].lengthId
                } else {
                    // console.log("不存在---" + this.prolenInp);
                }
            }
        },
        // 远程/实地
        longOronBtn() {
            console.log("远程/实地");
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = true;
            this.proTimeState = false;
        },
        longOronHead () {
            this.showCoverModel = false; // cover---隐藏
            this.longOronFir = true;
            this.longOronSec = false;
            this.longOronInp = "";
            this.longOronState = false;
        },
        longOroncheck (value) {
            this.showCoverModel = false; // cover---隐藏
            this.longOronFir = false;
            this.longOronSec = true;
            this.longOronInp = value;
            this.longOronState = false;
        },
        // 参与项目时间
        proTimeBtn() {
            getJoinTime().then((res) => {
                this.proTime = res.datas;
                console.log(this.proTime);
                this.opproTime = [];
                for(let i = 0; i < this.proTime.length; i++) {
                    this.opproTime.push(this.proTime[i].joinTime);
                }
            }).catch(err => {
                console.log(err);
            })
            this.showCoverModel = true; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = true;
        },
        proTimeHead () {
            this.showCoverModel = false; // cover---隐藏
            this.proTimeFir = true;
            this.proTimeSec = false;
            this.proTimeInp = "";
            this.proTimeState = false;
        },
        proTimecheck (value) {
            this.showCoverModel = false; // cover---隐藏
            this.proTimeFir = false;
            this.proTimeSec = true;
            this.proTimeInp = value;
            this.proTimeState = false;

            let links = this.proTime;
            for(let i = 0; i < links.length; i++) {
                if (links[i].joinTime == this.proTimeInp) {
                    // console.log("存在---" + this.proTimeInp);
                    this.proTimeInpsz = links[i].joinId
                } else {
                    // console.log("不存在---" + this.proTimeInp);
                }
            }
        },
        coverToggle () {
            this.showCoverModel = false; // cover---显示
            this.prodirState = false;
            this.proTypeState = false;
            this.proNameState = false;
            this.enterpriseState = false;
            this.prodiffState = false;
            this.prolenState = false;
            this.longOronState = false;
            this.proTimeState = false;
        },
        // 正在报名
        toggleBtn () {
            // Bmparams = {};
            this.isshow = !this.isshow;
            if (this.isshow == true) {
                console.log("false");
                Bmparams.acceptSign = "拒绝" // 接受报名
                console.log(Bmparams);
                sessionStorage.setItem("homeListBm", "no");
            } else {
                console.log("true");
                Bmparams.acceptSign = "正在报名"  // 接受报名
                console.log(Bmparams);
                sessionStorage.setItem("homeListBm", "yes");
            }
        },
        confirmBtn() {
            Zlparams = {
                
            };
            // this.registration ? (params.acceptSign = this.registration) : "", // 接受报名
            this.prodirInpsz ? (Zlparams.major = this.prodirInpsz) : "", // 专业方向
            this.proTypeInpsz ? (Zlparams.itemType = this.proTypeInpsz) : "", // 项目类型
            this.proName ? (Zlparams.itemName = this.proName) : "", // 产品名称
            this.enterpriseInp ? (Zlparams.itemDirection = this.enterpriseInp) : "", // 企业/部门/科研方向
            this.prodiffInp ? (Zlparams.difficulty = this.prodiffInp) : "",         // 项目对比难度
            this.prolenInpsz ? (Zlparams.itemLength = this.prolenInpsz) : "",         // 项目时长
            this.longOronInp ? (Zlparams.remoteOrField = this.longOronInp) : "",     // 远程/实地
            this.proTimeInpsz ? (Zlparams.joinTime = this.proTimeInpsz) : ""

            let params = Object.assign({}, Bmparams, Zlparams);

            console.log(params);
            sessionStorage.setItem("homeParams", JSON.stringify(params));

            getListByParam(params).then((res) => {
                if (res.status == 0) {
                    sessionStorage.setItem("allList", JSON.stringify(res.datas));
                    this.$router.push({ path: "/datalist" });
                } else {
                    // let instance = Toast('获取失败');
                    // setTimeout(() => {
                    //     instance.close();
                    // }, 2000);
                    sessionStorage.setItem("allList", JSON.stringify(res.datas));
                    this.$router.push({ path: "/datalist" });
                }
            })
        },
    }
};
</script>

<style lang="scss">
.schAll {
	width: 100%;
	height: 100%;
	padding: 0.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
    padding-bottom: 5rem;
	.viewTop {
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
	}
	.img-icon {
		width: 0.9rem;
		margin-right: 0.4rem;
	}
	.place {
		width: 100%;
		height: 100%;
		padding-top: 0.5rem;
        position: relative;
		.placeWrap {
			width: 100%;
			height: 100%;
			margin-bottom: 1rem;
			.wid100 {
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				.ViewCont1 {
					width: 48%;
                    height: 23%;
                    margin: 0 1%;
                    
					.view1 {
						width: 98%;
						height: 100%;
						display: flex;
						flex-direction: column;
                        justify-content: center;
                        align-items: center;
						.imgIcon {
                            width: 2rem;
                            height: 1.8rem;
                            margin: auto;
                            display: flex;
                            justify-content: center;
                            align-items: center;
						}
						span {
                            text-align: center;
                            margin-bottom: 20%;
						}
					}
					.view2 {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						.txtHeader {
                            display: inline-block;
                            width: 100%;
                            height: 24%;
                            color: #ffffff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
						}
						.txtContent {
                            padding: 0 1rem;
                            font-size: 1rem;
                            text-align: center;
                            line-height: 2rem;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            margin-top: 1.2rem;
						}
					}
				}
			}
            .signUpBox{
                width: 100%;
                height: 2rem;
                padding-bottom: .5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                .signUp{
                    width: 10rem;
                    height: 2rem;
                    line-height: 2rem;
                    background: url(../../../assets/images/signup-true.png) no-repeat .4rem .4rem;
                    background-size: 1.3rem 1rem;
                    padding-left: 1.8rem;
                    // span{
                    //     padding-left: 1.5rem;
                    // }
                }
                .ccc{
                    width: 10rem;
                    height: 2rem;
                    line-height: 2rem;
                    background: url(../../../assets/images/signup.png) no-repeat .4rem .4rem;
                    background-size: 1.3rem 1rem;
                    padding-left: 1.8rem;
                    // span{
                    //     padding-left: 1.5rem;
                    // }
                }
            }
		}
		.confirmBtn {
			width: 96%;
			height: 2.6rem;
			line-height: 2.6rem;
			margin-left: 2%;
			text-align: center;
			border-radius: 5px;
			background: #09bb07;
			color: #ffffff;
		}
	}
	.cover {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.6);
		.selectbb {
			width: 18rem;
			height: 18rem;
			background: #ffffff;
			border-radius: .4rem;
			margin: 40% auto;
			position: relative;
			.checktop {
				line-height: 2rem;
				text-align: center;
				background: #E8D8B4;
				color: #ffffff;
				border-radius: .4rem .4rem 0 0;
			}
			.mint-checklist{
				width: 100%;
				height: 14rem;
				overflow: hidden;
				overflow-y: scroll;
			}
			.reselect{
				width: 100%;
				height: 6rem;
				overflow: hidden;
				overflow-y: scroll;
				input{
					z-index: 1000;
				}
			}
			.container{
				width: 100%;
				height: 2rem;
				overflow: hidden;
			}
			.sureBtn {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 2rem;
				line-height: 2rem;
				color: #09bb07;
				text-align: center;
				border-top: 1px solid #cccccc;
			}
		}
	}
    .coverModel {
        position: absolute;
        top: -100%;
        left: 0;
        width: 80%;
        height: 10.5rem;
        background: #ffffff;
        margin: 50% auto;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 99;
        overflow: hidden;
        .close{
            position: absolute;
            top: 1.8rem;
            right: 1.2rem;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9;
        }
        .ivu-row {
            width: 90%;
            position: absolute;
            top: 2.6rem;
            left: 5%;
            outline: none;
            border: none;
        }
        .mu-input{
            margin-left: 1rem;
        }
        .schSureBtn {
            position: absolute;
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            border-top: 1px solid #cccccc;
            color: #09bb07;
            bottom: 0;
            left: 0;
        }
        .coverHeader{
            width: 100%;
            height: 6rem;
            background: #ECB03C;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .dataInp{
            width: 100%;
            .inpBox{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .relationInput{
                    width: 84%;
                    margin: 0.4rem 0;
                    padding-left: 0.1rem;
                    padding-top: 0.04rem;
                    height: 2.6rem;
                    line-height: 2.6rem;
                    font-size: 1rem;
                    border: 1px solid #6dd6e2;
                }
            }
            .btnGroup{
                width: 100%;
                height: 3rem;
                line-height: 3rem;
                display: flex;
                flex-direction: row;
                border-top: 1px solid #cccccc;
                div{
                    width: 50%;
                    text-align: center;
                }
                .btn-false{
                    color: #000000;
                }
                .btn-true{
                    background: #09BB07;
                }
            }
        }
    }
    .inputAch {
        position: absolute;
        top: -100%;
        left: 0;
        z-index: 99;
        width: 16rem;
        min-height: 3rem;
        margin: 11rem auto;
        overflow: hidden;
        overflow-y: scroll;
        background: #ffffff;
        border-radius: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .mint-radiolist{
            margin-top: 2rem;
            width: 100%;
            max-height: 13rem;
            overflow: hidden;
            overflow-y: scroll;
            width: 100%;
        }
        p{
            position: absolute;
            top: 0rem;
            left: 0;
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            text-align: center;
            background: #ECB03C;
            color: #ffffff;
            border-radius: .4rem .4rem 0 0;
        }
        .el-date-editor {
            position: absolute;
            top: 3.3rem;
            left: 50%;
            margin-left: -7.5rem;
            width: 15rem;
            .el-input__inner {
                width: 100%;
            }
        }
        .picker {
            width: 100%;
            height: 6rem;
            margin-bottom: 1rem;
        }
        .inputs {
            padding: 1.4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            input {
                width: 90%;
                margin: auto;
            }
        }
        input {
            width: 8rem;
        }
        .sureBtn {
            position: absolute;
            z-index: 100;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2rem;
            text-align: center;
            color: #09bb07;
        }
    }
	.el-picker-panel {
		width: 280px;
	}
	.ivu-select-dropdown{
		width: 18rem;
		height: 8rem;
		overflow: hidden;
		overflow-y: scroll;
	}
	.mu-popover{
		position: absolute;
		top: 5rem;
		left: 0;
		width: 18rem;
		height: 6rem;
        width: 240px;
	}
	.mu-text-field-input{
		padding-left: 1rem;
	}
	.el-popper{
		width: 18rem;
    }
    .el-date-picker{
        width: 12rem;
    }
}
</style>
