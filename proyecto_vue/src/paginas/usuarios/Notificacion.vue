<script setup>
import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    <article class="py-5 w-full article flex flex-wrap justify-center">

        <div class="w-full max-w-3xl bg-white sombra rounded-lg">
            <div style="border-radius: 10px 10px 0 0;" class="flex items-center bg-gray-700 w-full p-4  justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-200 ">Respuestas de Solicitudes</h5>
            </div>
            <div class="flow-root px-4 ">
                <ul role="list" class="divide-y divide-gray-200 ">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 flex-wrap">
                            <div class="flex-shrink-0">
                                <img class="w-24 h-24 rounded-full" src="@/assets/images/usuario-sin-foto.png"
                                    alt="Neil image">
                            </div>
                            <div class="flex-1 min-w-xs flex flex-wrap">
                                <p class="text-sm font-mediumtext-gray-900 truncate w-full mb-2">
                                    Edward Diaz Padilla
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm font-medium text-gray-500 truncate w-full">
                                    Solicitud: Aceptada
                                </p>

                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500  dark:text-gray-400 w-full">
                                    Hola amigo, cualquier cosa te estoy llamando
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500 truncate dark:text-gray-400 w-full">
                                    Precio: COP 25000
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Teléfono: 3024487674
                                </p>
                            </div>
                            <div class="mt-4 flex justify-center flex-wrap md:w-32 items-center w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                
                                    <a @click="aceptar"
                                        class="cursor-pointer w-32 mr-2 mb-4 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                        <i class="bi bi-check2 mr-2"></i>
                                        <div class="text-left">

                                            <div class="-mt-1 font-sans text-sm font-semibold">Aceptar</div>
                                        </div>
                                    </a>
                                    <a @click="cancelar"
                                        class="cursor-pointer mb-4 w-32 mr-2  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                        <i class="bi bi-x-lg mr-2"></i>
                                        <div class="text-left">

                                            <div class="-mt-1 font-sans text-sm font-semibold">Cancelar</div>
                                        </div>
                                    </a>
                                
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 flex-wrap">
                            <div class="flex-shrink-0">
                                <img class="w-24 h-24 rounded-full" src="@/assets/images/usuario-sin-foto.png"
                                    alt="Neil image">
                            </div>
                            <div class="flex-1 min-w-xs flex flex-wrap">
                                <p class="text-sm font-mediumtext-gray-900 truncate w-full mb-2">
                                    Edward Diaz Padilla
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm font-medium text-gray-500 truncate w-full">
                                    Solicitud: Aceptada
                                </p>

                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500  dark:text-gray-400 w-full">
                                    Hola amigo, cualquier cosa te estoy llamando
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500 truncate dark:text-gray-400 w-full">
                                    Precio: COP 25000
                                </p>
                                <p style="font-size: 1rem !important;"
                                    class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Teléfono: 3024487674
                                </p>
                            </div>
                            <div class="mt-4 flex justify-center flex-wrap md:w-32 items-center w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                
                                    <a @click="aceptar"
                                        class="cursor-pointer w-32 mr-2 mb-4 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                        <i class="bi bi-check2 mr-2"></i>
                                        <div class="text-left">

                                            <div class="-mt-1 font-sans text-sm font-semibold">Aceptar</div>
                                        </div>
                                    </a>
                                    <a @click="cancelar"
                                        class="cursor-pointer mb-4 w-32 mr-2  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                        <i class="bi bi-x-lg mr-2"></i>
                                        <div class="text-left">

                                            <div class="-mt-1 font-sans text-sm font-semibold">Cancelar</div>
                                        </div>
                                    </a>
                                
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    </article>

<Footer /></template>
