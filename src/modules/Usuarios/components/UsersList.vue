<template>
<v-row align="center" class="list px-3 mx-auto mt-2 justify-center">
    <v-col cols="12" lg="8" sm="12"> 
        <v-card class="mx-auto" tile>
            <v-card-title class="justify-center">Usuarios</v-card-title>
            <v-data-table
                :headers="headers"
                :items="usuarios"
                disable-pagination
                :hide-default-footer="true"
                :loading="carga"
                loading-text="Cargando..."
            >
            
            <template v-slot:[`item.action`] = "{item}">
                <v-icon small color="indigo lighten-1" @click="editUsers(item.id)">mdi-account-edit</v-icon>
            </template>
            </v-data-table>
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
                {text: "Rol", sortable: "false", value: "role"},
                {text: "Acciones", sortable: "false", value: "action"}
            ],
            carga: false
            
        };
    },
    methods: {
        async getUsers() {
            this.carga = true;
            await UserDataService.getAll()
            .then((response) => {
                console.log(response.data)
                this.usuarios = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
            this.carga = false;
        },

        editUsers(id) {
            this.$router.push({ name: "editar", params: {id : id} })
        },

    },
    created() {
        this.getUsers();
    },
};
</script>
