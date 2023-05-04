<script setup>
import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        
        <section class="container flex flex-wrap justify-center mx-auto  px-5 py-4 ">
            <div id="alert-border-3" class="hidden flex rounded-lg p-4 mb-4 w-full text-green-800 border-t-4 border-green-300 bg-green-50" role="alert">
                <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div class="ml-3 text-sm font-medium">
                  Cambio exitoso
                </div>
                
            </div>
            <div v-for="usuario in usuarioMe" class="rounded-xl  bg-white px-5 flex justify-center flex-wrap py-4">
                <div class="flex flex-wrap justify-start mb-8 px-6">
                    <div>
                        <img class="w-60 mr-12 rounded-full" src="@/assets/images/usuario-sin-foto.png" alt="">
                    <input class="hidden" id="fperfil" type="file">
                    <label  class="w-full block ml-12 cursor-pointer text-center" for="fperfil"><i class="bi bi-pencil-square"></i></label>
                    </div>
                    
                    <div class="mt-12 mr-12 w-80">
                        <h1 class="w-64">{{usuario.FirstName}} {{usuario.LastName}}</h1>
                        <p class="w-64">{{usuario.Services}}</p>
                        <p class="w-64">{{usuario.Description}}</p>
                        <p><strong>Mi Calificación:</strong> <i>{{usuario.Qualification}}</i></p>
                    </div>
                    <div class="mt-12 mr-12 ">
                        <h2 class="mb-2">Mis Datos</h2>
                        <p><i class="bi bi-whatsapp text-lg"></i> {{usuario.PhoneNumber}}</p>
                        <p class="flex flex-wrap"><i class="bi bi-envelope-at text-lg"></i> {{usuario.Email}}</p>
                    </div>
                </div>
                
                <div class="imagenes flex flex-wrap px-4">
                    <h2 class="mb-6 mt-6 block w-full">Trabajos Realizados</h2>
                    <div class="flex flex-wrap justify-between w-full">
                        <button type="button" class="text-lg text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full  px-5 py-2.5 mr-2 mb-2">
                            <i class="bi bi-plus-circle text-lg"></i> Agregar imagen</button>
                            <button type="button" class="text-lg text-white bg-red-500 border border-gray-300 focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-full  px-5 py-2.5 mr-2 mb-2">
                                <i class="bi bi-plus-circle text-lg"></i> Eliminar selecionadas</button>
                    </div>
                    
                    <label for="1">
                        <input class="text-rigth" id="1" type="checkbox">
                        <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    </label>
                    <label for="2">
                        <input class="text-rigth" id="2" type="checkbox">
                        <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    </label>
                    <label for="3">
                        <input class="text-rigth" id="3" type="checkbox">
                        <img class="w-52 rounded-lg mb-4 mr-4" src="@/assets/images/mc.webp" alt="" srcset="">
                    </label>
                    
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
            usuarios: []
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data
                
                console.log(response.data);
            })
            .catch(e => {
                // manejar error
                
            })
            
    },
    computed:{
        usuarioMe(){
            return this.usuarios.filter(user=> user.id==this.$route.params.id);
        }
    }
}
</script>