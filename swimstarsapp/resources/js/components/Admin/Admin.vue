<template>
    <div class="flex">
        <sidebar></sidebar>
        <div class="flex-1">
            <topbar></topbar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from "../Sidebar.vue";
import Topbar from "../Topbar.vue";
import Dashboard from "./Dashboard.vue";
export default {
    components: {
        Sidebar,
        Topbar,
        Dashboard
    },
};
</script>
