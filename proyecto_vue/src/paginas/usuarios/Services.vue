<script setup>
import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="container mx-auto px-5 py-4 rounded-xl w-full">

            <h1 class="text-center mb-5">Servicios</h1>

            <p class="text-center">
                Buscar servicios, seleccione una categoría
            </p>
            <section class="w-full block mx-auto search mb-4">
                <form class="flex justify-between form">

                    <select v-model="servicioB" class="w-full max-w-md p-2 border-slate-400 input" id="search">
                        <option selected value="Ninguno selecionado...">Ninguno selecionado...</option>
                        <option value="Manicurista y Pedicurista">Manicurista y Pedicurista</option>
                        <option value="Barbería">Barbería</option>
                        <option value="Plomería">Plomería</option>
                        <option value="Mantenimiento de teléfonos">Mantenimiento de teléfonos</option>
                        <option value="Mantenimiento de computadoras">Mantenimiento de computadoras</option>
                        <option value="Mantenimiento de equipos de refrigeración">Mantenimiento de equipos de refrigeración
                        </option>
                        <option value="Peluquería y Maquillaje">Peluquería y Maquillaje</option>

                    </select>


                </form>

            </section>

            <div class="grid md:grid-cols-2 sm:grid-cols-2 gap-5 mt-6">

                <div style=" " v-for="usuario in usuariosfinalT" :key="usuario.id" class="bg-white sombra">
                    <!-- <div class="shadow-lg p-3 h-full">
                        <div v-if="usuario.Photo === ''"><img class="foto rounded-full"
                                src="@/assets/images/usuario-sin-foto.png"></div>
                        <div v-else><img class="foto rounded-full" v-bind:src="usuario.Photo"></div>
                        <p id="${usuario.id}" class="hidden">{{ usuario.id }}</p>
                        <h3 class="text-xl mb-2 font-extrabold">{{ usuario.FirstName }} {{ usuario.LastName }}</h3>
                        <p class="text-sm">
                            {{ usuario.Service }}
                        </p>
                        <div class="calificacion mt-6 mb-4">
                            <p>Calificación: {{ usuario.Qualification }}</p>

                        </div>

                        <div class="flex justify-center  items-stretch">
                            <a @click="verusuario(usuario.id)"
                                class=" cursor-pointer text-center text-blue-700 hover:underline">Ver usuario
                            </a>

                        </div>
                    </div> -->
                    <a @click="verusuario(usuario.id)"
                        class="cursor-pointer flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                        <div class="w-full" v-if="usuario.Photo == ''">
                            <img  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="@/assets/images/usuario-sin-foto.png" alt="">
                        </div>
                        <div class="w-full" v-else>
                            <img v-bind:src="usuario.Photo" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                             alt="">
                        </div>
                       
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{usuario.FirstName}} 
                                {{ usuario.LastName }}
                            </h5>
                            <p class="mb-3 font-normal text-gray-700 ">Presta servicio de {{ usuario.Service }}
                                y actualmente su caificación es de {{ usuario.Qualification }} </p>
                        </div>
                    </a>
                    <!-- <div class="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden sm:max-w-2xl ring-1 ring-slate-900/5"><div class="flex flex-col sm:flex-row"><div class="sm:shrink-0"><img class="w-full sm:w-[193px] h-[200px] object-cover object-bottom sm:object-center" src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=404&amp;q=80" alt="Beautiful abstract building in the sun" width="202" height="192"></div><div class="p-6 2xl:p-8 space-y-2"><div class="font-medium text-sm leading-6 text-indigo-600">Company retreats</div><a href="#" class="block font-semibold text-base text-slate-900 leading-6 hover:underline">Incredible accomodation for your team</a><p class="text-sm text-slate-600 leading-6">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that </p></div></div></div> -->
                </div>

            </div>



        </section>
    </article>
    <Footer />
</template>
<script>

import axios from "axios"
export default {
    data() {
        return {
            usuarios: [],
            servicioB: ''
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data
                this.$route.params.user = 1
            })
            .catch(e => {
                // manejar error

            })

    },
    computed: {
        usuariosfinalT() {
            if (this.servicioB === '') {
                return this.usuarios.filter(user => user.id != this.$route.params.id && user.Service != 'Ninguno selecionado...' && user.Service != 'Administrador');
            } else {
                return this.usuarios.filter(user => user.Service == this.servicioB)
            }



        },
        usuariosfinal() {
            var users = [];
            this.usuarios.forEach(user => {
                user.calificacionP = user.calificacion.reduce((a, c) => a + c) / user.calificacion.length;
                users.push(user);
            });
            return users;
        }
    },
    methods: {
        verusuario(id) {
            this.$router.push('/usuario/' + id);
        }
    }
}
</script>