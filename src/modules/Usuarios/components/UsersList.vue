<template>
<v-row align="center" class="list px-3 mx-auto mt-2">
    <v-col cols="12"> 
        <v-card class="mx-auto" tile>
            <v-card-title class="justify-center">Usuarios</v-card-title>
            <v-data-table
                :headers="headers"
                :items="usuarios"
                disable-pagination
                :hide-default-footer="true"
            ></v-data-table>
        </v-card>
    </v-col> 
</v-row> 
</template>

<script>

import UserDataService from "@/modules/Usuarios/services/UserDataService.js"

export default {
    name: "UsersList",
    data() {
        return {
            usuarios: [],
            headers: [
                {text: "Nombre", sortable: "false", value: "name"},
                {text: "Correo", sortable: "false", value: "email"},
                {text: "Rol", sortable: "false", value: "role"}
            ],
        };
    },
    methods: {
        getUsers() {
            UserDataService.getAll()
            .then((response) => {
                console.log(response.data)
                this.usuarios = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        editUsers(id) {
            this.$router.push({ name: "userDetails", params: {id : id} })
        },

        deleteUsers(id) {
            UserDataService.delete(id)
            .then(() => {
                this.getUsers();
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    created() {
        this.getUsers();
    },
};
</script>
