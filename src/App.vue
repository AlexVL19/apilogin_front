<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        CRUD App
      </div>
      <v-btn to="/" text>
        <v-icon small dark class="mr-1">mdi-home </v-icon>Inicio
      </v-btn>
      <v-btn to="/users" text>
        <v-icon small dark class="mr-1">mdi-account </v-icon>Usuarios
      </v-btn>
      <v-btn to="/addUser" text>
        <v-icon small dark class="mr-1">mdi-plus-circle</v-icon>Añadir
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
