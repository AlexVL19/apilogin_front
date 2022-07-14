<template>
  <v-app>
    <div v-if="!bar1">
      <v-app-bar color="grey darken-4" dark prominent app height="60">
        <div class="d-flex justify-center">
          <v-toolbar-items>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="pt-2 ml-2">CRUD App</v-toolbar-title>
          </v-toolbar-items>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
        
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item to="/users">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registrarse</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-shield-key</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Iniciar sesión</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else>
      <v-app-bar color="grey darken-4" dark prominent app height="60">
        <div class="d-flex justify-center">
          <v-toolbar-items>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="pt-2 ml-2">CRUD App</v-toolbar-title>
          </v-toolbar-items>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
        
          <v-list-item to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/users">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>

          <v-list-item to="/addUser">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Añadir usuario</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-shield-key</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
    </div>

    <!-- <v-app-bar v-if="!bar1" app dark>
      <div class="d-flex align-center mr-2">
        CRUD App
      </div>
      <v-btn to="/" text>
        <v-icon small dark class="mr-1">mdi-home </v-icon>Inicio
      </v-btn>
      <v-btn to="/users" text>
        <v-icon small dark class="mr-1">mdi-account </v-icon>Usuarios
      </v-btn>
      <v-btn to="/register" text>
        <v-icon small dark class="mr-1">mdi-account-plus</v-icon>Registrarse
      </v-btn>
      <v-btn to="/login" text>
        <v-icon small dark class="mr-1">mdi-shield-key</v-icon>Iniciar sesión
      </v-btn>
    </v-app-bar>

    <v-app-bar v-else app dark>
      <div class="d-flex align-center mr-2">
        CRUD App
      </div>
      <v-btn to="/dashboard" text>
        <v-icon small dark class="mr-1">mdi-post </v-icon>Dashboard
      </v-btn>
      <v-btn to="/users" text>
        <v-icon small dark class="mr-1">mdi-account </v-icon>Usuarios
      </v-btn>
      <v-btn to="/addUser" text>
        <v-icon small dark class="mr-1">mdi-plus-circle</v-icon>Añadir
      </v-btn>

    </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import store from "@/store/index.js"
import http from "@/modules/Auth/services/AuthDataService.js"

export default {
  name: 'App',

  data: () => ({
    bar1: false,

    drawer: false,
    group: null,
  }),

  beforeUpdate() {
    if (store.state.token) {
      this.bar1 = true
    }
  },

  methods: {
    async logout() {
      await http.salir()
      .then(() => {
        this.$store.commit('SET_USUARIO', {})
        this.$store.commit('SET_AUTHENTICATED', false)
        this.$store.commit('SET_TOKEN', "")
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
};
</script>
