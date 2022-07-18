import axios from 'axios';

import store from '@/store/index.js'

//Captura el token guardado en localstorage
const token = store.state.token;

//Crea una instancia de Axios, en conjunto con el token
const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Authorization": `Bearer ${token} `,
        "Content-type": "application/json"
    }
});

//Se configura el header de autorización
api.interceptors.request.use (
    config => {
        config.headers.Authorization = `Bearer ${store.state.token} `;

        return config;
    },

//Rechaza la promesa si hay un error
    error => {
        return Promise.reject(error)
    }
);

export default api;