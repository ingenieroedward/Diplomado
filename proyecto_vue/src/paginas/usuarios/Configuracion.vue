<script setup>
import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="container w-full flex flex-wrap mx-auto justify-between   py-4 ">
            <h1 class="block w-full text-center mb-8">Configuración de la cuenta</h1>
            <div class="mr-1 px-4 py-2 rounded-xl">
                <h2 @click="showhidden('form1')"  class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Datos de cuenta 
                    <button class="bg-transparent border-none"><i class="bi bi-chevron-down"></i>
                        <i class="bi bi-chevron-up hidden"></i></button></h2>
                <form id="form1" class="w-80 hidden px-4 py-2 rounded-xl">
                    <label class="w-full block" for="nombre">Nombres</label>
                    <input class="w-full input p-1 mb-4" type="text" id="nombre">
                    <label class="w-full block" for="apellido">Apellidos</label>
                    <input class="w-full input p-1 mb-4" type="text" id="apellido">
                    <label class="w-full block" for="telefono">Teléfono</label>
                    <input class="w-full input p-1 mb-4" type="text" id='telefono'>
                    <label class="w-full block" for="descripcion">Descripción</label>
                    <input class="w-full input p-1 mb-4" type="text" id='descripcion'>
                    <label class="w-full block" for="servicio">Servicio</label>
                    <select class="w-full max-w-md p-2 mb-4 border-slate-400 input"
                    id="servicio">
                    <option value="default">Ninguno selecionado...</option>
                    <option value="1">Manicurista y Pedicurista</option>
                    <option value="2">Barbería</option>
                    <option value="3">Plomería</option>
                    <option value="4">Mantenimiento de teléfonos</option>
                    <option value="5">Mantenimiento de computadoras</option>
                    <option value="6">Mantenimiento de equipos de refrigeración</option>
                    <option value="7">Peluquería y Maquillaje</option>

                </select>
                    <div class="flex justify-center">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                            <button type="button" class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Cancelar</button>
                    </div>
                    
                </form>
                
            </div>
            <div class="mr-1 px-4 py-2 rounded-xl">
                <h2 @click="showhidden2('form2')" class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Cambiar contraseña
                    <button class="bg-transparent border-none">
                        <i class="bi bi-chevron-down"></i>
                        <i class="bi bi-chevron-up hidden"></i></button>
                    </h2>
            <form id="form2" class="w-80 hidden px-4 py-2 rounded-xl">
                    <label class="w-full block" for="c-actual">Contraseña actual</label>
                    <input class="w-full input p-1 mb-4" type="password" id="c-actual">
                    
                    <label class="w-full block" for="c-nueva">Nueva contraseña</label>
                    <input class="w-full input p-1 mb-4" type="password" id="c-nueva">
                    
                    <label class="w-full block" for="c-confrimar">Confirmar contraseña</label>
                    <input class="w-full input p-1 mb-4" type="password" id="c-confirmar">
                    
                   
                    <div class="flex justify-center">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                            <button type="button" class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Cancelar</button>
                    </div>
                    
                </form>
            </div>
            <div class=" px-4 py-2 rounded-xl">
                <h2 @click="showhidden3('form3')" class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Cambiar email
                    <button  class="bg-transparent border-none"><i class="bi bi-chevron-down"></i>
                    <i class="bi bi-chevron-up hidden"></i></button></h2>
            <form id="form3" class="w-80 hidden px-4 py-2 rounded-xl">
                    <label class="w-full block" for="e-actual">Email actual</label>
                    <input class="w-full input p-1 mb-4" type="password" id="e-actual">
                    
                    <label class="w-full block" for="e-nuevo">Nueva email</label>
                    <input class="w-full input p-1 mb-4" type="email" id="e-nuevo">
                    
                    <label class="w-full block" for="contaseña">Contraseña</label>
                    <input class="w-full input p-1 mb-4" type="password" id="contaseña">
                    
                   
                    <div class="flex justify-center">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                            <button type="button" class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Cancelar</button>
                    </div>
                    
                </form>
            </div>
        </section>
    </article>
    <Footer />
</template>
<script>
    import axios from "axios"
    export default {
        data(){
            return{
                usuario:[]
            }
        },
        mounted() {
            axios.get('https://apigenerator.dronahq.com/api/UaiHIWrV/usuarios/'+this.$route.params.id)
            .then(response => {
                // manejar respuesta exitosa
                this.usuario = response.data
            })
            .catch(e => {
                // manejar error
                
            })
        },
        methods:{
            showhidden(id){
                let form = document.getElementById(id);
                if(form.classList.contains('hidden')){
                    form.classList.remove('hidden');
                    form.classList.add('bg-white');
                }else{
                    form.classList.add('hidden');
                    form.classList.remove('bg-white');
                }

            },
            showhidden2(id){
                let form = document.getElementById(id);
                if(form.classList.contains('hidden')){
                    form.classList.remove('hidden');
                    form.classList.add('bg-white');
                }else{
                    form.classList.add('hidden');
                    form.classList.remove('bg-white');
                }
            },
            showhidden3(id){
                let form = document.getElementById(id);
                if(form.classList.contains('hidden')){
                    form.classList.remove('hidden');
                    form.classList.add('bg-white');
                }else{
                    form.classList.add('hidden');
                    form.classList.remove('bg-white');
                }

            }
        }  
    }
    
</script>