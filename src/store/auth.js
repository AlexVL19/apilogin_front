import axios from 'axios'
import router from '../router'

export default {

    namespaced: true,
    state: {
        authenticated: false,
        usuario: {},
        token: ""
    },

    getters: {
        authenticated(state) {
            return state.authenticated
        },
        usuario(state) {
            return state.usuario
        }
    },

    mutations: {
        SET_AUTHENTICATED (state, valor) {
            state.authenticated = valor
        },
        SET_USUARIO (state, valor) {
            state.usuario = valor
        },
        SET_TOKEN (state, valor) {
            state.token = valor
        }
    },

    actions: {
    }


}