import { createRouter, createWebHistory } from 'vue-router'

// Importation des pages
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Clients from '../pages/Clients/Clients.vue'
import Users from '../pages/Users/Users.vue'
import Prescription from '../pages/Prescription/Prescription.vue'
import Add_prescription from '../pages/Prescription/Add_prescription.vue'
import Articles from '../pages/Articles/Articles.vue'
import Stocks from '../pages/Stocks/Stocks.vue'
import Factures from '../pages/Factures/Factures.vue'
import Stats from '../pages/Stats/Stats.vue'
import Fournisseur from '../pages/Fournisseur/Fournisseur.vue'
import Magasin from '../pages/Magasin/Magasin.vue'
import Params from '../pages/Params/Params.vue'
import Aide from '../pages/Aide/Aide.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/clients', name: 'Clients', component: Clients },
  { path: '/users', name: 'Users', component: Users },
  { path: '/prescription', name: 'Prescription', component: Prescription },
  { path: '/Add_prescription', name: 'Add_prescription', component: Add_prescription },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/stocks', name: 'Stocks', component: Stocks },
  { path: '/factures', name: 'Factures', component: Factures },
  { path: '/stats', name: 'Stats', component: Stats },
  { path: '/fournisseur', name: 'Fournisseur', component: Fournisseur },
  { path: '/magasin', name: 'Magasin', component: Magasin },
  { path: '/params', name: 'Params', component: Params },
  { path: '/aide', name: 'Aide', component: Aide },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach((to, from, next) => {
//   const publicPages = ['Login'] // nom des routes publiques
//   const authRequired = !publicPages.includes(String(to.name))
//   const token = localStorage.getItem('token')
//   if (authRequired && !token) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

export default router
