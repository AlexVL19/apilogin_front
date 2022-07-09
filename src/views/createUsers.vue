<template>
<div class="createUsers">
<ol>
  <li v-for="usu in usuario" v-bind:key="usu.id">
  {{usu.name}}
  </li>
</ol>

<!--<v-app>
  <v-data-table
    :usuario="usuario">
  </v-data-table>
</v-app>-->

</div>
</template>

<script>

import axios from 'axios'

export default {
    data: () => ({
        usuario: null
    }),

    created() {
        const api = 'http://localhost:8000/api/users/'

        axios.get(api)
        .then((response) => {
            console.log(response.data);
            this.usuario = response.data;
        })
        .catch((error) => {
            console.log(error)
        })
    }

}
</script>