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
                                fill="#FF5A1F"
                                class="m-auto block w-4 h-4"
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
                                version="1.1"
                                id="Capa_1"
                                class="block m-auto w-4 h-4 fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 490 490"
                                style="enable-background: new 0 0 490 490"
                                xml:space="preserve"
                            >
                                <polygon
                                    points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0
                                    222.031,222.031 0,222.031 0,267.969 222.031,267.969 "
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- projet a faire -->
                <div>
                    <div class="header border-b-2 border-gray-200">
                        <div
                            class="bg-purple mb-2 px-3 py-1.5 w-fit font-semibold rounded-[5px]"
                        >
                            A Faire
                        </div>
                    </div>
                    <div
                        class="content rounded-[20px] p-2 border border-gray-300 bg-gray-200 mt-2"
                    >
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center justify-center">
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
                                <div class="text-md">Nom de la franchise</div>
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
                                            fill="#FF0000"
                                        ></path>
                                        <path
                                            d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
                                            fill="#ff0000"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="text-lg mt-4 font-semibold">
                            Titre du projet
                        </div>
                        <div class="text-sm mt-2 mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure quas quidem in deserunt voluptatibus
                            itaque aspernatur.
                        </div>
                        <div class="text-md">
                            <div class="mt-2 p-2 bg-white rounded-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <div class="mr-2">
                                            <svg
                                                width="22px"
                                                height="22px"
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
                                        <div class="font-semibold">
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
                                <p class="py-2 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident in maiores,
                                    voluptatem eligendi sed cumque.
                                </p>
                                <div class="mb-2 flex items-center">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione"
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
                                                d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
                                                fill="#ffce31"
                                            ></path>
                                            <g fill="#231f20">
                                                <path
                                                    d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"
                                                ></path>
                                                <circle
                                                    cx="32"
                                                    cy="49.6"
                                                    r="4.2"
                                                ></circle>
                                            </g>
                                        </g>
                                    </svg>
                                    <span
                                        class="ml-2 text-red-700 text-sm font-medium"
                                    >
                                        19/10/2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center mt-2 cursor-pointer"
                        >
                            Ajouter une tâche
                        </div>
                    </div>
                </div>
                <!-- projet en cours -->
                <div>
                    <div class="header border-b-2 border-gray-200">
                        <div
                            class="bg-rose mb-2 px-3 py-1.5 w-fit font-semibold rounded-[5px] cl-rose"
                        >
                            En Cours
                        </div>
                    </div>
                    <div
                        class="content rounded-[20px] p-2 border border-gray-300 bg-gray-200 mt-2"
                    >
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center justify-center">
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
                                <div class="text-md">Nom de la franchise</div>
                            </div>
                        </div>
                        <div class="text-lg mt-4 font-semibold">
                            Titre du projet
                        </div>
                        <div class="text-sm mt-2 mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure quas quidem in deserunt voluptatibus
                            itaque aspernatur.
                        </div>
                        <div class="text-md">
                            <div class="mt-2 p-2 bg-white rounded-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <div class="mr-2">
                                            <svg
                                                width="22px"
                                                height="22px"
                                                viewBox="0 0 36 36"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                class="iconify iconify--twemoji"
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
                                                        fill="#FFE8B6"
                                                        d="M21 18c0-2.001 3.246-3.369 5-6c2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6z"
                                                    ></path>
                                                    <path
                                                        fill="#FFAC33"
                                                        d="M20.999 24c-.999 0-2.057-1-2.057-2C19 20.287 19 19.154 19 18c0-3.22 3.034-4.561 4.9-7H12.1c1.865 2.439 4.9 3.78 4.9 7c0 1.155 0 2.289.058 4c0 1-1.058 2-2.058 2c-2 0-3.595 1.784-4 3c-1 3-1 7-1 7h16s0-4-1-7c-.405-1.216-2.001-3-4.001-3z"
                                                    ></path>
                                                    <path
                                                        fill="#3B88C3"
                                                        d="M30 34a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2zm0-32a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="font-semibold">
                                            Titre de la tache
                                        </div>
                                    </div>
                                </div>
                                <p class="py-2 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident in maiores,
                                    voluptatem eligendi sed cumque.
                                </p>
                                <div class="mb-2 flex items-center">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione"
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
                                                d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
                                                fill="#ffce31"
                                            ></path>
                                            <g fill="#231f20">
                                                <path
                                                    d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"
                                                ></path>
                                                <circle
                                                    cx="32"
                                                    cy="49.6"
                                                    r="4.2"
                                                ></circle>
                                            </g>
                                        </g>
                                    </svg>
                                    <span
                                        class="ml-2 text-red-700 text-sm font-medium"
                                    >
                                        19/10/2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="text-md">
                            <div class="mt-2 p-2 bg-white rounded-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <div class="mr-2">
                                            <svg
                                                width="22px"
                                                height="22px"
                                                viewBox="0 0 20 20"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                    <title>
                                                        interface / 8 -
                                                        interface, radio button,
                                                        checked, checkmark,
                                                        done, to do, radio icon
                                                    </title>
                                                    <g
                                                        id="Free-Icons"
                                                        stroke="none"
                                                        stroke-width="1"
                                                        fill="none"
                                                        fill-rule="evenodd"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <g
                                                            transform="translate(-1265.000000, -526.000000)"
                                                            id="Group"
                                                            stroke="#199400"
                                                            stroke-width="2"
                                                        >
                                                            <g
                                                                transform="translate(1263.000000, 524.000000)"
                                                                id="Shape"
                                                            >
                                                                <path
                                                                    d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z"
                                                                ></path>
                                                                <polyline
                                                                    points="7.71428571 11.6223394 11.2436971 15 16.2857143 9"
                                                                ></polyline>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="font-semibold">
                                            Titre de la tache
                                        </div>
                                    </div>
                                </div>
                                <p class="py-2 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident in maiores,
                                    voluptatem eligendi sed cumque.
                                </p>
                                <div class="mb-2 flex items-center">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione"
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
                                                d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
                                                fill="#ffce31"
                                            ></path>
                                            <g fill="#231f20">
                                                <path
                                                    d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"
                                                ></path>
                                                <circle
                                                    cx="32"
                                                    cy="49.6"
                                                    r="4.2"
                                                ></circle>
                                            </g>
                                        </g>
                                    </svg>
                                    <span
                                        class="ml-2 text-red-700 text-sm font-medium"
                                    >
                                        19/10/2023
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- projet complété -->
                <div>
                    <div class="header border-b-2 border-gray-200">
                        <div
                            class="bg-green mb-2 px-3 py-1.5 w-fit font-semibold rounded-[5px] cl-green"
                        >
                            Complété
                        </div>
                    </div>
                    <div
                        class="content rounded-[20px] p-2 border border-gray-300 bg-gray-200 mt-2"
                    >
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center justify-center">
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
                                <div class="text-md">Nom de la franchise</div>
                            </div>
                        </div>
                        <div class="text-lg mt-4 font-semibold">
                            Titre du projet
                        </div>
                        <div class="text-sm mt-2 mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure quas quidem in deserunt voluptatibus
                            itaque aspernatur.
                        </div>
                        <div class="text-md">
                            <div class="mt-2 p-2 bg-white rounded-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <div class="mr-2">
                                            <svg
                                                width="22px"
                                                height="22px"
                                                viewBox="0 0 20 20"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                    <title>
                                                        interface / 8 -
                                                        interface, radio button,
                                                        checked, checkmark,
                                                        done, to do, radio icon
                                                    </title>
                                                    <g
                                                        id="Free-Icons"
                                                        stroke="none"
                                                        stroke-width="1"
                                                        fill="none"
                                                        fill-rule="evenodd"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <g
                                                            transform="translate(-1265.000000, -526.000000)"
                                                            id="Group"
                                                            stroke="#199400"
                                                            stroke-width="2"
                                                        >
                                                            <g
                                                                transform="translate(1263.000000, 524.000000)"
                                                                id="Shape"
                                                            >
                                                                <path
                                                                    d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z"
                                                                ></path>
                                                                <polyline
                                                                    points="7.71428571 11.6223394 11.2436971 15 16.2857143 9"
                                                                ></polyline>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="font-semibold">
                                            Titre de la tache
                                        </div>
                                    </div>
                                </div>
                                <p class="py-2 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident in maiores,
                                    voluptatem eligendi sed cumque.
                                </p>
                                <div class="mb-2 flex items-center">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione"
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
                                                d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
                                                fill="#ffce31"
                                            ></path>
                                            <g fill="#231f20">
                                                <path
                                                    d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"
                                                ></path>
                                                <circle
                                                    cx="32"
                                                    cy="49.6"
                                                    r="4.2"
                                                ></circle>
                                            </g>
                                        </g>
                                    </svg>
                                    <span
                                        class="ml-2 text-red-700 text-sm font-medium"
                                    >
                                        19/10/2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="text-md">
                            <div class="mt-2 p-2 bg-white rounded-lg">
                                <div class="flex items-center justify-between">
                                    <div class="flex">
                                        <div class="mr-2">
                                            <svg
                                                width="22px"
                                                height="22px"
                                                viewBox="0 0 20 20"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                    <title>
                                                        interface / 8 -
                                                        interface, radio button,
                                                        checked, checkmark,
                                                        done, to do, radio icon
                                                    </title>
                                                    <g
                                                        id="Free-Icons"
                                                        stroke="none"
                                                        stroke-width="1"
                                                        fill="none"
                                                        fill-rule="evenodd"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <g
                                                            transform="translate(-1265.000000, -526.000000)"
                                                            id="Group"
                                                            stroke="#199400"
                                                            stroke-width="2"
                                                        >
                                                            <g
                                                                transform="translate(1263.000000, 524.000000)"
                                                                id="Shape"
                                                            >
                                                                <path
                                                                    d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z"
                                                                ></path>
                                                                <polyline
                                                                    points="7.71428571 11.6223394 11.2436971 15 16.2857143 9"
                                                                ></polyline>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="font-semibold">
                                            Titre de la tache
                                        </div>
                                    </div>
                                </div>
                                <p class="py-2 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Provident in maiores,
                                    voluptatem eligendi sed cumque.
                                </p>
                                <div class="mb-2 flex items-center">
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 64 64"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        class="iconify iconify--emojione"
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
                                                d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
                                                fill="#ffce31"
                                            ></path>
                                            <g fill="#231f20">
                                                <path
                                                    d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0"
                                                ></path>
                                                <circle
                                                    cx="32"
                                                    cy="49.6"
                                                    r="4.2"
                                                ></circle>
                                            </g>
                                        </g>
                                    </svg>
                                    <span
                                        class="ml-2 text-red-700 text-sm font-medium"
                                    >
                                        19/10/2023
                                    </span>
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
