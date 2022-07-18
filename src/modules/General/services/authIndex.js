import axios from 'axios'

import store from '@/store/index.js'

//Captura el token que está almacenado en localstorage
const token = store.state.token;

console.log(token)

//Crea una instancia de Axios en conjunto con la autorización
const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Authorization": `Bearer ${token} `
    }
});

//Configura el header de autorización
api.interceptors.request.use (
    config => {
        config.headers.Authorization = `Bearer ${store.state.token} `;

        return config;
    },

//Si arroja un error que rechace la promesa
    error => {
        return Promise.reject(error)
    }
);

export default api;