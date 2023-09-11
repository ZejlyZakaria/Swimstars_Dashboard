<template>
    <div
        class="bg-white rounded-[10px] block lg:flex items-center justify-between shadow mb-4 px-4 py-2"
    >
        <div class="text-black font-bold text-xl lg:mb-0 mb-2">
            Salut {{ userName }}👋!
        </div>
        <div class="flex justify-between items-center">
            <div class="mr-4">
                <select
                    id="franchises"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 focus:outline-none pr-8"
                >
                    <option value="-1" selected>Toutes les franchises.</option>
                    <option></option>
                </select>
            </div>
            <div class="mr-4">
                <select
                    id="langues"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 focus:outline-none pr-8"
                >
                    <option value="-1" selected>langues</option>
                    <option>francais</option>
                    <option>espagnol</option>
                </select>
            </div>
            <div
                class="text-md rounded-full bg-black text-white text-center w-10 h-10"
            >
                Z
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        userName() {
            return this.$route.params.userName || "Guest";
        },
    },
};
</script>
