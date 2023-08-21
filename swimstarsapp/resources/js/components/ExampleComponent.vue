<template>
    <div>
        <h2>Je suis un composant Vue</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Bonjour depuis le composant Vue !",
        };
    },
};
</script>
