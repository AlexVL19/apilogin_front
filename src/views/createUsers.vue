<template>
<div class="createUsers">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

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