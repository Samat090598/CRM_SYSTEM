import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    SET_ERROR(state, error){
      state.error = error
    },
    CLEAR_ERROR(state){
      state.error = null
    }
  },
  getters: {
    ERROR: s => s.error
  },
  modules: {
    auth
  }
})
