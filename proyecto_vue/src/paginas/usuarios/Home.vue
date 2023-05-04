<script setup>
import Header from '../../components/others/Header.vue'
import Footer from '../../components/principal/Footer.vue'

</script>
<template>
        <Header />    
        <article class="py-5 w-full article flex flex-wrap justify-center">
            <section class="container mx-auto px-5 py-4 rounded-xl w-full">

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
                
            </section>
            <section class="w-full search mb-6">
                <h2 class="text-xl mb-2">Comencemos!</h2>
                <p @click="servicios" class="transition duration-150 ease-out hover:font-bold cursor-pointer hover:text-blue-700 p-2 hover:bg-white rounded-lg hover:text-center hover:ease-in">Cliqueame para buscar servicio</p>
                
                
            </section>
            <section class="registrar-entar w-full flex justify-center mt-6">

            </section>

        </article>
        <Footer />
</template>
<script>
    export default{
        methods:{
            servicios(){
                this.$router.push('/services/'+ this.$route.params.id)
            }
        }
    }
</script>