<template>
    <button @click="mostrar" data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>
    </button>

    <aside id="sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div id="mobile-menu" class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li class="mb-12">
                    <a
                        class="flex items-center sm:justify-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                        <span class="ml-3">
                            <div class="flex items-center h-16 ml-2">
                                <div class="c1">
                                    <h1 class="mt-2">Presta</h1>
                                </div>
                                <div class="c2">
                                    <h1 class="mt-2">Servi</h1>
                                </div>
                            </div>
                        </span>
                        <button @click="mostrar" data-drawer-target="sidebar-multi-level-sidebar"
                            data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar"
                            type="button"
                            class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                </path>
                            </svg>
                        </button>
                    </a>
                </li>
                <li>
                    <a @click="services" class="cursor-pointer block py-2 pr-4 pl-3 text-gray-500">
                        <i class="bi bi-calendar3 text-lg"></i> Servicios Pendientes
                        <span
                            class="ml-2 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                            2
                        </span></a>
                </li>
                <li>
                    <a @click="home" class="cursor-pointer block py-2 pr-4 pl-3  text-gray-500" aria-current="page"><i
                            class="bi bi-bar-chart-steps text-lg"></i> Listado Servicios
                            <span
                            class="ml-2 inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                            2
                        </span></a>
                </li>

                <li>
                    <a @click="perfil" class="cursor-pointer block py-2 pr-4 pl-3 text-gray-500">
                        <i class="bi bi-person-square text-lg"></i> Perfíl</a>
                </li>
                <li>
                    <a @click="config" class="cursor-pointer block py-2 pr-4 pl-3 text-gray-500">
                        <i class="bi bi-person-fill-gear text-lg"></i> Configuración</a>
                </li>
                <li class="fixed bottom-0">
                    <RouterLink to="/" class="block py-2 pr-4 pl-3 text-gray-500">
                        <i class="bi bi-box-arrow-left text-lg"></i> Salir
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
export default {
    methods: {
        mostrar() {
            let sidebar = document.getElementById('sidebar');
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full')
            } else {
                sidebar.classList.add('-translate-x-full')
            }
        },
        home() {
            let id = this.$route.params.id;
            this.$router.push('/informe/' + id)
        },
        services() {
            let id = this.$route.params.id;
            this.$router.push('/servicioT/' + id)
        },
        perfil() {
            let id = this.$route.params.id;
            this.$router.push('/perfil/' + id)
        },
        config() {
            let id = this.$route.params.id;
            this.$router.push('/configuracion/' + id)
        },
    }
}
</script>