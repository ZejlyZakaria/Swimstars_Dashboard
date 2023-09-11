<template>
    <div>
        <div
            class="bg-orangecolor rounded-[10px] drop-shadow-md border border-gray-200 px-4 py-3 text-left mb-[16px] h-full"
            id="caDiv"
        >
            <div class="flex items-center justify-between">
                <div class="text-black font-semibold text-sm">
                    Chiffre d'affaire
                </div>
                <div class="flex items-center space-x-4">
                    <svg
                        class="fill-green-500 w-5 h-5 block m-auto"
                        viewBox="0 0 96 96"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title />
                        <path
                            d="M90,15.75H66a6,6,0,0,0,0,12h9.5156L54,49.2656,34.2422,29.5078a5.9979,5.9979,0,0,0-8.4844,0l-24,24a5.9994,5.9994,0,0,0,8.4844,8.4844L30,42.2344,49.7578,61.9922a5.9979,5.9979,0,0,0,8.4844,0L84,36.2344V45.75a6,6,0,0,0,12,0v-24A5.9966,5.9966,0,0,0,90,15.75Z"
                        />
                    </svg>
                    <select
                        id="selectCA"
                        class="block p-2 w-[5rem] border-0 text-sm text-gray-900 bg-gray-100 rounded-lg focus:ring-0"
                    >
                        <option value="30j">30j</option>
                        <option value="60j">60j</option>
                        <option value="90j">90j</option>
                        <option value="180j">180j</option>
                        <option value="1 an">1 an</option>
                    </select>
                </div>
            </div>
            <div class="my-6">
                <trend
                    :data="4567"
                    :gradientDirection="top"
                    :gradient="['#2c3e50', '#3a86ff', '#6fa8dc']"
                    :padding="1"
                    :radius="1"
                    :stroke-width="8"
                    :stroke-linecap="butt"
                    auto-draw
                    smooth
                >
                </trend>
            </div>
            <div class="text-black font-extrabold text-3xl mb-2">1234€</div>
            <div class="text-gray-700 font-medium text-md mb-2">
                Total: <b>3333€</b>
            </div>
            <div class="text-gray-700 font-medium text-md">
                Total F:
                <b>90855789€</b>
            </div>
        </div>

        <!-- parrainage -->
        <div
            class="bg-bluecolor rounded-[10px] drop-shadow-md border border-gray-200 px-4 py-3 text-left"
            id="parrainageDiv"
        >
            <div
                class="text-black font-semibold text-sm mb-2"
            >
                Parrainage
            </div>
            <div class="flex items-center justify-between">
                <div class="text-black font-bold text-2xl">
                    FREECD
                </div>
                <div
                    class="text-black font-semibold text-lg"
                >
                    123
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
