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
      guestOnly: true,
      title: `Home`
    }
  },

  {
    path: '/users',
    name: 'usuarios',
    component: UsersList,
    meta: {
      guestOnly: true,
      title: `Usuarios`
    }
  },

  {
    path: '/addUser',
    name: 'añadir',
    component: AddUser,
    meta: {
      authOnly: true,
      title: `Agregar`
    }
  },

  {
    path: '/users/:id',
    name: 'editar',
    component: EditUser,
    meta: {
      authOnly: true,
      title: `Editar`
    }
  },

  {
    path: '/login',
    name: 'iniciar-sesión',
    component: Login,
    meta: {
      guestOnly: true,
      title: `Login`
    }
  },

  {
    path: '/register',
    name: 'registrarse',
    component: Registro,
    meta: {
      guestOnly: true,
      title: `Registrarse`
    }
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      authOnly: true,
      title: `Dashboard`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function estaLogueado() {
  return store.state.token;
}


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!estaLogueado()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
      
    }
  
    else {
      next();
    }
  }

  else if (to.matched.some(record => record.meta.guestOnly)) {
    if (estaLogueado()) {
      next();
    }
    else {
      next();
    }
  }
});

export default router
