import http from "@/modules/General/services/index";

export default {
    getAll() {
        return http.get("/users");
    },
    show(id) {
        return http.get(`/users/${id}`);
    },
    store(datos) {
        return http.post("/users", datos);
    },
    update(id, datos) {
        return http.put(`/users/${id}`, datos);
    },
    delete(id) {
        return http.delete(`/users/${id}`);
    }
}