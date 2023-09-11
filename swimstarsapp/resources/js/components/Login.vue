<template>
    <div>
        this is login component
        <button @click="redirectToDashboard">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToDashboard() {
            this.$router.push("/admin/dashboard");
        },
    },
};
</script>
