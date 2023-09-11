<template>
    <div class="lg:flex lg:justify-between block">
        <div class="project-left-side lg:w-[75%] w-full">
            <div class="header flex justify-between items-center mb-[16px]">
                <div class="text-neutral-900 text-lg font-semibold">
                    Les Projets
                </div>
                <div class="flex">
                    <div class="mr-2">
                        <button
                            type="button"
                            class="text-sm w-fit cursor-pointer space-x-2 font-semibold hover:bg-orange-100 text-orange-500 flex items-center justify-center py-1.5 px-4 border-2 border-orange-500 rounded-lg"
                        >
                            <svg
                                fill="#f97316"
                                class="m-auto block w-6 h-6"
                                viewBox="-3.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>view</title>
                                <path
                                    d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"
                                ></path>
                            </svg>
                            <span>Voir les templates</span>
                        </button>
                    </div>
                    <div class="w-fit">
                        <button
                            type="button"
                            class="flex items-center justify-between space-x-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            <span>Nouveau projet</span>
                            <svg
                                class="m-auto block w-6 h-6"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title />
                                <g id="Complete">
                                    <g data-name="add" id="add-2">
                                        <g>
                                            <line
                                                fill="none"
                                                stroke="#ffffff"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                x1="12"
                                                x2="12"
                                                y1="19"
                                                y2="5"
                                            />
                                            <line
                                                fill="none"
                                                stroke="#ffffff"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                x1="5"
                                                x2="19"
                                                y1="12"
                                                y2="12"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <div class="p-2 rounded-lg bg-gray-100">
                            <div class="bg-white p-2 rounded-lg mb-3">
                                <div>A faire</div>
                            </div>
                            <div class="bg-sky-300 rounded-lg p-2 mb-3">
                                <div
                                    class="flex items-center justify-between mb-3"
                                >
                                    <div
                                        class="flex items-center justify-center"
                                    >
                                        <div class="mr-2">
                                            <svg
                                                version="1.0"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                width="15px"
                                                height="15px"
                                                viewBox="0 0 64 64"
                                                enable-background="new 0 0 64 64"
                                                xml:space="preserve"
                                                fill=""
                                                stroke=""
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                />

                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        fill="#f59e0b"
                                                        d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <div>Nom de la franchise</div>
                                    </div>
                                    <div
                                        title="Supprimer ce projet"
                                        class="cursor-pointer"
                                    >
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                id="SVGRepo_bgCarrier"
                                                stroke-width="0"
                                            ></g>
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                                <path
                                                    d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
                                                    fill="#FFFFFF"
                                                ></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text-2xl mt-4">Titre du projet</div>
                                <div class="text-md mt-2 mb-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iure quas quidem in
                                    deserunt voluptatibus itaque aspernatur.
                                </div>
                                <div class="text-md">
                                    <div
                                        class="mt-2 p-2 bg-gray-100 rounded-lg"
                                    >
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <div class="flex">
                                                <div class="mr-2">
                                                    <svg
                                                        class="mr-2"
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></g>
                                                        <g
                                                            id="SVGRepo_iconCarrier"
                                                        >
                                                            <path
                                                                d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                                                                stroke="#334155"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                            ></path>
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                                                                fill="#334155"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="font-bold">
                                                    Titre de la tache
                                                </div>
                                            </div>
                                            <div
                                                title="Supprimer cette tâche"
                                                class="flex justify-end cursor-pointer"
                                            >
                                                <svg
                                                    width="20px"
                                                    height="20px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    stroke="#ff0000"
                                                >
                                                    <g
                                                        id="SVGRepo_bgCarrier"
                                                        stroke-width="0"
                                                    ></g>
                                                    <g
                                                        id="SVGRepo_tracerCarrier"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path
                                                            d="M20.5001 6H3.5"
                                                            stroke="#FF0000"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        ></path>
                                                        <path
                                                            d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                                            stroke="#FF0000"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        ></path>
                                                        <path
                                                            d="M9.5 11L10 16"
                                                            stroke="#FF0000"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        ></path>
                                                        <path
                                                            d="M14.5 11L14 16"
                                                            stroke="#FF0000"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                        ></path>
                                                        <path
                                                            d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                                                            stroke="#FF0000"
                                                            stroke-width="1.5"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <p class="py-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Provident in maiores, voluptatem
                                            eligendi sed cumque.
                                        </p>
                                        <div class="mb-2 flex items-center">
                                            <svg
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 128 128"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                class="iconify iconify--noto"
                                                preserveAspectRatio="xMidYMid meet"
                                                fill="#000000"
                                            >
                                                <g
                                                    id="SVGRepo_bgCarrier"
                                                    stroke-width="0"
                                                ></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M57.16 8.42l-52 104c-1.94 4.02-.26 8.85 3.75 10.79c1.08.52 2.25.8 3.45.81h104c4.46-.04 8.05-3.69 8.01-8.15a8.123 8.123 0 0 0-.81-3.45l-52-104a8.067 8.067 0 0 0-14.4 0z"
                                                        fill="#f2a600"
                                                    ></path>
                                                    <path
                                                        d="M53.56 15.72l-48.8 97.4c-1.83 3.77-.25 8.31 3.52 10.14c.99.48 2.08.74 3.18.76h97.5a7.55 7.55 0 0 0 7.48-7.62a7.605 7.605 0 0 0-.78-3.28l-48.7-97.4a7.443 7.443 0 0 0-9.93-3.47a7.484 7.484 0 0 0-3.47 3.47z"
                                                        fill="#ffcc32"
                                                    ></path>
                                                    <g
                                                        opacity=".2"
                                                        fill="#424242"
                                                    >
                                                        <path
                                                            d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.646 4.646 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8"
                                                        ></path>
                                                        <path
                                                            d="M64.36 98.02c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"
                                                        ></path>
                                                    </g>
                                                    <linearGradient
                                                        id="IconifyId17ecdb2904d178eab21432"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="68"
                                                        y1="-1808.36"
                                                        x2="68"
                                                        y2="-1887.05"
                                                        gradientTransform="matrix(1 0 0 -1 -3.64 -1776.09)"
                                                    >
                                                        <stop
                                                            offset="0"
                                                            stop-color="#424242"
                                                        ></stop>
                                                        <stop
                                                            offset="1"
                                                            stop-color="#212121"
                                                        ></stop>
                                                    </linearGradient>
                                                    <path
                                                        d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.646 4.646 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8z"
                                                        fill="url(#IconifyId17ecdb2904d178eab21432)"
                                                    ></path>
                                                    <linearGradient
                                                        id="IconifyId17ecdb2904d178eab21433"
                                                        gradientUnits="userSpaceOnUse"
                                                        x1="64.36"
                                                        y1="-1808.36"
                                                        x2="64.36"
                                                        y2="-1887.05"
                                                        gradientTransform="matrix(1 0 0 -1 0 -1772.11)"
                                                    >
                                                        <stop
                                                            offset="0"
                                                            stop-color="#424242"
                                                        ></stop>
                                                        <stop
                                                            offset="1"
                                                            stop-color="#212121"
                                                        ></stop>
                                                    </linearGradient>
                                                    <circle
                                                        cx="64.36"
                                                        cy="104.02"
                                                        r="6"
                                                        fill="url(#IconifyId17ecdb2904d178eab21433)"
                                                    ></circle>
                                                    <path
                                                        d="M53.56 23.02c-1.2 1.5-21.4 41-21.4 41s-1.8 3 .7 4.7c2.3 1.6 4.4-.3 5.3-1.8s19.2-36.9 19.9-38.6c.6-1.87.18-3.91-1.1-5.4c-1.3-1.2-2.6-1-3.4.1z"
                                                        fill="#fff170"
                                                    ></path>
                                                    <circle
                                                        cx="31.36"
                                                        cy="75.33"
                                                        r="3.3"
                                                        fill="#fff170"
                                                    ></circle>
                                                </g>
                                            </svg>
                                            <span class="ml-2 text-red-500">
                                                19/10/2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
                                >
                                    Ajouter une tâche
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div
            class="project-right-side bg-slate-100 lg:w-[24%] w-full rounded-[20px] p-2 h-full"
        >
            <project-right-side></project-right-side>
        </div> -->
    </div>
</template>

<script>
export default {};
</script>
