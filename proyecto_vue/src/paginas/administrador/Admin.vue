<script setup>
import Header from '@/components/others/HeaderAdmin.vue'
import Footer from '@/components/principal/Footer.vue'
</script>

<template>
    <main class="w-ful h-full b-recuperar">


        <div class="opacidad ">
            <Header />
            <article class="w-full py-5 px-6 flex justify-center">
                <section class="container mx-auto flex justify-center flex-wrap">
                    <h1 class="text-center mb-4 w-full">Informe de usuarios registrados</h1>
                    <p class="mb-2 w-full text-center">Tabla de registros</p>
                    <div class="w-full text-center">
                        <button @click="exportar" type="button"
                        class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                        Exportar PDF</button>
                    </div>
                    
                    <div  class="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                        <table id="tabla1" class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-green-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Nombre completo
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Teléfono
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Servicio
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Calificación
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Eliminar
                                    </th>
                                </tr>
                            </thead>
                            <tbody v-for="usuario in usuariosService">
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {{ usuario.id }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ usuario.FirstName }} {{ usuario.LastName }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ usuario.Email }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ usuario.PhoneNumber }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ usuario.Service }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ usuario.Qualification }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a @click="eliminar(usuario.id)"
                                            class="font-medium text-lg text-yellow-400 hover:text-red-400 hover:underline">
                                            <i class="bi bi-trash3-fill ml-4"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </section>


            </article>

            <Footer />

        </div>
    </main>
</template>
<script>
import axios from "axios"
import html2pdf from "html2pdf.js";
export default {
    data() {
        return {
            usuarios: [],
            id: this.$route.params.id,

        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi')
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data

            })
            .catch(e => {
                // manejar error

            })
    },
    computed: {
        usuariosService() {
            return this.usuarios.filter(user => user.Service != 'Ninguno selecionado...' && user.Service != 'Administrador')
        }
    },

    methods: {
        eliminar(id) {
            console.log(id)

            if (confirm('¿Estas seguro que quieres eliminar tu cuenta de '+id+'?')) {
                axios.delete('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/' + id)
                    .then(response => {
                        console.log(response);
                        alert('Cuenta eliminada')
                        location.reload();
                        
                    });
            }
        },
        exportar() {
            html2pdf(document.getElementById('tabla1'), {
				margin:2,
  			filename: "Informe-de-registros",
            
			});
        }




    }
}
</script>