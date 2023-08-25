import Vue from "vue";
import VueRouter from 'vue-router';

import Login from "./components/Login.vue"
import Admin from "./components/Admin/Admin.vue"
import Dashboard from "./components/Admin/Dashboard.vue"
import Sms from "./components/Admin/Sms.vue"


window.Vue = require('vue');

Vue.use(VueRouter);

Vue.component("login", Login);
Vue.component("admin", Admin);
Vue.component("dashboard", Dashboard);
Vue.component("sms", Sms);


const routes = [
    { path: '', component: Login },
    {
        path: '/admin', component: Admin, children: [
          { path: 'dashboard', component: Dashboard },
          { path: 'sms', component: Sms }
        ]
      },
  ];

  const router = new VueRouter({
    mode: 'history',
    routes,
  });

const app = new Vue({
    el: "#app",
    router,
});
