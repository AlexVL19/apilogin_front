<template>
<v-row align="center" class="list px-3 mx-auto mt-2 justify-center">
    <v-col cols="12" lg="8" sm="12"> 
        <v-card class="mx-auto" tile>
            <v-card-title class="justify-center">
                Usuarios
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                >
                </v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="usuarios"
                :search="search"
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
            search: '',
            usuarios: [],
            headers: [
                {text: "Nombre", sortable: "false", value: "name"},
                {text: "Correo", sortable: "false", filterable: "false", value: "email"},
                {text: "Rol", sortable: "false", filterable: "false", value: "role"},
                {text: "Acciones", sortable: "false", filterable: "false", value: "action"}
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
