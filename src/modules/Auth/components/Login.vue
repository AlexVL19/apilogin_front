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

          <v-alert id="error" v-if="error" color="red" dark border="bottom" class="mt-5">
              <v-icon small dark class="mr-1">mdi-alert</v-icon> Credenciales incorrectas, intenta de nuevo.
          </v-alert>
          
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
  text-align: center;
}
</style>