<template>
<v-container>
    <div class="submit-form mt-3 mx-auto">
        <p class="headline">Añadir un usuario</p>
        <div v-if="!subido">
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="usuario.name"
                    label="Nombre"
                    required
                ></v-text-field>
                <v-text-field
                    type="email"
                    v-model="usuario.email"
                    label="Correo electrónico"
                    required
                ></v-text-field>
                <v-text-field
                    type="password"
                    v-model="usuario.password"
                    label="Contraseña"
                    required
                ></v-text-field>
            </v-form>
            <v-btn color="light-green" class="mt-2" @click="guardarUsuario">
                <v-icon small dark class="mr-1">mdi-account-check</v-icon>Guardar
            </v-btn>
        </div>
        <div v-else>
            <v-card class="mx-auto">
                <v-card-title class="justify-center">
                    ¡Usuario guardado con éxito!
                </v-card-title>
                <v-card-subtitle class="text-center">
                    Haz clic en el botón para añadir otro usuario.
                </v-card-subtitle>
                <v-card-actions class="justify-center">
                    <v-btn color="blue lighten-2" class="ml-6 mt-2" @click="nuevoUsuario">
                        <v-icon small dark class="mr-1">mdi-check-circle</v-icon>Añadir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</v-container>
</template>

<script>
import UserDataService from "@/modules/Usuarios/services/UserDataService.js"

export default {
    name: "AddUser",
    data() {
        return {
            usuario: {
                name: "",
                email: "",
                password: "",
                publicado: false,
            },
            subido: false,
        };
    },

    methods: {
        guardarUsuario() {
            var datos = {
                name: this.usuario.name,
                email: this.usuario.email,
                password: this.usuario.password
            };

            UserDataService.store(datos)
            .then((response) => {
                this.usuario.id = response.data.id;
                console.log(response.data);
                this.subido = true;
            })
            .catch((error) => {
                console.log(error)
            });
        },

        nuevoUsuario() {
            this.subido = false
            this.usuario = {}
        },
    },
};
</script>