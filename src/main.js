import Vue from "vue";
import App from "./App.vue";

import router from "./routers.js";
import "./assets/css/common.css";

import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import MintUi from "mint-ui";
import "mint-ui/lib/style.css";



Vue.use(ElementUi);
Vue.use(MintUi);
// Vue.use(MuseUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    //NProgress.start();
    const nextRoute = ["/login"];
    if (to.path === "/login") {
        sessionStorage.removeItem("user");
        console.log("asa");
    }

    let user = JSON.parse(sessionStorage.getItem("user"));
    if (nextRoute.indexOf(to.path) !== -1) {
        next();
    } else if (!user && to.path !== "/login") {
        next({ path: "/login" });
    } else {
        next();
    }
});


new Vue({
    router,
    render: h => h(App),
}).$mount("#app")
