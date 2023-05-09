<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/principal/HeaderPrincipal.vue'
import Footer from '../components/principal/Footer.vue'
import Modal from '../components/principal/Modal.vue'
</script>

<template>
    <main class="w-ful h-full b-principal">

        <Modal />

        <div class="opacidad ">
            <Header />
            
            <article class="py-5 w-full article flex flex-wrap justify-center">
                <section class="container mx-auto px-5 py-4 rounded-xl w-full mt-9">

                    <h1 class="text-center">Prestaciones de Servicios</h1>

                    <p class="text-center mb-5">
                        Donde puedes encontrar personal capacitado para tu disposicón.
                    </p>
                    <br>
                </section>
                <section class="w-full search mb-6">
                    <p class="mb-4">PrestaServi es una palatforma digital, donde las personas pueden ofrecer o solicitar
                        servicios y trabajos
                        que se encuentren dentro las <strong class="cursor-pointer hover:text-blue-700 hover:underline">
                            <a href="#ancla-1">categorías establecidas</a></strong>, donde puedes escoger al personal que
                        más se
                        adapté a
                        su necesidad y también al que tenga mejor calificación de servicios, es decir, que tambien puedes
                        califcar
                        al personal por el servicio prestado.
                    </p>
                    <p>¿Qué estás esperando? Crea tu cuenta y acompañanos!</p>
                </section>
                <section class="registrar-entar w-full flex justify-center mt-6 mb-8">
                    <label for="registrar">
                        <button for="registrar" type="button"
                            class="text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <label @click="ocultarsection">Crear una Cuenta</label><input @click="MostarRegistro" class="hidden" id="registrar"
                                type="checkbox"></button>
                    </label>
                </section>

                <section class="categorias w-full container mx-auto px-5 py-4 mt-24">
                    <h2>Categorías</h2>
                    <p>Cantegorías que actualmente se manejan en la plataforma</p>
                    <a name="ancla-1"></a>
                    <section class="flex flex-wrap w-full justify-between">
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Manicurista y Pedicurista</h3>
                            <img class="w-72 rounded-lg mb-3" src="@/assets/images/mp.jpg" alt="">
                            <p>
                                Se encargan del cuidado de las uñas de las manos y de los pies.
                            </p>
                        </div>
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Barbería</h3>
                            <img class="w-72  rounded-lg mb-3" src="@/assets/images/b.jpg" alt="">
                            <p>
                                Se encargan de los cortes de cabello y barba para caballeros.
                            </p>
                        </div>
                        
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Mantenimiento de teléfonos</h3>
                            <img class="w-72  rounded-lg mb-3" src="@/assets/images/mt.jpg" alt="">
                            <p>
                                Se encargan del mantenimiento y reparo de dispositvos móviles.
                            </p>
                        </div>
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Mantenimiento de computadoras</h3>
                            <img class="w-72  rounded-lg mb-3" src="@/assets/images/mc.webp" alt="">
                            <p>
                                Se encargan del mantenimiento y reparo de computadoras.
                            </p>
                        </div>
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Mantenimiento de equipos de refrigeración</h3>
                            <img class="w-72  rounded-lg mb-3" src="@/assets/images/mr.jpg" alt="">
                            <p>
                                Se encargan del mantenimiento y reparo de eqipos de refrigeración.
                            </p>
                        </div>
                        <div class="mt-6 w-80">
                            <h3 class="text-lg font-semibold mb-4">Peluquería y Maquillaje</h3>
                            <img class="w-72  rounded-lg mb-3" src="@/assets/images/pm.jpg" alt="">
                            <p>
                                Se encargan de cuidado y aplicaciones en el cabello y maquillaje facial.
                            </p>
                        </div>
                    </section>
                    
                </section>

            </article>

            <Footer />

        </div>
    </main>
    
</template>
<script>
export default {
    methods: {

        ocultarsection() {
            let divregistar = document.getElementById('divregistrarUser');
            let sectionRegistro = document.getElementById('section');
            if (sectionRegistro.classList.contains('hidden')) {
                divregistar.classList.remove('hidden');
                sectionRegistro.classList.remove('hidden');
            } else {
                sectionRegistro.classList.add('hidden');
                divregistar.classList.add('hidden');
            }
        }
    }
}
</script>