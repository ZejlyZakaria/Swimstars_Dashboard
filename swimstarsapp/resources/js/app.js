import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import Admin from "./components/Admin/Admin.vue";

// Dashboard components
import Dashboard from "./components/Admin/Dashboard/Dashboard.vue";
import SmartlistDetails from "./components/Admin/Dashboard/SmarlistDetails.vue";
import Table from "./components/Admin/Dashboard/Table.vue";
import DashboardRightSide from "./components/Admin/Dashboard/DashboardRightSide";

// Sms components
import Sms from "./components/Admin/Sms/Sms.vue";
import SmsRightSide from "./components/Admin/Sms/SmsRightSide.vue";

// Auto Sms components
import AutoSms from "./components/Admin/AutoSms/AutoSms.vue";
import AutoSmsRightSide from "./components/Admin/AutoSms/AutoSmsRightSide.vue";

// Projects components
import Projects from "./components/Admin/Projects/Projects.vue";
import ProjectRightSide from "./components/Admin/Projects/ProjectRightSide.vue";

// Compte rendu
import Report from "./components/Admin/Report/Report.vue";

// Staff
import Staff from "./components/Admin/Staff/Staff.vue";

// Franchises
import Franchises from "./components/Admin/Franchises/Franchises.vue";

// Publicity
import Publicity from "./components/Admin/Publicity/Publicity.vue";

// NPS
import NPS from "./components/Admin/NPS/NPS.vue";

window.Vue = require("vue");

Vue.use(VueRouter);

Vue.component("login", Login);
Vue.component("admin", Admin);

Vue.component("dashboard", Dashboard);
Vue.component("smartlist-details", SmartlistDetails);
Vue.component("dashboard-table", Table);
Vue.component("dashboard-right-side", DashboardRightSide);

Vue.component("sms", Sms);
Vue.component("sms-right-side", SmsRightSide);

Vue.component("autosms", AutoSms);
Vue.component("autosms-right-side", AutoSmsRightSide);

Vue.component("projects", Projects);
Vue.component("project-right-side", ProjectRightSide);

Vue.component("compte-rendu", Report);

Vue.component("staff", Staff);

Vue.component("franchises", Franchises);

Vue.component("publicity", Publicity);

Vue.component("nps", NPS);

const routes = [
    { path: "", component: Login },
    {
        path: "/admin",
        component: Admin,
        children: [
            { path: "dashboard", component: Dashboard },
            { path: "sms", component: Sms },
            { path: "autosms", component: AutoSms },
            { path: "projects", component: Projects },
            { path: "compte-rendu", component: Report },
            { path: "staff", component: Staff },
            { path: "franchises", component: Franchises },
            { path: "publicity", component: Publicity },
            { path: "nps", component: NPS },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

const app = new Vue({
    el: "#app",
    router,
});
