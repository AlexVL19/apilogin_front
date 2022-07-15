import Vue from 'vue'
import Vuex from 'vuex'
import cps from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
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
  },

  plugins: [
    cps()
  ],
})
