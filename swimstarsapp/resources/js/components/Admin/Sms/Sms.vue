<template>
    <div class="lg:flex lg:justify-between block">
        <div class="sms-left-side lg:w-[75%] w-full">
            <div class="header flex items-center justify-between mb-[16px]">
                <div class="text-neutral-900 text-lg font-semibold">
                    Envoi des SMS
                </div>
                <div class="w-fit">
                    <button
                        data-modal-toggle="keysms-modal"
                        type="button"
                        class="flex items-center justify-between space-x-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
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
                        <span> Ajouter une clé </span>
                    </button>
                </div>
            </div>
            <div
                class="content bg-white rounded-[20px] drop-shadow-md border border-gray-200 my-4 px-4 py-3 w-[100%]"
            >
                <div class="mb-5">
                    <div
                        class="w-full block sm:flex items-center justify-between"
                    >
                        <div class="mb-2 sm:mb-0">
                            <select
                                id="smsSmartlists"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2 focus:outline-none pr-8"
                            >
                                <option value="-1" selected>
                                    Sélectionner une smartliste
                                </option>
                                <option value="smsCoursDecouverte">
                                    SMS Cours Découverte
                                </option>
                            </select>
                        </div>
                        <div
                            id="btnLoadNumbers"
                            class="text-sm w-fit cursor-pointer space-x-2 font-semibold hover:bg-orange-100 text-orange-500 flex items-center justify-center py-1.5 px-4 border-2 border-orange-500 rounded-lg"
                        >
                            <svg
                                class="w-4 h-4 fill-orange block m-auto"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 374.116 374.116"
                                style="
                                    enable-background: new 0 0 374.116 374.116;
                                "
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M344.058,207.506c-16.568,0-30,13.432-30,30v76.609h-254v-76.609c0-16.568-13.432-30-30-30c-16.568,0-30,13.432-30,30
                v106.609c0,16.568,13.432,30,30,30h314c16.568,0,30-13.432,30-30V237.506C374.058,220.938,360.626,207.506,344.058,207.506z"
                                    />
                                    <path
                                        d="M123.57,135.915l33.488-33.488v111.775c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30V102.426l33.488,33.488
                c5.857,5.858,13.535,8.787,21.213,8.787c7.678,0,15.355-2.929,21.213-8.787c11.716-11.716,11.716-30.71,0-42.426L208.271,8.788
                c-11.715-11.717-30.711-11.717-42.426,0L81.144,93.489c-11.716,11.716-11.716,30.71,0,42.426
                C92.859,147.631,111.855,147.631,123.57,135.915z"
                                    />
                                </g>
                            </svg>
                            <span> Récupérer les numéros </span>
                        </div>
                        <div id="btnLoadNumbers2" class="hidden">
                            <button
                                disabled
                                type="button"
                                class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-0 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                            >
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    class="inline w-4 h-4 mr-3 text-white animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Chargement...
                            </button>
                        </div>
                    </div>
                </div>
                <div class="my-3">
                    <label
                        data-modal-toggle="otherNumbers-modal"
                        for="numbers"
                        class="cursor-pointer w-fit block mb-2 text-sm font-medium text-orange-600 underline nodark:text-gray-400"
                        >Consulter ou ajouter des numéros
                    </label>
                </div>
                <div class="mb-2">
                    <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                        >Votre message</label
                    >
                    <textarea
                        rows="7"
                        class="block p-2.5 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 focus:outline-none"
                        placeholder="Écrivez quelque chose ici..."
                    ></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <div class="w-fit text-black font-extrabold">
                        Nombre de sms: 2
                    </div>
                    <div class="w-fit text-black nodark:text-white">5</div>
                </div>
            </div>
            <div
                class="bg-white rounded-[20px] drop-shadow-md border border-gray-200 my-4 px-4 py-3 flex items-center justify-between w-[100%]"
            >
                <div
                    class="cursor-pointer w-fit block mb-2 text-sm font-semibold text-orange-600 underline"
                >
                    Sélectionner un message
                </div>
                <div>
                    <button
                        class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center"
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
        <div
            class="sms-right-side bg-slate-100 lg:w-[24%] w-full rounded-[20px] p-2 h-full"
        >
            <sms-right-side></sms-right-side>
        </div>
    </div>
</template>

<script>
export default {};
</script>
