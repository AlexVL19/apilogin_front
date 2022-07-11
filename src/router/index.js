import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createUsers from '@/views/createUsers.vue'
import UsersList from '@/modules/Usuarios/components/UsersList.vue'
import AddUser from '@/modules/Usuarios/components/AddUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/createUsers',
    name: 'createUsers',
    component: createUsers
  },

  {
    path: '/users',
    name: 'usuarios',
    component: UsersList
  },

  {
    path: '/addUser',
    name: 'añadir',
    component: AddUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
