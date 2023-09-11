<template>
    <div class="flex bg-slate-50">
        <sidebar></sidebar>
        <div class="w-[80%] home-section">
            <topbar></topbar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from "../Sidebar.vue";
import Topbar from "../Topbar.vue";
import Dashboard from "./Dashboard/Dashboard.vue";

export default {
    components: {
        Sidebar,
        Topbar,
        Dashboard,
    },
};
</script>
