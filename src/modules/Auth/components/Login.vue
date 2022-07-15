<template>
<v-container fluid>
  <v-row align="center" class="justify-center px-3 mx-auto mt-4">
    <v-col cols="12" lg="8" sm="12">
      <v-card>
        <v-card-title class="justify-center">Iniciar sesión</v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="formulario.email"
              label="Correo electrónico"
              required
            >
            </v-text-field>
            
            <v-text-field
              type="password"
              v-model="formulario.password"
              label="Contraseña"
              required
            >
            </v-text-field>
          </v-form>
          <v-row class="justify-center mb-2 mt-2" align="center">
            <v-btn color="light-green" class="mt-2" @click="iniciarSesion">
                  <v-icon small dark class="mr-1">mdi-login</v-icon>Entrar
              </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
  </v-col>
  </v-row>
</v-container>
</template>

<script>
  import http from '@/modules/General/services/authIndex'

  http.defaults.withCredentials = true;

  export default {
    name: 'LoginUsu',

    data() {
      return {
        usuario: null,

        formulario: {
          email: "",
          password: ""
        }
      }
    },

    methods: {
      iniciarSesion() {
          http.post("/login", this.formulario)
          .then((response) => {
            console.log(response);

            this.$store.commit('SET_USUARIO', response.data.user)
            this.$store.commit('SET_AUTHENTICATED', true)
            this.$store.commit('SET_TOKEN', response.data.token)

            this.$router.push({name: "dashboard"});
          });
      },
    }
  }
</script>