import Vue from "vue";
import Router from "vue-router";

import login from "./components/account/login.vue";
// import home from "./components/views/home/home.vue";
// import dataList from "./components/views/datalist.vue";
// import viewlist from "./components/views/viewlist.vue";
// import detail from "./components/views/detail.vue";
// import compare from "./components/views/compare.vue";
import compactPdf from "./components/views/compactPdf.vue";
import stuPdf from "./components/views/stuPdf.vue";

import a from "./components/views/vvv/a.vue";
import b from "./components/views/vvv/b.vue";
import { resolve } from "path";

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
            // name: "home",
            // component: home
            component: resolve => require(["./components/views/home/home.vue"], resolve)
        },
        {
            path: "/dataList",
            // name: "dataList",
            // component: dataList
            component: resolve => require(["./components/views/datalist.vue"], resolve)
        },
        {
            path: "/viewlist",
            // name: "viewlist",
            // component: viewlist
            component: resolve => require(["./components/views/viewlist.vue"], resolve)
        },
        {
            path: "/compare",
            // name: "compare",
            // component: compare
            component: resolve => require(["./components/views/compare.vue"], resolve)
        },
        {
            path: "/detail",
            // name: "detail",
            // component: detail
            component: resolve => require(["./components/views/detail.vue"], resolve)
        },
        {
            path: "/compactPdf",
            name: "compactPdf",
            component: compactPdf
            // component: resolve => require(["./components/views/compactPdf.vue"], resolve)
        },
        {
            path: "/stuPdf",
            name: "stuPdf",
            component: stuPdf
            // component: resolve => require(["./components/views/stuPdf.vue"], resolve)
        }
    ]
})