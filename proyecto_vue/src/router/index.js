import { createRouter, createWebHistory } from 'vue-router'
import HomePrincipal from '../paginas/HomePrincipal.vue'
import NotFound from '../paginas/usuarios/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '/:catchAll(.*)', redirect: '/404',
    },
    {
      path: '/',
      name: 'home',
      component: HomePrincipal,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/home/:id(\\d+)',
      name: 'homeusers',
      component: () => import('../paginas/usuarios/Home.vue'),
      meta: {
        requiresAuth: true,
        
      }
    },
    {
      path: '/welcome/:id(\\d+)',
      name: 'welcome',
      component: () => import('../paginas/usuarios/Welcome.vue'),
      meta: {
        requiresAuth: true,
        
      }
    },
    {
      path: '/services/:id(\\d+)',
      name: 'servicios',
      component: () => import('../paginas/usuarios/Services.vue'),
      meta: {
        requiresAuth: true,
        
      }
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      component: () => import('../paginas/usuarios/Conocenos.vue'),
      meta: {
        requiresAuth: true,
        
      }
    }
    ,
    {
      path: '/perfil/:id(\\d+)',
      name: 'perfil',
      component: () => import('../paginas/usuarios/Perfil.vue'),
      meta: {
        requiresAuth: true,
       
      }
    },
    {
      path: '/usuario/:id(\\d+)',
      name: 'usuario',
      component: () => import('../paginas/usuarios/Usuario.vue'),
      meta: {
        requiresAuth: true,

      }
    },
    {
      path: '/configuracion/:id(\\d+)',
      name: 'configuracion',
      component: () => import('../paginas/usuarios/Configuracion.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/configuracionUser/:id(\\d+)',
      name: 'configuracionuser',
      component: () => import('../paginas/usuarios/ConfiguracionUse.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/admin/:id(\\d+)',
      name: 'administrador',
      component: () => import('../paginas/administrador/Admin.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      component: () => import('../paginas/usuarios/Recuperar.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/servicioT/:id(\\d+)',
      name: 'servicioT',
      component: () => import('../paginas/usuarios/ServicioT.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/informe/:id(\\d+)',
      name: 'informe',
      component: () => import('../paginas/usuarios/Informe.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

// router.beforeEach((to, from, next) =>{
//     if(to.matched.some(record => record.meta.requiresAuth)){
//       if(!this.inciarsesion()){
//         next({
//           path: '/',
//           query:{ redirect: to.fullPath }
//         })
//       }else{
//         next()
//       }
//     }else{
//       next()
//     }
// })
export default router
