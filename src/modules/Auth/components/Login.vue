<template>
<v-container fluid>
  <v-row align="center" class="justify-center px-3 mx-auto mt-4">
    <v-col cols="12" lg="8" sm="12">
      <v-card>
        <v-card-title class="justify-center">Iniciar sesión</v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>

            <!-- Campo para el correo electrónico -->
            <v-text-field
              v-model="formulario.email"
              label="Correo electrónico"
              required
            >
            </v-text-field>
            
            <!-- Campo para la contraseña -->
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

          <div id="error" v-if="error" class="justify-center red lighten-3 d-flex">
            <div class="p1">
              <v-icon small color="black" class="mr-1">mdi-alert-circle</v-icon> Credenciales incorectas, inténtalo de nuevo.
            </div>
          </div>
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
        error: false,
        usuario: null,

        formulario: {
          email: "",
          password: ""
        }
      }
    },

    methods: {

      //Consume el servicio de autenticación el cual le permitirá iniciar sesión

      iniciarSesion() {
          http.post("/login", this.formulario)
          .then((response) => {
            console.log(response);

            //Hace una petición en Axios la cual guardará en localstorage todos los datos que traiga
            this.$store.commit('SET_USUARIO', response.data.user)
            this.$store.commit('SET_AUTHENTICATED', true)
            this.$store.commit('SET_TOKEN', response.data.token)

            //Si la autenticación es exitosa, redirigir al dashboard
            this.$router.push({name: "dashboard"});
          })
          .catch((error) =>{
            console.log(error)
            this.error = true;
          })
      },
    }
  }
</script>

<style>

#error {
  height: 50px;
}
</style>