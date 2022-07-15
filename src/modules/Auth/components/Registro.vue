<template>
<v-container fluid>
  <v-row align="center" class="justify-center px-3 mx-auto mt-4">
    <v-col cols="12">
      <v-card>
        <v-card-title class="justify-center">Registrarse</v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="formulario.name"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="formulario.email"
              label="Correo electrónico"
              required
            ></v-text-field>

            <v-text-field
              type="password"
              v-model="formulario.password"
              label="Contraseña"
              required
            ></v-text-field>

          </v-form>
          <v-row class="justify-center mb-2 mt-2" align="center">
            <v-btn color="light-green" class="mt-2" @click="añadirUsuario()">
              <v-icon small dark class="mr-1">mdi-check</v-icon> Registrarse
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import http from "@/modules/Auth/services/AuthDataService"

  export default {
    name: 'RegistroUsu',

    data () {
      return {
        formulario: {
          id: 0,
          name: "",
          email: "",
          password: ""
        },
      };
    },

    methods: {
      añadirUsuario() {
        http.registro(this.formulario)
        .then((response) => {
          this.formulario.id = response.data.id;
          console.log(response.data)
          this.$router.push({ name: "iniciar-sesión" });
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },
  }
</script>