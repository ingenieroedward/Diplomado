<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header class="nav">
        <nav>
            <div class="container py-2 mx-auto px-2 flex flex-wrap items-center  justify-between h-full">

                <div class="flex items-center h-16 ml-2">
                    <div class="c1">
                        <h1 class="mt-2">Presta</h1>
                    </div>
                    <div class="c2">
                        <h1 class="mt-2">Servi</h1>
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

                        <li class="mt-4">
                            <RouterLink to="/" style="cursor:pointer;" class="block py-2 pr-4 pl-3 text-gray-500 cursor-pointer"><input
                                    class="hidden" type="checkbox" name="login" id="login"> <label
                                    style="cursor:pointer;" for="login">
                                    Salir</label></RouterLink>
                        </li>
                    </ul>
                </div>

            </div>
            <hr class="mt-4">
        </nav>
    </header>
</template>