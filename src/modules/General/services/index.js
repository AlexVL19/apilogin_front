import axios from 'axios';

import store from '@/store/index.js'

const token = store.state.token;

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Authorization": `Bearer ${token} `,
        "Content-type": "application/json"
    }
});

api.interceptors.request.use (
    config => {
        config.headers.Authorization = `Bearer ${store.state.token} `;

        return config;
    },

    error => {
        return Promise.reject(error)
    }
);

export default api;