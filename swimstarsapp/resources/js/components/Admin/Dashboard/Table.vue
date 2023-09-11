<template>
    <div
        class="bg-white rounded-[20px] drop-shadow-md my-5 px-4 py-3 border border-gray-300"
        id="caClassementDiv"
    >
        <div class="flex items-center justify-between">
            <div class="text-black nodark:text-white font-semibold text-sm">
                Chiffre d'affaire
            </div>
            <div id="sortCA" class="cursor-pointer">
                <svg
                    class="w-7 h-7 fill-black nodark:fill-white"
                    viewBox="0 0 76 76"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    baseProfile="full"
                    enable-background="new 0 0 76.00 76.00"
                    xml:space="preserve"
                >
                    <path
                        fill-opacity="1"
                        stroke-width="0.2"
                        stroke-linejoin="round"
                        d="M 23.9999,54L 23.9999,29.25L 16,37.25L 16,26.75L 27.9999,14.75L 40,26.75L 40,37.25L 31.9999,29.25L 31.9999,54L 23.9999,54 Z M 52,22L 52,46.75L 60,38.75L 60,49.25L 48,61.25L 36,49.2499L 36,38.7499L 44,46.75L 44.0001,22L 52,22 Z "
                    />
                </svg>
            </div>
        </div>
        <div class="overflow-x-hidden relative mt-3 max-h-[10rem]">
            <table
                class="w-full text-sm text-left text-gray-500 nodark:text-gray-400"
                style="table-layout: fixed"
            >
                <thead
                    class="text-xs text-gray-700 nodark:text-gray-200 uppercase bg-gray-50 nodark:bg-gray-700 nodark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="py-3" width="5%">#</th>
                        <th scope="col" class="py-3 w-[75%] sm:w-[85%]">
                            FRANCHISE
                        </th>
                        <th scope="col" class="py-3 w-[20%] sm:w-[10%]">
                            TOTAL
                        </th>
                    </tr>
                </thead>
                <tbody
                    class="relative text-xs overflow-y-scroll overflow-x-hidden max-h-[8.5rem]"
                >
                    <tr
                        class="bg-white nodark:bg-slate-800 space-x-2 border-b nodark:bg-gray-800"
                    >
                        <th
                            scope="row"
                            class="py-2 font-medium text-gray-900 whitespace-nowrap nodark:text-white"
                        >
                            1
                        </th>
                        <th
                            scope="row"
                            class="py-2 truncate font-medium text-gray-900 nodark:text-gray-100 whitespace-nowrap nodark:text-white"
                        >
                            Franchise Name
                        </th>
                        <td class="py-2">Price€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {};
</script>
