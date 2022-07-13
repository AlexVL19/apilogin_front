import http from '@/modules/General/services/authIndex'

export default {
    login(datos) {
        return http.post("/login", datos)
    },

    registro(datos) {
        return http.post("/register", datos)
    },

    salir() {
        return http.post("/logout")
    }
}