<script setup>
import headerT from '@/components/others/Dashboard.vue'
</script>
<template>
    <headerT />
    <article class="py-5  flex flex-wrap justify-center p-4 sm:ml-64">
        <section class=" w-full py-4 rounded-xl">
            <h1 style="font-size: 2rem !important;" class="text-center mb-5 bg-white rounded-xl sombra p-2 w-full">
                Listado de servicios</h1>
                <div class="w-full flex justify-center">
                    <form style="width: 100%;min-width: 250px; max-width: 500px;" class="flex justify-around rounded-xl flex-wrap items-center bg-gray-600 p-2">
                <label class="text-white w-full" for="fecha">Filtrar por día</label>
                <div class="w-full flex items-center justify-center">
                    <input style="min-width:100px; width: 100%; max-width: 320px;" class="p-2 rounded-xl sombra" v-model="fecha" type="date" name="fecha" id="fecha">
                    <button class="py-2 px-4 sombra bg-orange-500 ml-2 rounded-xl text-white hover:bg-orange-600">
                        Filtrar</button>
                </div>

            </form> 
                </div>
           
        </section>
        <section class="w-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg sombra w-full">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 sombra">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nombre cliente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                calificacion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class=" border-b bg-white hover:bg-gray-50">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
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
                                $2999
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
    </article>
</template>