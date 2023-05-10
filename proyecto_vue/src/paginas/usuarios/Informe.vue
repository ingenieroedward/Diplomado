<script setup>
import headerT from '@/components/others/HeaderT.vue'
</script>
<template>
    <headerT />
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="container mx-auto px-5 py-4 rounded-xl w-full mb-6">
            <h1 class="text-center mb-5">Listados de servicios</h1>

            <form class="w-full flex justify-center flex-wrap items-center">

                <input class="w-80 p-2 rounded-xl sombra" v-model="fecha" type="date" name="fecha" id="fecha">
                <button
                    class="py-2 px-4 sombra bg-orange-500 ml-2 rounded-xl text-white hover:bg-orange-600">Filtrar</button>
            </form>
        </section>
        <section>
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg sombra">
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