import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createUsers from '@/views/createUsers.vue'
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
    meta: { guestOnly: true}
  },

  {
    path: '/createUsers',
    name: 'createUsers',
    component: createUsers,
    meta: { authOnly: true}
  },

  {
    path: '/users',
    name: 'usuarios',
    component: UsersList,
    meta: { guestOnly: true}
  },

  {
    path: '/addUser',
    name: 'añadir',
    component: AddUser,
    meta: { authOnly: true}
  },

  {
    path: '/users/:id',
    name: 'editar',
    component: EditUser,
    meta: { authOnly: true}
  },

  {
    path: '/login',
    name: 'iniciar-sesión',
    component: Login,
    meta: { guestOnly: true}
  },

  {
    path: '/register',
    name: 'registrarse',
    component: Registro,
    meta: { guestOnly: true}
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { authOnly: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function estaLogueado() {
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if(!estaLogueado()) {
      next({
        path: "/login",
        query:{ redirect: to.fullPath }
      });
    }
    else {
      next();
    }
  }

  else if (to.matched.some(record => record.meta.guestOnly)) {
    if(estaLogueado()) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath }
      });
    }
    else {
      next();
    }
  }

  else {
    next();
  }
});

export default router
