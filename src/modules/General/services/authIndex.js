import axios from 'axios'

import store from '@/store/index.js'

const token = store.state.token;

console.log(token)

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});

api.interceptors.request.use (
    config => {
        config.headers.Authorization = `Bearer ${store.state.token}`;

        return config;
    },

    error => {
        return Promise.reject(error)
    }
);

export default api;