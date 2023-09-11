<template>
    <div class="lg:flex lg:justify-between block">
        <div class="auto-left-side lg:w-[75%] w-full">
            <div class="header flex items-center justify-between mb-[16px]">
                <div class="text-neutral-900 text-lg font-semibold">
                    Envoi Automatique des SMS
                </div>
                <div class="w-fit">
                    <button
                        data-modal-toggle="keysms-modal"
                        type="button"
                        class="flex items-center justify-between space-x-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                        <svg
                            fill="#fff"
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
                        <span> Voir les automatisations </span>
                    </button>
                </div>
                <!-- <div class="w-fit">
                    <button
                        data-modal-toggle="keysms-modal"
                        type="button"
                        class="flex items-center justify-between space-x-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                        <svg
                            fill="#fff"
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
                        <span> Afficher les automatisations </span>
                    </button>
                </div> -->
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
                    </div>
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
                <div class="flex items-center justify-between mb-4">
                    <div class="w-fit text-black font-extrabold">
                        Nombre de sms: 2
                    </div>
                    <div class="w-fit text-black nodark:text-white">5</div>
                </div>
                <div class="mb-4 text-sm">
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                        >Type d'envoi</label
                    >
                    <div class="flex space-x-4">
                        <label class="flex items-center">
                            <input
                                id="onetime_radio"
                                name="envoi_type"
                                type="radio"
                                class="cursor-pointer border accent-orange-600 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                                value="unique"
                                checked
                            />
                            <span class="ml-2">Une seule fois</span>
                        </label>
                        <label class="flex items-center">
                            <input
                                id="everyday_radio"
                                name="envoi_type"
                                type="radio"
                                class="cursor-pointer border accent-orange-600 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                                value="quotidien"
                            />
                            <span class="ml-2">Tous les jours</span>
                        </label>
                        <label class="flex items-center">
                            <input
                                id="everyweek_radio"
                                name="envoi_type"
                                type="radio"
                                class="cursor-pointer border accent-orange-600 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300"
                                value="hebdomadaire"
                            />
                            <span class="ml-2">Une fois par semaine</span>
                        </label>
                    </div>
                </div>
                <div
                    id="onetime_div"
                    class="lg:flex lg:items-center lg:justify-between mb-6"
                >
                    <div class="w-[100%] lg:w-[40%] mb-3 lg:mb-0">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                            >Date d'envoi</label
                        >
                        <input
                            ref="dateEnvoiInput"
                            type="date"
                            class="block w-full p-2.5 text-sm text-gray-900 nodark:text-gray-100 bg-gray-100 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500 border border-gray-100 rounded-lg focus:ring-0 focus:border focus:border-orange-500 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500"
                            v-bind:min="minDate"
                        />
                    </div>

                    <div class="w-[100%] lg:w-[40%]">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                            >Heure d'envoi</label
                        >
                        <select
                            ref="heureEnvoiSelect"
                            name=""
                            id=""
                            class="block w-full p-2.5 text-sm text-gray-900 nodark:text-gray-100 bg-gray-100 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500 border border-gray-100 rounded-lg focus:ring-0 focus:border focus:border-orange-500 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500"
                        >
                            <option value="" disabled selected>
                                Sélectionner une heure
                            </option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                    </div>
                </div>
                <!-- <div id="everyday_div" class="mb-6">
                    <div class="w-[100%] lg:w-[40%]">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                            >Heure d'envoi</label
                        >
                        <select
                            ref="heureEnvoiSelect2"
                            name=""
                            id=""
                            class="block w-full p-2.5 text-sm text-gray-900 nodark:text-gray-100 bg-gray-100 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500 border border-gray-100 rounded-lg focus:ring-0 focus:border focus:border-orange-500 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500"
                        >
                            <option value="" disabled selected>
                                Sélectionner une heure
                            </option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                    </div>
                </div> -->
                <!-- <div
                    id="everyweek_div"
                    class="lg:flex lg:items-center lg:justify-between mb-6"
                >
                    <div class="w-[100%] lg:w-[40%] mb-3 lg:mb-0">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                            >Jour d'envoi</label
                        >
                        <select
                            name=""
                            id=""
                            class="block w-full p-2.5 text-sm text-gray-900 nodark:text-gray-100 bg-gray-100 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500 border border-gray-100 rounded-lg focus:ring-0 focus:border focus:border-orange-500 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500"
                            ref="jourEnvoiSelect"
                        >
                            <option value="" disabled selected>
                                Sélectionner un jour
                            </option>
                            <option value="lundi">Lundi</option>
                            <option value="mardi">Mardi</option>
                            <option value="mercredi">Mercredi</option>
                            <option value="jeudi">Jeudi</option>
                            <option value="vendredi">Vendredi</option>
                            <option value="samedi">Samedi</option>
                        </select>
                    </div>
                    <div class="w-[100%] lg:w-[40%]">
                        <label
                            class="block mb-2 text-sm font-medium text-gray-900 nodark:text-gray-100"
                            >Heure d'envoi</label
                        >
                        <select
                            ref="heureEnvoiSelect3"
                            name=""
                            id=""
                            class="block w-full p-2.5 text-sm text-gray-900 nodark:text-gray-100 bg-gray-100 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500 border border-gray-100 rounded-lg focus:ring-0 focus:border focus:border-orange-500 nodark:bg-gray-700 nodark:border-gray-600 nodark:placeholder-gray-400 nodark:text-white nodark:focus:ring-orange-500 nodark:focus:border-orange-500"
                        >
                            <option value="" disabled selected>
                                Sélectionner une heure
                            </option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                        </select>
                    </div>
                </div> -->
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
            class="autosms-right-side bg-slate-100 lg:w-[24%] w-full rounded-[20px] p-2 h-full"
        >
            <autosms-right-side></autosms-right-side>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTypeEnvoi: "unique",
            minDate: "",
        };
    },
    mounted() {
        const today = new Date().toISOString().split("T")[0];
        this.minDate = today;
    },
};
</script>
