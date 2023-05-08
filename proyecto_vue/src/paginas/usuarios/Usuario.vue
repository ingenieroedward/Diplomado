<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Modal from '../../components/others/ModalS.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <!-- <Header /> -->
    <Modal/>
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="container flex justify-center mx-auto  px-5 py-4 ">
            <div v-for="usuario in mostarUser" class="rounded-xl  bg-white px-5 flex justify-center flex-wrap py-4">
                <div class="flex flex-wrap justify-start mb-8 px-6">
                    <div v-if="usuario.Photo === ''"><img id="foto" class="w-60 mr-12 rounded-full" src="@/assets/images/usuario-sin-foto.png" alt=""></div>
                    <div v-else><img id="foto" class="w-60 mr-12 rounded-full" :src="usuario.Photo" alt=""></div>
                    
                    <div class="mt-12  mr-12 w-74">
                        <h1 class="w-64">{{ usuario.FirstName }} {{ usuario.LastName }}</h1>
                        <p class="w-64">{{ usuario.Description }}</p>
                        <p class="w-64">{{ usuario.Service }}</p>
                        <p><strong>Calificación:</strong> <i>{{ usuario.Qualification }}</i></p>
                    </div>
                    <div class="mt-12 mr-12 ">
                        <h2 class="mb-2">Contactar usuario</h2>
                       
                        <button @click="solicitar" type="button"
                            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Solicitar servicio</button>
                        <h2 class="mb-2 mt-4">Calificar usuario</h2>
                        <form class="">
                            <p id="calificado" class="clasificacion flex justify-between flex-wrap w-full">
                            <div class="w-full flex justify-between">
                                <input class="hidden radio" id="1" type="radio" name="estrellas" value="1"><!--
                                    --><label @click="radio1" id="label1" class="text-3xl cursor-pointer"
                                    for="1">★</label><!--
                                    --><input class="hidden radio" id="2" type="radio" name="estrellas" value="2"><!--
                                    --><label @click="radio2" id="label2" class="text-3xl cursor-pointer"
                                    for="2">★</label><!--
                                    --><input class="hidden radio" id="3" type="radio" name="estrellas" value="3"><!--
                                    --><label @click="radio3" class="text-3xl cursor-pointer" for="3">★</label><!--
                                    --><input class="hidden radio" id="4" type="radio" name="estrellas" value="4"><!--
                                    --><label @click="radio4" class="text-3xl cursor-pointer" for="4">★</label><!--
                                    --><input class="hidden radio" id="5" type="radio" name="estrellas" value="5"><!--
                                    --><label @click="radio5" class="text-3xl cursor-pointer" for="5">★</label>
                            </div>
                            </p>
                        </form>
                    </div>
                </div>
                <div class="imagenes flex flex-wrap px-4">
                    <h2 class="mb-6 mt-6 block w-full">Trabajos Realizados</h2>
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
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
            usuario:[],
            id: this.$route.params.id
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data
                var usuarios2 = response.data
                usuarios2.forEach(user => {
                    if (user.id == this.$route.params.id) {
                        this.usuario.push(user);
                    }
                })
            })
            .catch(e => {
                // manejar error

            })
    },
    computed: {
        mostarUser() {
            var usuario = [];
            this.usuarios.forEach(user => {
                if (user.id === parseInt(this.id)) {
                    usuario.push(user);
                }
            })
            return usuario
        }
    },

    methods: {

        limpiar() {
            let labels = document.querySelectorAll('label');
            labels.forEach(label => {
                if (label.classList.contains('text-yellow-600')) {
                    label.classList.remove('text-yellow-600')
                }
            })
        },
        radio1() {
            this.limpiar()
            let label = document.getElementById('label1');
            let radio = document.getElementById('1');
            label.classList.add('text-yellow-600');
            this.userc(radio.value);
        },
        radio2() {
            this.limpiar()
            let labels = document.querySelectorAll('label');
            let radio = document.getElementById('2');
            console.log(labels.length)
            for (let i = 0; i < labels.length; i++) {
                if (i < 2) {
                    labels[i].classList.add('text-yellow-600');
                }
            }
            this.userc(radio.value);
        },
        radio3() {
            this.limpiar()
            let labels = document.querySelectorAll('label');
            let radio = document.getElementById('3');
            console.log(labels.length)
            for (let i = 0; i < labels.length; i++) {
                if (i < 3) {
                    labels[i].classList.add('text-yellow-600');
                }
            }
            this.userc(radio.value);
        },
        radio4() {
            this.limpiar()
            let labels = document.querySelectorAll('label');
            let radio = document.getElementById('4');
            console.log(labels.length)
            for (let i = 0; i < labels.length; i++) {
                if (i < 4) {
                    labels[i].classList.add('text-yellow-600');
                }
            }
            this.userc(radio.value);
        },
        radio5() {
            this.limpiar()
            let labels = document.querySelectorAll('label');
            let radio = document.getElementById('5');
            console.log(labels.length)
            for (let i = 0; i < labels.length; i++) {

                labels[i].classList.add('text-yellow-600');

            }
            this.userc(radio.value);
        },
        userc(value) {
            let op = confirm('¿Desea calificar con ' + value + ' Estrellas?')
            setTimeout(() => {
                op ? document.getElementById('calificado').textContent = 'Usuario calificado: ' + value + '★' : this.limpiar()
            }, 2000)
            var vector = this.usuario[0].Votes;
            vector.push(parseInt(value))
            var suma = vector.reduce((a,c)=>a+c)/vector.length
            axios.put('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.$route.params.id, {
                    FirstName: this.usuario[0].FirstName,
                    LastName: this.usuario[0].LastName,
                    PhoneNumber: this.usuario[0].PhoneNumber,
                    Description: this.usuario[0].Description,
                    Service: this.usuario[0].Service,
                    Email: this.usuario[0].Email,
                    Password: this.usuario[0].Password,
                    Photo: this.usuario[0].Photo,
                    Images: this.usuario[0].Images,
                    Qualification: suma,
                    Votes: vector,
                    Users: this.usuario[0].Users

                }).then(function (response) {
                    console.log(response.data);
                    location.reload()

                }).catch(function (error) {
                    console.log(error)
                });
        },
        solicitar(){     
           let section = document.getElementById('section');
           
           if(section.classList.contains('hidden')){
                section.classList.remove('hidden');
           }else{
                section.classList.add('hidden');
           }
        }
    }
}
</script>