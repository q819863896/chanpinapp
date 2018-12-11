import Vue from "vue";
import Router from "vue-router";

import login from "./components/account/login.vue";
import home from "./components/views/home/home.vue";
import dataList from "./components/views/datalist.vue";
import viewlist from "./components/views/viewlist.vue";
import detail from "./components/views/detail.vue";
import compare from "./components/views/compare.vue";
import compactPdf from "./components/views/compactPdf.vue";
import stuPdf from "./components/views/stuPdf.vue";

import a from "./components/views/vvv/a.vue";
import b from "./components/views/vvv/b.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/a",
            name: "a",
            component: a
        },
        {
            path: "/b",
            name: "b",
            component: b
        },
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/dataList",
            name: "dataList",
            component: dataList
        },
        {
            path: "/viewlist",
            name: "viewlist",
            component: viewlist
        },
        {
            path: "/compare",
            name: "compare",
            component: compare
        },
        {
            path: "/detail",
            name: "detail",
            component: detail
        },
        {
            path: "/compactPdf",
            name: "compactPdf",
            component: compactPdf
        },
        {
            path: "/stuPdf",
            name: "stuPdf",
            component: stuPdf
        }
    ]
})