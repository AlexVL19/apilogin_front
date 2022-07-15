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
              <v-icon>mdi-post</v-icon>
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
              <v-icon>mdi-plus-thick</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Añadir usuario</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
    </div>

    <v-main class="mb-5">
      <router-view />
    </v-main>

      <v-footer padless class="mt-5">
        <v-card flat tile dark width="100%" class="text-center">
          <v-card-text>
            <v-btn class="mx-4" icon @click="changeToMail">
              <v-icon size="24px">mdi-email</v-icon>
            </v-btn>

            <v-btn class="mx-4" icon @click="changeToPhone">
              <v-icon size="24px">mdi-phone</v-icon>
            </v-btn>

            <p align="center" class="mt-3">{{ contacts }}</p>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} - <strong>Alexis Valencia</strong>
          </v-card-text>
        </v-card>
      </v-footer>
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

    contacts: ""
  }),

  beforeUpdate() {
    if (store.state.token) {
      this.bar1 = true
    }
    else {
      this.bar1 = false
    }
  },

  methods: {
    logout() {
      http.salir()
      .then(() => {
        this.$store.commit('SET_USUARIO', {})
        this.$store.commit('SET_AUTHENTICATED', false)
        this.$store.commit('SET_TOKEN', "")

        this.$router.push({ name: "home" })
      })
      .catch((error) => {
        console.log(error)
      });
    },

    changeToMail() {
      this.contacts = "avalencia190@misena.edu.co"
    },

    changeToPhone() {
      this.contacts = "(+57) 305 3841021"
    }
  },
};
</script>
