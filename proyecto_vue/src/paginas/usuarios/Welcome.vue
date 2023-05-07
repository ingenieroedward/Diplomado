<script setup>

import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'
</script>
<template>
    <Header />
    <article class=" py-5 w-full article flex flex-wrap justify-center">
        <section class="bg-white flex-wrap  w-full flex items-center justify-center px-5 py-4 rounded-xl">
            <div class="px-6 py-6  md:w-1/2 md:w-full rounded-xl">
                <h1 style="font-size:2.5rem !important" class="text-blue-400 text-center mb-12">Hola {{this.usuarios.FirstName}}!</h1>
           <p style="font-size:1.5rem !important" class="text-center text-xl">Bienvenido a PrestaServi <br>
            Muchas gracias por contar con nosotros. Esperamos que está experiencia sea de tu agrado

           </p>
            </div>
           <div class="1/2">
            <img style="width:100%;min-width:300px; max-width:500px;" src="@/assets/images/welcome.avif">
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
            id: this.$route.params.id,
            
        }
    },
    mounted() {
        axios.get('https://apigenerator.dronahq.com/api/povu1PnC/prestaservi/'+this.id)
            .then(response => {
                // manejar respuesta exitosa
                this.usuarios = response.data
                
            })
            .catch(e => {
                // manejar error

            })
    },
    

    methods: {

       
    }
}
</script>