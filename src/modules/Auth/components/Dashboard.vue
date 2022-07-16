<template>
<v-container fluid>
  <v-row align="center" class="justify-center px-3 mx-auto mt-4">
    <v-col cols="12">
      <v-card>
        <div id="gradiente2"></div>
        <v-card-title class="justify-center">¡Bienvenid@, {{$store.state.usuario.name}}!</v-card-title>
          <v-card-text class="justify-center d-flex">

            <v-col cols="10" class="justify-center d-flex">
              <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ligula at tincidunt fringilla. Ut laoreet at ipsum efficitur laoreet. Nulla efficitur viverra diam vitae auctor. Pellentesque tempor elit id tellus feugiat tristique. Aliquam ac magna vel risus bibendum fringilla sit amet eget massa. In elementum sem sit amet massa interdum, facilisis congue nibh imperdiet. Aliquam fringilla augue vel dolor dapibus, rhoncus lobortis leo porta. Aenean cursus, odio eu iaculis feugiat, lorem nunc ornare mi, molestie commodo enim orci eu dolor. Proin aliquet dapibus ligula, vel vestibulum diam laoreet ac. Nam scelerisque ultrices interdum.</p>
            </v-col>
          </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import store from "@/store/index.js"

  export default {
    name: 'dashboard-adm',

    data () {
      return {
        nombreusuario: ""
      }
    },

    beforeUpdate() {
      this.nombreusuario = store.state.usuario.name
    },
  }
</script>

<style>

#gradiente2 {
  background: rgb(1,110,54);
  background: linear-gradient(21deg, rgba(1,110,54,1) 0%, rgba(47,205,92,1) 35%, rgba(165,248,255,1) 100%);
  height: 200px;
}
</style>
