<script setup>
    import Header from '../../components/others/Header.vue'
    import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="container w-full flex flex-wrap mx-auto justify-between   py-4 ">
            <h1 class="block w-full text-center mb-8">Configuración de la cuenta</h1>
            <div id="exitoso"
                class="hidden flex w-full p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 "
                role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Cambio exitoso!</span>
                </div>
            </div>
            <div class="mr-1 px-4 py-2 rounded-xl">
                <h2 @click="showhidden('form1')"
                    class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Datos de cuenta
                    <button class="bg-transparent border-none"><i class="bi bi-chevron-down"></i>
                        <i class="bi bi-chevron-up hidden"></i></button>
                </h2>
                <form @submit.prevent="actualizarDatos" id="form1" class="w-80 hidden px-4 py-2 rounded-xl">
                    <div id="info"
                        class="hidden flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Llenar solo los datos que desea actualizar!</span>
                        </div>
                    </div>
                    <label class="w-full block" for="nombre">Nombres</label>
                    <input v-model="nombreU" class="w-full input p-1 mb-4" type="text" id="nombre">
                    <label class="w-full block" for="apellido">Apellidos</label>
                    <input v-model="apellidoU" class="w-full input p-1 mb-4" type="text" id="apellido">
                   

                    <div class="flex justify-center">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                        <button @click="cancelar" type="button"
                            class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Cancelar</button>
                    </div>

                </form>

            </div>
            <div class="mr-1 px-4 py-2 rounded-xl">
                <h2 @click="showhidden2('form2')"
                    class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Cambiar contraseña
                    <button class="bg-transparent border-none">
                        <i class="bi bi-chevron-down"></i>
                        <i class="bi bi-chevron-up hidden"></i></button>
                </h2>
                <form @submit.prevent="cambiarContrasena" id="form2" class="w-80 hidden px-4 py-2 rounded-xl">
                    <label class="w-full block" for="c-actual">Contraseña actual</label>
                    <input v-model="cActual" class="w-full input p-1 mb-4 inputCC" type="password" id="c-actual" required>
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

                    <label class="w-full block" for="c-nueva">Nueva contraseña</label>
                    <input v-model="cNueva" class="w-full input p-1 mb-4 inputCC" type="password" id="c-nueva" required>

                    <label class="w-full block" for="c-confrimar">Confirmar contraseña</label>
                    <input v-model="cConfirm" class="w-full input p-1 mb-4 inputCC" type="password" id="c-confirmar"
                        required>
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
                    <input @click="mostrarcontraseña('inputCC')" id="mostrarC" type="checkbox"><label for="mostrarC">
                        Mostrar contraseñas</label>
                    <div class="flex justify-center mt-4">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                        <button @click="cancelar" type="button"
                            class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Cancelar</button>
                    </div>

                </form>
            </div>
            <div class=" px-4 py-2 rounded-xl">
                <h2 @click="showhidden3('form3')"
                    class="cursor-pointer block w-80 text-center mb-4 px-4 py-2 rounded-xl bg-white">Cambiar email
                    <button class="bg-transparent border-none"><i class="bi bi-chevron-down"></i>
                        <i class="bi bi-chevron-up hidden"></i></button>
                </h2>
                <form @submit.prevent="cambiarEmail" id="form3" class="w-80 hidden px-4 py-2 rounded-xl">
                    <label class="w-full block" for="e-actual">Email actual</label>
                    <input v-model="eActual" class="w-full input p-1 mb-4" type="email" id="e-actual">

                    <label class="w-full block" for="e-nuevo">Nueva email</label>
                    <input v-model="eNuevo" class="w-full input p-1 mb-4" type="email" id="e-nuevo">

                    <label class="w-full block" for="contaseña">Contraseña</label>
                    <input v-model="ceActual" class="w-full input p-1 mb-4 inputCE" type="password" id="contaseña">
                    <input @click="mostrarcontraseña('inputCE')" id="mostrarE" type="checkbox"><label for="mostrarE">
                        Mostrar contraseñas</label>
                    <div id="EcontrasenaError"
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
                            <span class="font-medium">Contraseña incorrecta y/o email incorrecto!</span>
                        </div>
                    </div>

                    <div class="flex justify-center mt-4">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Guardar</button>
                        <button @click="cancelar" type="button"
                            class="text-white mr-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Cancelar</button>
                    </div>

                </form>
            </div>
        </section>
        <section class="w-full flex justify-center">
            <button @click="eliminar" type="button"
                class="w-80 text-white text-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">
                Eliminar cuenta</button>

        </section>
    </article>
    <Footer />
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            usuario: [],
            nombreU: '',
            apellidoU: '',
            cActual: '',
            cNueva: '',
            cConfirm: '',
            eNuevo: '',
            eActual: '',
            ceActual: ''


        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                var usuarios = response.data
                usuarios.forEach(user => {
                    if (user.id == this.$route.params.id) {
                        this.usuario.push(user);
                    }
                })
            })
            .catch(e => {
                // manejar error

            })

    },
    methods: {
        showhidden(id) {
            let form = document.getElementById(id);
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden');
                form.classList.add('bg-white');
            } else {
                form.classList.add('hidden');
                form.classList.remove('bg-white');
            }
            document.getElementById('info').classList.remove('hidden');
            setTimeout(() => { document.getElementById('info').classList.add('hidden') }, 4000)


        },
        showhidden2(id) {
            let form = document.getElementById(id);
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden');
                form.classList.add('bg-white');
            } else {
                form.classList.add('hidden');
                form.classList.remove('bg-white');
            }

        },
        showhidden3(id) {
            let form = document.getElementById(id);
            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden');
                form.classList.add('bg-white');
            } else {
                form.classList.add('hidden');
                form.classList.remove('bg-white');
            }

        },
        cancelar() {
            location.reload();
        },
        actualizarDatos() {
            if (this.nombreU === '') {
                this.nombreU = this.usuario[0].FirstName;
            } if (this.apellidoU === '') {
                this.apellidoU = this.usuario[0].LastName;
            } if (this.telefonoU === '') {
                this.telefonoU = this.usuario[0].PhoneNumber;
            } if (this.descriptionU === '') {
                this.descriptionU = this.usuario[0].Description;
            } if (this.servicioU === '') {
                this.servicioU = this.usuario.Service;
            }
            axios.put('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.$route.params.id, {
                FirstName: this.nombreU,
                LastName: this.apellidoU,
                PhoneNumber: this.telefonoU,
                Description: this.descriptionU,
                Service: this.servicioU,
                Email: this.usuario[0].Email,
                Password: this.usuario[0].Password,
                Photo: this.usuario[0].Photo,
                Images: this.usuario[0].Images,
                Qualification: this.usuario[0].Qualification,
                Votes: this.usuario[0].Votes,
                Users: this.usuario[0].Users

            }).then(function (response) {
                console.log(response.data);
                document.getElementById('exitoso').classList.remove('hidden');
                setTimeout(() => { document.getElementById('ezitoso').classList.add('hidden') }, 3000)
                location.reload()

            }).catch(function (error) {
                console.log(error)
            });

        },
        cambiarContrasena() {
            if (this.cActual === this.usuario[0].Password) {
                if (this.cConfirm === this.cNueva) {
                    axios.put('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.$route.params.id, {
                        FirstName: this.usuario[0].FirstName,
                        LastName: this.usuario[0].LastName,
                        PhoneNumber: this.usuario[0].PhoneNumber,
                        Description: this.usuario[0].Description,
                        Service: this.usuario[0].Service,
                        Email: this.usuario[0].Email,
                        Password: this.cNueva,
                        Photo: this.usuario[0].Photo,
                        Images: this.usuario[0].Images,
                        Qualification: this.usuario[0].Qualification,
                        Votes: this.usuario[0].Votes,
                        Users: this.usuario[0].Users

                    }).then(function (response) {
                        console.log(response.data);
                        document.getElementById('exitoso').classList.remove('hidden');
                        setTimeout(() => { document.getElementById('ezitoso').classList.add('hidden') }, 3000)
                        location.reload()

                    }).catch(function (error) {
                        console.log(error)
                    });
                } else {
                    document.getElementById('errorcontrasena').classList.remove('hidden');
                    setTimeout(() => { document.getElementById('errorcontrasena').classList.add('hidden') }, 3000)

                }
            } else {
                document.getElementById('contrasenaError').classList.remove('hidden')
                setTimeout(() => { document.getElementById('contrasenaError').classList.add('hidden') }, 3000)

            }

        },
        cambiarEmail() {
            if (this.ceActual === this.usuario[0].Password && this.eActual === this.usuario[0].Email) {
                axios.put('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.$route.params.id, {
                    FirstName: this.usuario[0].FirstName,
                    LastName: this.usuario[0].LastName,
                    PhoneNumber: this.usuario[0].PhoneNumber,
                    Description: this.usuario[0].Description,
                    Service: this.usuario[0].Service,
                    Email: this.eNuevo,
                    Password: this.usuario[0].Password,
                    Photo: this.usuario[0].Photo,
                    Images: this.usuario[0].Images,
                    Qualification: this.usuario[0].Qualification,
                    Votes: this.usuario[0].Votes,
                    Users: this.usuario[0].Users

                }).then(function (response) {
                    console.log(response.data);
                    document.getElementById('exitoso').classList.remove('hidden');
                    setTimeout(() => { document.getElementById('ezitoso').classList.add('hidden') }, 3000)
                    location.reload()

                }).catch(function (error) {
                    console.log(error)
                });
            } else {
                document.getElementById('EcontrasenaError').classList.remove('hidden')
                setTimeout(() => { document.getElementById('EcontrasenaError').classList.add('hidden') }, 3000)

            }
        },
        mostrarcontraseña(clase) {
            let inputs = document.querySelectorAll('.' + clase)
            inputs.forEach(input => input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password'));
        },
        eliminar() {
            if (confirm('¿Estas seguro que quieres eliminar tu cuenta?')) {
                axios.delete('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + this.$route.params.id)
                    .then(response => {
                        console.log(response);
                        alert('Te estaremos esperando, vuelve pronto')
                        this.$router.push('/');
                    });
            }

        }
    }
}

</script>