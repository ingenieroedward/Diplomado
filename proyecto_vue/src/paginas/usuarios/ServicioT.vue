<script setup>
import headerT from '@/components/others/Dashboard.vue'
import modal from '@/components/others/ModalT.vue'
</script>
<template>
    
    <headerT />
    <modal/>
    <article class=" py-9 article flex flex-wrap justify-center p-4 sm:ml-64">

        <h1 style="font-size: 2rem !important;" class="text-center mb-5 bg-white rounded-xl sombra p-2 w-full">
            Servicios pendientes</h1>

        <section style="width: 100%; min-width:320px;">

            <div
                class="w-full flex flex-wrap items-center justify-around p-4 text-center bg-gray-200 rounded-lg shadow sm:p-8 sombra mb-4 hover:bg-gray-200">
                <p class="w-full block text-start text-xs text-gray-400 mb-4">Identificador: 1</p>
                <h5 class="mb-2 text-2xl font-bold text-gray-900 w-full text-start">Edward Diaz Padilla</h5>
                <p class="mb-5 text-base text-start text-gray-500 sm:text-lg dark:text-gray-400">
                    Hola quiero perdir un servicio en el barrio 20 de julio. Fecha: 01/01/01 Hora: 08:30<br> Lorica-Córdoba.
                    Teléfono 3024487674</p>


                <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a @click="aceptar"
                        class="cursor-pointer w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <i class="bi bi-check2 mr-2"></i>
                        <div class="text-left">

                            <div class="-mt-1 font-sans text-sm font-semibold">Aceptar</div>
                        </div>
                    </a>
                    <a @click="rechazar"
                        class="cursor-pointer w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <i class="bi bi-x-lg mr-2"></i>
                        <div class="text-left">

                            <div class="-mt-1 font-sans text-sm font-semibold">Rechazar</div>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    </article>
</template>
<script>
export default {
    methods: {
        aceptar() {
            let section = document.getElementById('section');
            let div1 = document.getElementById('div')
            if (section.classList.contains('hidden')) {
                section.classList.remove('hidden');
                div1.classList.remove('hidden');
                
            }
        },
        rechazar(){
            let section = document.getElementById('section');
            let div1 = document.getElementById('div2')
            if (section.classList.contains('hidden')) {
                section.classList.remove('hidden');
                div1.classList.remove('hidden');
                
            }
        }
    }
}
</script>