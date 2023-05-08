
<template>
    <section id="section" class="hidden registar-iniciar flex justify-center items-center">

        <div id="divregistrar" class="hidden registrar md:overflow-y-scroll sombra">
            <button class="cursor-pointer">
                <label @click="ocultarsection" class="cursor-pointer" for="registrar">
                    <svg class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </label></button>
            <br>
            <h2 style="font-size: 2rem !important;">Regístrate</h2>
            <p class="mb-4">Es rápido y fácil.</p>
            <div id="registroexitoso" class="hidden flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 " role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Registro exitoso!</span>
                </div>
              </div>
            <form @submit.prevent="registar">
                <div id="Existe"
                    class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Existe usuario registardo con ese email</span>
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div style="width: 49%;">
                        <label for="name">Nombre</label>
                        <input v-model="nombreR" class="w-full max-w-xs mb-4 p-1" id="name" type="text"
                            placeholder="Escriba su nombre" required>
                    </div>
                    <div style="width: 49%;">
                        <label for="lastname">Apellido</label>
                        <input v-model="apellidoR" class="w-full mb-4 p-1" id="lastname" type="text"
                            placeholder="Escriba su apellido" required>
                    </div>
                </div>
                <label for="email">Email</label>
                <input v-model="emailR" class="w-full mb-4 p-1" type="email" name="email" id="email"
                    placeholder="Escriba su correo electronico" required>
                <label for="services">Servicios prestados</label>
                <select v-model="servicioR" class="w-full mb-4 p-2" id="search">
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
                <div class="flex justify-between w-full">
                    <div style="width: 49%;">
                        <label for="password">Contraseña</label>
                        <input v-model="contrasenaR" class="w-full mb-4 p-1 inputR" id="password" type="password"
                            placeholder="Escriba una contaseña" required>
                    </div>
                    <div style="width: 49%;">
                        <label for="confirmar">Confirmar</label>
                        <input v-model="contrasenaCR" class="w-full mb-4 p-1 inputR" id="confirmar" type="password"
                            placeholder="Confirme la contraseña" required>
                    </div>
                </div>
                <div id="errorcontrasena"
                    class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Contraseñas no coinciden</span>
                    </div>
                </div>
                <input @click="mostrarcontraseña('inputR')" id="mostrarE" type="checkbox"><label for="mostrarE">
                    Mostrar contraseñas</label><br>
                <input class="mb-4" type="checkbox" name="" id="legal" required><label for="legal"> Acepto los <a
                        class="text-blue-700 hover:underline" href="#">Términos y condiciones</a></label>
                <button
                    class=" mb-4 block w-full text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Regístrate</button>


            </form>

        </div>
        <div id="divlogin" class="overflow-none login md:overflow-y-scroll hidden sombra">
            <button class="cursor-pointer">
                <label @click="mostrarLogin" class="cursor-pointer" for="login">
                    <svg class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </label></button>
            <br>
            <h2 style="font-size: 2rem !important;">Iniciar Sesión</h2>
            <p class="mb-4">Es rápido y fácil.</p>
            <div id="inicioexitoso" class="hidden flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 " role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Bienvenido!</span> Inciando sesión...
                </div>
              </div>
            <form @submit.prevent="inciarsesion">
                <div id="emailError"
                    class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Email no registrado!</span>
                    </div>
                </div>
                <label for="emaill">Email</label>

                <input v-model="emailL" class="w-full mb-4 p-1" type="email" name="email" id="emaill"
                    placeholder="Escriba su correo electronico" required>
                
                <label for="contraseñal">Contraseña</label>
                <input v-model="contrasenaL" class="w-full mb-4 p-1 inputL" type="password" name="contraseña" id="contraseñal"
                    placeholder="Escriba su contraseña" required>
                <div id="contrasenaError"
                    class="flex hidden p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                    role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Contraseña incorrecta!</span>
                    </div>
                </div>
                <input @click="mostrarcontraseña('inputL')" id="mostrarL" type="checkbox"><label for="mostrarL">
                    Mostrar contraseñas</label>
                <a @click="recuperar" class="text-blue-700 hover:underline text-center block mb-4">¿Has olvidado tu
                    contaseña?</a>

                <button
                    class=" mb-4 block w-full text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Iniciar Sesión</button>
            </form>

        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            usuarios: [],
            emailL: '',
            contrasenaL: '',
            nombreR: '',
            apellidoR: '',
            emailR: '',
            telefonoR: '',
            servicioR: '',
            contrasenaR: '',
            contrasenaCR: ''
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                this.usuarios = response.data
            })
            .catch(e => {
            })
    },
    methods: {
        recuperar(){
            this.$router.push('/recuperar')
        },
        ocultarsection() {
            let divregistar = document.getElementById('divregistrar');
            let sectionRegistro = document.getElementById('section');
            if (sectionRegistro.classList.contains('hidden')) {
                divregistar.classList.remove('hidden');
                sectionRegistro.classList.remove('hidden');
            } else {
                sectionRegistro.classList.add('hidden');
                divregistar.classList.add('hidden');
            }
        },
        mostrarLogin() {
            let sectionRegistro = document.getElementById('section');
            let divlogin = document.getElementById('divlogin');
            if (sectionRegistro.classList.contains('hidden')) {
                divlogin.classList.remove('hidden');
                sectionRegistro.classList.remove('hidden');
            } else {
                sectionRegistro.classList.add('hidden');
                divlogin.classList.add('hidden');
            }
        },
        inciarsesion() {
            axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
                .then(response => {
                    var usuarios = response.data

                    let usuario = usuarios.filter((user) => user.Email === this.emailL);
                    if (usuario.length === 0) {
                        document.getElementById('emailError').classList.remove('hidden')
                        setTimeout(() => { document.getElementById('emailError').classList.add('hidden') }, 3000)
                    } else if (usuario[0].Password === this.contrasenaL && usuario[0].Service === 'Administrador') {
                        alert('Bienvenido Admin');
                        return this.$router.push('/admin/' + usuario[0].id);
                    } else if(usuario[0].Password === this.contrasenaL){
                        document.getElementById('inicioexitoso').classList.remove('hidden')
                        setTimeout(() => { document.getElementById('inicioexitoso').classList.add('hidden') }, 3000)
                        setTimeout(() => { return this.$router.push('/welcome/' + usuario[0].id) }, 4000)
                        
                    }else{
                        document.getElementById('contrasenaError').classList.remove('hidden')
                        setTimeout(() => { document.getElementById('contrasenaError').classList.add('hidden') }, 3000)

                    }
                })
                .catch(e => {
                })
        },
        registar() {
            var existe = this.usuarios.filter(user => user.Email === this.emailR)
            console.log(existe)
            if (existe.length > 0) {
                document.getElementById('Existe').classList.remove('hidden');
                setTimeout(() => { document.getElementById('Existe').classList.add('hidden') }, 3000)
            } else if(this.contrasenaR === this.contrasenaCR){
                
                    axios.post('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/', {
                    FirstName: this.nombreR,
                    LastName: this.apellidoR,
                    Password: this.contrasenaR,
                    Votes: 0,
                    Qualification: 0,
                    Description: '',
                    Images: [],
                    Users: [],
                    Photo: '',
                    PhoneNumber: this.telefonoR,
                    Email: this.emailR,
                    Service: this.servicioR
                }).then(function (response) {
                    console.log(response.data.id);
                    if (response.status == 201) {
                        console.log(response.data)
                        let id = response.data.id
                        document.getElementById('registroexitoso').classList.remove('hidden');
                        setTimeout(() => { document.getElementById('registroexitoso').classList.add('hidden') }, 3000)
                        location.reload();

                    }
                }).catch(function (error) {
                    console.log(error)
                });

            }else{
                document.getElementById('errorcontrasena').classList.remove('hidden');
                setTimeout(() => { document.getElementById('errorcontrasena').classList.add('hidden') }, 3000)
            }

        },
        mostrarcontraseña(clase) {
            let inputs = document.querySelectorAll('.' + clase)
            inputs.forEach(input => input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password'));
        }
    }
}
</script>