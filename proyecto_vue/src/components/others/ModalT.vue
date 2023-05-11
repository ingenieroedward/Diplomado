<template>
    <section id="section" class="hidden registar-iniciar flex justify-center items-center">


        <div id="div" class="overflow-none hidden login md:overflow-y-scroll sombra">
            <button class="cursor-pointer">
                <label @click="mostrar" class="cursor-pointer" for="login">
                    <svg class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </label></button>
            <br>
            <h2 style="font-size: 2rem !important;">Aceptar Solicitud</h2>
            <p class="mb-4">Por favor llene los datos.</p>
            <div id="solicitudexitosa"
                class="hidden flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 "
                role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Respuesta exitosa!</span> ...
                </div>
            </div>
            <form @submit.prevent="solicitar">
                <label for="precio">Precio</label>
                <input v-model="precio" class="w-full mb-4 p-1" type="number" name="precio" id="precio"
                    placeholder="Precio del servicio" required>
                <label for="telefono">Teléfono</label>
                <input v-model="telefono" class="w-full mb-4 p-1" type="text" name="telefono" id="telefono"
                    placeholder="Escriba su teléfono" required>

                <label for="message" class="block  text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                <textarea v-model="observacion" id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Alguna sugerencia"></textarea>
                <div id="error" class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Error al responder!</span>
                    </div>
                </div>

                <button
                    class="mt-4 mb-4 block w-full text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Responder Solicitud</button>
            </form>

        </div>
        <div id="div2" class="overflow-none hidden login md:overflow-y-scroll sombra">
            <button class="cursor-pointer">
                <label @click="mostrar" class="cursor-pointer" for="login">
                    <svg class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </label></button>
            <br>
            <h2 style="font-size: 2rem !important;">Rechazar Solicitud</h2>
            <p class="mb-4">Por favor llene los datos.</p>
            <div id="solicitudexitosa"
                class="hidden flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 "
                role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Respuesta exitosa!</span> ...
                </div>
            </div>
            <form @submit.prevent="solicitar">
                <label for="message">Motivo del rechazo</label>
                <label for="message" class="block  text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                <textarea v-model="observacion" id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Alguna sugerencia"></textarea>
                <div id="error" class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Error al responder!</span>
                    </div>
                </div>

                <button
                    class="mt-4 mb-4 block w-full text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Responder Solicitud</button>
            </form>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            precio: '',
            observacion: '',
            telefono:'',
            usuarios: []
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data;
            })
            .catch(e => {
                
            })
    },
    methods: {
        mostrar() {
            let section = document.getElementById('section');
            let div1 = document.getElementById('div')
            let div2 = document.getElementById('div2')
            if (section.classList.contains('hidden')) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
                div1.classList.add('hidden');
                div2.classList.add('hidden');
            }
        }
    }
}
</script>