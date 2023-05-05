<template>
    <div class="w-full h-full b-recuperar">
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
                                <a href="index.html" style="cursor:pointer;"
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
                <form>
                    <label for="emailr">Email</label>
                    <input class="w-full mb-4 p-1" type="email" name="email" id="emailr"
                        placeholder="Escriba su correo electronico" required>
                    <div style="justify-content: end;" class="flex w-full self-end">
                        <button type="button"
                            class=" mb-4  text-base text-black border border-gray-400 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5">
                            <a href="index.html">Cancelar</a></button>

                        <button id="recuperar" type="button"
                            class=" mb-4  ml-3 text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Buscar</button>
                    </div>

                </form>

            </div>
            <div id="divrvalidar" class="login md:overflow-y-scroll sombra hidden">

                <h2 style="font-size: 2rem !important;">Validar cuenta</h2>
                <hr>
                <p class="mb-4">Te enviaremos un código para cambiar la contaseña.</p>
                <div>
                    <form>
                        <label for="emailv">Enviar codigo al correo electronico</label>
                        <input class="w-full mb-4 p-1" type="email" name="email" id="emailv" value="Tucorreo@correo.com"
                            required readonly>
                        <div class="w-full mb-4">
                            <img class="block mx-auto w-16" src="images/usuario-sin-foto.png" alt="logo">
                            <h3 style="padding: 0;" class="text-sm text-center m-0 p-0">Tu nombre</h3>
                            <p class="text-xs text-center m-0">Usuario de PrestaServi</p>
                        </div>
                        <div style="justify-content: end;" class="flex w-full self-end">
                            <button type="button"
                                class=" mb-4  text-base text-black border border-gray-400 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5">
                                <a href="recuperar.html">¿No eres tú?</a></button>

                            <button id="validar" type="button"
                                class=" mb-4  ml-3 text-base text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Enviar</button>
                        </div>
                    </form>
                </div>


            </div>
        </article>
    </div>
</template>