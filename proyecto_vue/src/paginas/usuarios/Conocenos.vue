<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../../components/principal/HeaderPrincipal.vue'
import Footer from '../../components/principal/Footer.vue'
import Modal from '../../components/principal/Modal.vue'
</script>
<template>
    <Modal />
    <Header />
    
    <article class="py-5 w-full article flex flex-wrap justify-center">
        <section class="container mx-auto px-5 py-4 rounded-xl w-full">

            <h1 class="text-center mb-8">Acerca de PrestaServi</h1>

            <p class="mb-5 mt-4 px-4 text-lg">
                La plataforma PrestaServi, esta desarrollada por estudiantes de decimo semestre de
                Ingeniería de Sistemas y Telecomunicaciones de la Universidad de Córdoba,
                esta plataforma es el trabajo final del diplomado en desarrollo de aplicaciones orientadas a la nube. <br>
                Nace de la problemática de encontrar personal a disposición para realizar un trabajo o prestar un servicio,
                ya que en ocasiones resulta engorroso ir por lugares buscando dicho personal. <br>
                Por lo que la plataforma te brinda una búsqueda de personal desde la comodidad de tu casa, donde te puedes
                poner en contacto con el prestador del servicio y realizar las consultas pertinentes, también puedes elegir
                al personal mejor calificado y calificar por servicios prestados.
            </p>
            
            
        </section>

    </article>
    <Footer />
</template>