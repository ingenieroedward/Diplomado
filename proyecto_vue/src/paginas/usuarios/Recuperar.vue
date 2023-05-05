<template>
    <div class="w-full h-full">
        <header>
            <nav class="nav h-16">
                <div class="container py-2 mx-auto px-2 flex flex-wrap items-center  justify-between h-full">

                    <div class="flex items-center h-16 ml-2">
                        <div class="c1">
                            <h1>Presta</h1>
                        </div>
                        <div class="c2">
                            <h1>Servi</h1>
                        </div>
                    </div>
                    <button id="bntResponsive"
                        class="p-2 ml-2 text-sm text-black rounded-lg md:hidden hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
                        data-collapse-toggle="mobile-menu" type="button" aria-controls="mobile-menu" aria-expanded="false">
                        <svg id="iconOpen" class="text-black w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg id="iconClose" class="text-black hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div class="hidden md:block md:w-auto w-full" id="mobile-menu">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <a @click="cancelar('/')" style="cursor:pointer;"
                                    class="block py-2 pr-4 pl-3 text-gray-500 cursor-pointer">
                                    <i class="bi bi-arrow-bar-left"></i> Regresar</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <hr class="mt-4">
            </nav>
        </header>
        <article class="w-full flex justify-center mt-6 mb-4 ">
            <div id="divrecuperar" class="login md:overflow-y-scroll sombra">
                <br>
                <h2 style="font-size: 2rem !important;">Recuperar cuenta</h2>
                <p class="mb-4">Introduce tu correo electrónico para buscar tu cuenta.</p>
                <form @submit.prevent="buscarEmail">
                    <label for="emailr">Email</label>
                    <input v-model="email" class="w-full mb-4 p-1" type="email" name="email" id="emailr"
                        placeholder="Escriba su correo electronico" required>
                    <div style="justify-content: end;" class="flex w-full self-end">
                        <button type="button"
                            class=" mb-4  text-base text-black border border-gray-400 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5">
                            <a @click="cancelar('/')">Cancelar</a></button>

                        <button id="recuperar" type="submit"
                            class=" mb-4  ml-3 text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Buscar</button>
                    </div>

                </form>

            </div>
            <div id="divrvalidar" class="login md:overflow-y-scroll sombra hidden">

                <h2 style="font-size: 2rem !important;">Validar cuenta</h2>
                <hr>
                <p class="mb-4">Validaremos tu teléfono.</p>
                <div>
                    <form @submit.prevent="buscarTelefono">
                        <label for="emailv">Enviar codigo al correo electronico</label>
                        <input v-model="validarEmail" class="w-full mb-4 p-1" type="email" name="email" id="emailv" required
                            readonly>
                        <div v-if="this.usuario.length > 0" class="w-full mb-4">
                            <img class="block mx-auto w-16" src="@/assets/images/usuario-sin-foto.png" alt="logo">
                            <h3 style="padding: 0;" class="text-sm text-center m-0 p-0 mt-2">{{ this.usuario[0].FirstName }}
                                {{ this.usuario[0].LastName }}</h3>
                            <p class="text-xs text-center m-0">Usuario de PrestaServi</p>
                        </div>
                        <label for="tele">Teléfono asociado a la cuenta</label>
                        <input v-model="telefono" class="w-full mb-4 p-1" type="text" name="tele" id="tele" required>
                        <div id="errortelefono"
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
                                <span class="font-medium">Telefono incorrecto</span>
                            </div>
                        </div>
                        <div style="justify-content: end;" class="flex w-full self-end">

                            <button type="button"
                                class=" mb-4  text-base text-black border border-gray-400 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5">
                                <a @click="cancelar('')">¿No eres tú?</a></button>

                            <button id="validar" type="submit"
                                class=" mb-4  ml-3 text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Validar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="divcambiar" class="login md:overflow-y-scroll sombra hidden">

                <h2 style="font-size: 2rem !important;">Cambiar contaseña</h2>
                <hr>
                <p class="mb-4">Escribe una nueva contraseña.</p>
                <div>
                    <form @submit.prevent="cambiarContrasena">
                        <label for="contrasena">Nueva contaseña</label>
                        <input v-model="contrasena" class="w-full mb-4 p-1 input" type="password" name="contrasena"
                            id="contrasena" required>
                        <label for="contrasenaC">Confirmar</label>
                        <input v-model="contrasenaC" class="w-full mb-4 p-1 input" type="password" name="contrasenaC"
                            id="contrasenaC" required>
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
                        <input @click="mostrarcontraseña('input')" id="mostrarE" type="checkbox"><label for="mostrarE">
                            Mostrar contraseñas</label><br>
                        <div style="justify-content: end;" class="flex w-full self-end">
                            <button type="button"
                                class=" mb-4  text-base text-black border border-gray-400 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5">
                                <a @click="cancelar('')">Cancelar</a></button>

                            <button id="cambiar" type="submit"
                                class=" mb-4  ml-3 text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Cambiar</button>
                        </div>
                    </form>
                </div>


            </div>
        </article>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            usuarios: [],
            email: '',
            usuario: [],
            validarEmail: '',
            telefono: '',
            contrasena: '',
            contrasenaC: ''

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
        cancelar(path) {
            if (path === '') {
                location.reload();
            }
            this.$router.push(path)
        },
        buscarEmail() {
            this.usuario = this.usuarios.filter(user => user.Email === this.email)
            console.log(this.usuario[0])
            if (this.usuario.length > 0) {
                this.validarEmail = this.email
                this.showhidden('divrecuperar', 'divrvalidar');

            } else {

            }
        },
        showhidden(id1, id2) {
            document.getElementById(id1).classList.add('hidden');
            document.getElementById(id2).classList.remove('hidden');
        },
        buscarTelefono() {
            if (this.usuario[0].PhoneNumber === this.telefono) {
                this.showhidden('divrvalidar', 'divcambiar')
            } else {
                document.getElementById('errortelefono').classList.remove('hidden');
                setTimeout(() => { document.getElementById('errortelefono').classList.add('hidden') }, 3000)
            }
        },
        mostrarcontraseña(clase) {
            let inputs = document.querySelectorAll('.' + clase)
            inputs.forEach(input => input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password'));
        },
        cambiarContrasena() {

            if (this.contrasenaC === this.contrasena) {
                axios.put('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.usuario[0].id, {
                    FirstName: this.usuario[0].FirstName,
                    LastName: this.usuario[0].LastName,
                    PhoneNumber: this.usuario[0].PhoneNumber,
                    Description: this.usuario[0].Description,
                    Service: this.usuario[0].Service,
                    Email: this.usuario[0].Email,
                    Password: this.contrasena,
                    Photo: this.usuario[0].Photo,
                    Images: this.usuario[0].Images,
                    Qualification: this.usuario[0].Qualification,
                    Votes: this.usuario[0].Votes,
                    Users: this.usuario[0].Users

                }).then(function (response) {
                    console.log(response.data);
                    alert('Cambio exitoso! Inicia Sesión')
                    location.reload()

                }).catch(function (error) {
                    console.log(error)
                });
            } else {
                document.getElementById('errorcontrasena').classList.remove('hidden');
                setTimeout(() => { document.getElementById('errorcontrasena').classList.add('hidden') }, 3000)

            }
        }
    }
}
</script>