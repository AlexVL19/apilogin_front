<template>
<v-container>

    <div v-if="usuarioActual" class="edit-form py-3">
        <p class="headline"> Editar usuario</p>
        <v-form ref="form" lazy-validation>
            <v-text-field
                v-model="usuarioActual.name"
                label="Nombre"
                required
            ></v-text-field>
            <v-text-field
                type="email"
                v-model="usuarioActual.email"
                label="Correo electrónico"
                required
            ></v-text-field>
            <v-text-field
                type="password"
                v-model="usuarioActual.password"
                label="Cambiar contraseña"
                required
            ></v-text-field>

            <v-dialog
                v-model="dialog"
                width="500"
            >

            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" v-bind="attrs" v-on="on" class="mr-2">
                    <v-icon small class="mr-1">mdi-trash-can</v-icon> Eliminar
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5">
                    Atención
                </v-card-title>

                <v-card-text>
                    ¿Seguro/a que desea eliminar este registro?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="borrarUsuario()"
                    >
                    <v-icon small class="mr-1">mdi-check</v-icon> Sí
                    </v-btn>
                </v-card-actions>

            </v-card>

            </v-dialog>

            <v-dialog
                v-model="dialog2"
                width="500"
            >

            <template v-slot:activator="{ on, attrs }">
                <v-btn color="blue lighten-2" v-bind="attrs" v-on="on" class="mr-2">
                    <v-icon small class="mr-1">mdi-update</v-icon> Actualizar
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5">
                    Atención
                </v-card-title>

                <v-card-text>
                    ¿Seguro/a que desea actualizar este registro?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="actualizarUsuario()"
                    >
                    <v-icon small class="mr-1">mdi-check</v-icon> Sí
                    </v-btn>
                </v-card-actions>

            </v-card>

            </v-dialog>
        </v-form>
    </div>
    <div v-else class="d-flex align-center justify-center mt-5">
        <div>
            <div class="d-flex align-center justify-center">
                <v-progress-circular
                class="mb-4 d-block"
                :width="2"
                color="black"
                indeterminate
                ></v-progress-circular>
            </div>
            <p><v-icon small color="grey lighten-1" class="mr-2">mdi-information</v-icon>Haz clic en un usuario primero para poder editarlo.</p>
        </div>
    </div>

</v-container>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
    name: "usuario-actualizar",
    data() {
        return {
            dialog: false,
            dialog2: false,
            usuarioActual: null,
        };
    },

    created() {
        this.obtenerUsuario(this.$route.params.id)
    },

    methods: {
        obtenerUsuario(id) {
            UserDataService.show(id)
            .then((response) => {
                this.usuarioActual = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
        },

        actualizarUsuario() {
            this.dialog2 = false
            UserDataService.update(this.usuarioActual.id, this.usuarioActual)
            .then((response) => {
                console.log(response.data);
                this.$router.push( {name: "usuarios"} )
            })
            .catch((error) => {
                console.log(error)
            });
            
        },

        borrarUsuario() {
            this.dialog = false
            UserDataService.delete(this.usuarioActual.id)
            .then((response) => {
                console.log(response.data);
                this.$router.push( {name: "usuarios"} )
            })
        },
    }
}
</script>