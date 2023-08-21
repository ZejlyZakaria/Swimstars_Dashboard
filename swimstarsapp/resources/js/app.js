import Vue from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";

window.Vue = require('vue');
Vue.component("example-component", ExampleComponent);

const app = new Vue({
    el: "#app"
});
