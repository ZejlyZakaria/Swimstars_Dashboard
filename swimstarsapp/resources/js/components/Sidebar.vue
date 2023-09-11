<template>
    <div class="sidebar bg-slate-100">
        <div class="logo-details">
            <i class="bx bx-menu"></i>
            <span class="logo_name">SWIMSTARS</span>
        </div>
        <ul class="nav-links">
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToDashboard">
                    <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        id="meteor-icon-kit__solid-dashboard"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke=""
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 0H7C8.10457 0 9 0.89543 9 2V7C9 8.10457 8.10457 9 7 9H2C0.89543 9 0 8.10457 0 7V2C0 0.89543 0.89543 0 2 0ZM2 11H7C8.10457 11 9 11.8954 9 13V22C9 23.1046 8.10457 24 7 24H2C0.89543 24 0 23.1046 0 22V13C0 11.8954 0.89543 11 2 11ZM13 0H22C23.1046 0 24 0.89543 24 2V13C24 14.1046 23.1046 15 22 15H13C11.8954 15 11 14.1046 11 13V2C11 0.89543 11.8954 0 13 0ZM13 17H22C23.1046 17 24 17.8954 24 19V22C24 23.1046 23.1046 24 22 24H13C11.8954 24 11 23.1046 11 22V19C11 17.8954 11.8954 17 13 17Z"
                                fill="#ff0000"
                            ></path>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold"
                        >Dashboard</span
                    >
                </a>

            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToSms">
                    <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 1024 1024"
                        class="icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M789.333333 832H234.666667l-128 128V234.666667c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z"
                                fill="#009688"
                            ></path>
                            <path
                                d="M512 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                                fill="#FFFFFF"
                            ></path>
                            <path
                                d="M725.333333 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                                fill="#FFFFFF"
                            ></path>
                            <path
                                d="M298.666667 469.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                                fill="#FFFFFF"
                            ></path>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold">SMS</span>
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black"
                            @click="redirectToSms"
                            >SMS</a
                        >
                    </li>
                </ul>
            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToProjects">
                    <svg
                        fill="#00a3cc"
                        width="22px"
                        height="22px"
                        viewBox="0 0 36.00 36.00"
                        version="1.1"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        stroke="#00a3cc"
                        stroke-width="0.00036"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>tasks-solid-badged</title>
                            <path
                                class="clr-i-solid--badged clr-i-solid-path-1--badged"
                                d="M30,13.5a7.49,7.49,0,0,1-6.46-3.7H11.25V8a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h2.26a7.53,7.53,0,0,1-.07-1,7.53,7.53,0,0,1,.08-1.05h-.5a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V13.43A7.52,7.52,0,0,1,30,13.5Zm-4.23,3.71-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"
                            ></path>
                            <circle
                                class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"
                                cx="30"
                                cy="6"
                                r="5"
                            ></circle>
                            <rect
                                x="0"
                                y="0"
                                width="36"
                                height="36"
                                fill-opacity="0"
                            ></rect>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold">Projets</span>
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black font-semibold"
                            @click="redirectToProjects"
                            >Projets</a
                        >
                    </li>
                </ul>
            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToStaff">
                    <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        stroke-width="0.00015000000000000001"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M5.5 0C3.56717 0 2 1.56567 2 3.49804C2 5.43041 3.56717 6.99609 5.5 6.99609C7.43283 6.99609 9 5.43041 9 3.49804C9 1.56567 7.43283 0 5.5 0Z"
                                fill="#000e75"
                            ></path>
                            <path
                                d="M3.5 8.99414C1.56711 8.99414 0 10.5605 0 12.4936V14.9909H11V12.4936C11 10.5605 9.43289 8.99414 7.5 8.99414H3.5Z"
                                fill="#000e75"
                            ></path>
                            <path
                                d="M12.5 10H12V15H15V12.5C15 11.1193 13.8807 10 12.5 10Z"
                                fill="#000e75"
                            ></path>
                            <path
                                d="M11.5 4C10.1193 4 9 5.11929 9 6.5C9 7.88071 10.1193 9 11.5 9C12.8807 9 14 7.88071 14 6.5C14 5.11929 12.8807 4 11.5 4Z"
                                fill="#000e75"
                            ></path>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold">Staff</span>
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black font-semibold"
                            @click="redirectToDashboard"
                            >Staff</a
                        >
                    </li>
                </ul>
            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToFranchises">
                    <svg
                        width="22px"
                        height="22px"
                        viewBox="0 0 1024 1024"
                        class="icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M841.7 915.2L518.5 797.3 183.1 915.2V107.1h658.6z"
                                fill="#247561"
                            ></path>
                            <path
                                d="M849.7 926.7L518.4 805.8 175.1 926.5V99.1h674.5v827.6zM191.1 115.1v788.8l327.4-115.1 315.1 115V115.1H191.1z"
                                fill="#0A0408"
                            ></path>
                            <path
                                d="M801.6 868.3l-18.2-6.6 2.2-6.2v-6.6h2.5l0.8-2.3 6.2 2.3h6.5zM256.2 856.6l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m512.4-0.3l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-482.8-10.2l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m453.3-0.6l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-423.6-9.8l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m394.1-1l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-364.5-9.4l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m334.9-1.4l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-305.2-9.1l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m275.7-1.6l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-246.1-8.8l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m216.6-2l-14.8-5.4 5.5-15 14.8 5.4-5.5 15zM434.1 794l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m157.4-2.4l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-127.8-8l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m98.2-2.8l-14.8-5.4 5.5-15 14.8 5.4-5.5 15z m-68.5-7.7l-5.3-15.1 14.8-5.2 5.3 15.1-14.8 5.2z m39-3l-14.8-5.4 5.5-15 14.8 5.4-5.5 15zM223.2 868.2v-19.3h6.6l6.2-2.2 0.8 2.2h2.4v6.6l2.2 6.3zM239.2 833.2h-16v-15.7h16v15.7z m0-31.4h-16V786h16v15.8z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16V629h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V519z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V362z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16V252h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7zM223.2 157.5h16v16h-16zM770 173.5h-15.6v-16H770v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0H692v-16h15.6v16z m-31.3 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0H567v-16h15.6v16z m-31.3 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16H489v16z m-31.3 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16z m-31.3 0h-15.6v-16h15.6v16z m-31.2 0H286v-16h15.6v16z m-31.2 0h-15.6v-16h15.6v16zM785.6 157.5h16v16h-16zM801.6 833.2h-16v-15.7h16v15.7z m0-31.4h-16V786h16v15.8z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16V629h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V519z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16V362z m0-31.5h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16V252h16v15.7z m0-31.4h-16v-15.7h16v15.7z m0-31.4h-16v-15.7h16v15.7z"
                                fill="#0A0408"
                            ></path>
                            <path
                                d="M752.2 791.2l-235.4-85.9-244.2 85.9V196.6h479.6z"
                                fill="#55B7A8"
                            ></path>
                            <path
                                d="M512.4 305.7l42.9 86.8 95.8 13.9-69.4 67.6 16.4 95.5-85.7-45.1-85.7 45.1 16.4-95.5-69.4-67.6 95.8-13.9z"
                                fill="#EBB866"
                            ></path>
                            <path
                                d="M608.7 584.1l-96.3-50.6-96.3 50.6 18.4-107.3-77.9-76 107.7-15.7 48.2-97.6 48.2 97.6 107.7 15.7-77.9 76 18.2 107.3z m-96.3-68.7l75.1 39.5-14.3-83.6 60.7-59.2-83.9-12.2-37.5-76.1-37.5 76.1-84.1 12.1 60.7 59.2-14.3 83.6 75.1-39.4z"
                                fill="#0A0408"
                            ></path>
                            <path
                                d="M205.7 140h50.9v50.9h-50.9z"
                                fill="#DC444A"
                            ></path>
                            <path
                                d="M264.6 198.9h-66.9V132h66.9v66.9z m-50.9-16h34.9V148h-34.9v34.9z"
                                fill="#0A0408"
                            ></path>
                            <path
                                d="M768.2 140h50.9v50.9h-50.9z"
                                fill="#DC444A"
                            ></path>
                            <path
                                d="M827.1 198.9h-66.9V132h66.9v66.9z m-50.9-16h34.9V148h-34.9v34.9z"
                                fill="#0A0408"
                            ></path>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold"
                        >Franchises</span
                    >
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black font-semibold"
                            @click="redirectToDashboard"
                            >Franchises</a
                        >
                    </li>
                </ul>
            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToPublicites">
                    <svg
                        height="22px"
                        width="22px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xml:space="preserve"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                style="fill: #9baaab"
                                d="M136.284,350.597H93.528c-4.427,0-8.017,3.588-8.017,8.017v42.756c0,4.428,3.589,8.017,8.017,8.017 h42.756c4.427,0,8.017-3.588,8.017-8.017v-42.756C144.301,354.185,140.711,350.597,136.284,350.597z"
                            ></path>
                            <path
                                style="fill: #687f82"
                                d="M136.284,350.597h-8.551v58.789h8.551c4.427,0,8.017-3.588,8.017-8.017v-42.756 C144.301,354.185,140.711,350.597,136.284,350.597z"
                            ></path>
                            <path
                                style="fill: #383838"
                                d="M12.642,300.312c-3.013,1.718-4.501,5.024-3.992,8.245l25.653,162.472 c0.616,3.897,3.974,6.766,7.918,6.766h56.117c4.427,0,8.017-3.589,8.017-8.017V299.29H16.792 C15.347,299.29,13.898,299.597,12.642,300.312z"
                            ></path>
                            <path
                                style="fill: #4acfd9"
                                d="M110.63,196.676H16.568c-4.427,0-8.017,3.589-8.017,8.017v102.614c0,4.427,3.589,8.017,8.017,8.017 h102.079v-110.63C118.647,200.266,115.058,196.676,110.63,196.676z"
                            ></path>
                            <path
                                style="fill: #0295aa"
                                d="M8.551,247.449v59.858c0,4.427,3.589,8.017,8.017,8.017h102.079v-67.875H8.551z"
                            ></path>
                            <path
                                style="fill: #ffd1a9"
                                d="M379.552,26.63c-2.576-1.402-5.715-1.289-8.182,0.304L106.284,197.957l-0.151,115.987 l265.086,179.574c1.352,0.916,2.921,1.38,4.497,1.38c1.286,0,2.577-0.309,3.756-0.934c2.621-1.391,4.26-4.115,4.26-7.082V33.67 C383.733,30.735,382.129,28.035,379.552,26.63z"
                            ></path>
                            <path
                                style="fill: #fd6a33"
                                d="M106.22,247.449l-0.087,66.495l265.086,179.574c1.352,0.916,2.921,1.38,4.497,1.38 c1.286,0,2.577-0.309,3.756-0.934c2.621-1.391,4.26-4.115,4.26-7.082V247.449L106.22,247.449L106.22,247.449z"
                            ></path>
                            <path
                                style="fill: #4acfd9"
                                d="M409.921,0h-76.96c-4.428,0-8.017,3.588-8.017,8.017v495.967c0,4.428,3.588,8.017,8.017,8.017h76.96 c4.428,0,8.017-3.588,8.017-8.017V8.017C417.937,3.588,414.349,0,409.921,0z"
                            ></path>
                            <path
                                style="fill: #0295aa"
                                d="M324.944,247.449v256.534c0,4.428,3.588,8.017,8.017,8.017h76.96c4.428,0,8.017-3.588,8.017-8.017 V247.449H324.944z"
                            ></path>
                            <g>
                                <path
                                    style="fill: #ffffff"
                                    d="M384.267,152.852c-4.428,0-8.017-3.588-8.017-8.017V42.221c0-4.428,3.588-8.017,8.017-8.017 s8.017,3.588,8.017,8.017v102.614C392.284,149.264,388.696,152.852,384.267,152.852z"
                                ></path>
                                <path
                                    style="fill: #ffffff"
                                    d="M384.267,229.812c-4.428,0-8.017-3.588-8.017-8.017V179.04c0-4.428,3.588-8.017,8.017-8.017 s8.017,3.588,8.017,8.017v42.756C392.284,226.224,388.696,229.812,384.267,229.812z"
                                ></path>
                            </g>
                            <g>
                                <path
                                    style="fill: #f0353d"
                                    d="M495.432,255.466h-34.205c-4.428,0-8.017-3.588-8.017-8.017c0-4.428,3.588-8.017,8.017-8.017h34.205 c4.428,0,8.017,3.588,8.017,8.017C503.449,251.877,499.861,255.466,495.432,255.466z"
                                ></path>
                                <path
                                    style="fill: #f0353d"
                                    d="M441.759,182.782c-2.771,0-5.465-1.438-6.95-4.009c-2.214-3.834-0.9-8.737,2.934-10.951 l29.622-17.102c3.832-2.213,8.738-0.901,10.951,2.934c2.214,3.834,0.9,8.737-2.934,10.951l-29.622,17.102 C444.498,182.436,443.119,182.782,441.759,182.782z"
                                ></path>
                                <path
                                    style="fill: #f0353d"
                                    d="M471.366,345.254c-1.361,0-2.738-0.346-4.001-1.075l-29.622-17.102 c-3.834-2.214-5.148-7.117-2.934-10.951c2.213-3.836,7.115-5.148,10.951-2.934l29.622,17.102c3.834,2.214,5.148,7.117,2.934,10.951 C476.832,343.816,474.137,345.254,471.366,345.254z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold"
                        >Publicités</span
                    >
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black font-semibold"
                            @click="redirectToDashboard"
                            >Publicités</a
                        >
                    </li>
                </ul>
            </li>
            <li class="p-1.5 rounded-md hover:bg-gray-400 cursor-pointer">
                <a @click="redirectToReport">
                    <svg
                        fill="#d05a0b"
                        width="22px"
                        height="22px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#d05a0b"
                        stroke-width="0.00024000000000000003"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"
                            ></path>
                        </g>
                    </svg>
                    <span class="link_name text-sm font-semibold"
                        >Compte Rendu</span
                    >
                </a>
                <ul class="sub-menu blank bg-gray-400">
                    <li>
                        <a
                            class="link_name text-sm cursor-pointer text-black font-semibold"
                            @click="redirectToDashboard"
                            >Compte Rendu</a
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToDashboard() {
            this.$router.push("/admin/dashboard");
        },
        redirectToSms() {
            this.$router.push("/admin/sms");
        },
        redirectToAutoSms() {
            this.$router.push("/admin/autosms");
        },
        redirectToProjects() {
            this.$router.push("/admin/projects");
        },
        redirectToStaff() {
            this.$router.push("/admin/staff");
        },
        redirectToFranchises() {
            this.$router.push("/admin/franchises");
        },
        redirectToPublicites() {
            this.$router.push("/admin/publicity");
        },
        redirectToReport() {
            this.$router.push("/admin/compte-rendu");
        },
        redirectToNPS() {
            this.$router.push("/admin/nps");
        },
    },
};
</script>
