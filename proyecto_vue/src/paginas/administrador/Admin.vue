<script setup>
import Header from '@/components/others/HeaderAdmin.vue'
import Footer from '@/components/principal/Footer.vue'
</script>

<template>
    <main class="w-ful h-full b-recuperar">


        <div class="opacidad ">
            <Header />
            <article class="w-full py-5 px-6 flex justify-center">
                <section class="container mx-auto">
                    <h1 class="text-center mb-4">Informe de usuarios registrados</h1>
                    <p class="mb-2">Tabla de registros</p>

                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Exportar</button>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-green-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nombre completo
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teléfono
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Servicio
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Calificación
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Eliminar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        1
                                    </th>
                                    <td class="px-6 py-4">
                                        Computer
                                    </td>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#"
                                            class="font-medium text-lg text-yellow-400 hover:text-red-400 hover:underline">
                                            <i class="bi bi-trash3-fill ml-4"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </section>


            </article>

            <Footer />

        </div>
    </main>
</template>