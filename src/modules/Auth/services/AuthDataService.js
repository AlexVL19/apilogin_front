import http from '@/modules/General/services/authIndex'

export default {

    //Ejecuta la petición para hacer un login trayendo el objeto del formulario como un parámetro
    login(datos) {
        return http.post("/login", datos)
    },

    //Ejecuta una petición para agregar un registro trayendo el objeto del formulario como un parámetro
    registro(datos) {
        return http.post("/register", datos)
    },

    //Ejecuta una petición para revocar el token
    salir() {
        return http.post("/logout")
    }
}