import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomeView from '../views/HomeView.vue'
import UsersList from '@/modules/Usuarios/components/UsersList.vue'
import AddUser from '@/modules/Usuarios/components/AddUser.vue'
import EditUser from '@/modules/Usuarios/components/EditUser.vue'
import Login from '@/modules/Auth/components/Login.vue'
import Registro from '@/modules/Auth/components/Registro.vue'
import Dashboard from '@/modules/Auth/components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      middleware: "guest",
      title: `Home`
    }
  },

  {
    path: '/users',
    name: 'usuarios',
    component: UsersList,
    meta: {
      middleware: "guest",
      title: `Usuarios`
    }
  },

  {
    path: '/addUser',
    name: 'añadir',
    component: AddUser,
    meta: {
      middleware: "auth",
      title: `Agregar`
    }
  },

  {
    path: '/users/:id',
    name: 'editar',
    component: EditUser,
    meta: {
      middleware: "auth",
      title: `Editar`
    }
  },

  {
    path: '/login',
    name: 'iniciar-sesión',
    component: Login,
    meta: {
      middleware: "guest",
      title: `Login`
    }
  },

  {
    path: '/register',
    name: 'registrarse',
    component: Registro,
    meta: {
      middleware: "guest",
      title: `Registrarse`
    }
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      middleware: "auth",
      title: `Dashboard`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`

  if (to.meta.middleware == "guest") {
    if (store.state.auth.token == undefined || store.state.auth.token == "") {
      next({name: "iniciar-sesión"})
    }

    next({name: "dashboard"})
  }

  else {
    if (store.state.auth.token == undefined || store.state.auth.token == "") {
      next({name: "login"})
    }
    else {
      next()
    }
  }
})*/

export default router
