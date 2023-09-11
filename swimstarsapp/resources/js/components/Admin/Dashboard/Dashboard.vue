<template>
    <div class="lg:flex lg:justify-between block">
        <div class="dashboard-left-side lg:w-[75%] w-full">
            <div class="header flex justify-between items-center mb-[16px]">
                <div class="text-neutral-900 text-lg font-semibold">
                    Smartlists
                </div>
                <div class="flex items-center">
                    <div>
                        <input
                            id="startDate"
                            name="start"
                            type="date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 focus:outline-none"
                            placeholder="Date de début"
                        />
                    </div>
                    <div class="mx-4 text-gray-700 text-xs">au</div>
                    <div>
                        <input
                            id="startDate"
                            name="start"
                            type="date"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 focus:outline-none"
                            placeholder="Date de début"
                        />
                    </div>
                    <div
                        class="hidden sm:block bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-xs border border-orange-500 rounded-lg p-2 ml-2 cursor-pointer"
                    >
                        Appliquer
                    </div>
                </div>
            </div>

            <!-- Smartlist-details component -->
            <div
                class="smartlist-details grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-[16px]"
            >
                <smartlist-details></smartlist-details>
                <smartlist-details></smartlist-details>
                <smartlist-details></smartlist-details>
                <smartlist-details></smartlist-details>
            </div>
            <!-- End Smartlist-details component -->

            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-[16px]"
            >
                <div
                    class="convention-rate bg-white rounded-[20px] drop-shadow-md px-4 py-3 border border-gray-200"
                >
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-black font-semibold text-lg">
                            Taux de convention
                        </div>
                        <select
                            id="selectTaux"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2 focus:outline-none"
                        >
                            <option value="30j">30j</option>
                            <option value="60j">60j</option>
                            <option value="90j">90j</option>
                            <option value="180j">180j</option>
                            <option value="1 an">1 an</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="mb-2">
                                <div
                                    class="text-black  font-bold text-lg"
                                >
                                    111
                                </div>
                                <div
                                    class="text-black  font-medium text-sm"
                                >
                                    Cours découverte vendus
                                </div>
                            </div>
                            <div>
                                <div
                                    class="text-black  font-bold text-lg"
                                >
                                    999
                                </div>
                                <div
                                    class="text-black  font-medium text-sm"
                                >
                                    Cours découverte convertis
                                </div>
                            </div>
                        </div>
                        <div>chart cercle</div>
                    </div>
                </div>
                <div
                    class="convention-rate bg-white rounded-[20px] drop-shadow-md px-4 py-3 border border-gray-200"
                >
                    <div class="mb-2 text-black font-semibold text-lg">
                        Taux de remplissage
                    </div>
                    <div class="text-black font-extrabold text-3xl mb-2">
                        48%
                    </div>
                    <div class="text-black font-medium text-sm">
                        Nb de places:
                        <span class="font-semibold">5677</span>
                    </div>
                    <div class="mt-4 mb-4">
                        <div class="flex items-center justify-between">
                            <div class="text-left text-black ">
                                <div class="text-xs font-medium">
                                    Non réservées
                                </div>
                                <div class="text-lg font-bold">1000</div>
                            </div>
                            <div
                                class="text-sm font-bold text-black "
                            >
                                vs
                            </div>
                            <div
                                class="text-right text-black "
                            >
                                <div class="text-xs font-medium">Réservées</div>
                                <div class="text-lg font-bold">2000</div>
                            </div>
                        </div>
                        <div class="flex w-full justify-between items-center">
                            <div
                                class="text-gray-400 text-base nodark:text-neutral-100"
                            >
                                33%
                            </div>
                            <div
                                class="text-gray-400 text-base nodark:text-neutral-100"
                            >
                                66%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Table component -->
            <dashboard-table></dashboard-table>
            <!-- End Table component -->
        </div>
        <div class="dashboard-right-side lg:w-[24%] w-full  h-full mr-2 ml-2">
            <dashboard-right-side></dashboard-right-side>
        </div>
    </div>
</template>

<script>
export default {};
</script>
