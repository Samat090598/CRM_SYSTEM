import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

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
  actions: {
    async FETCH_CURRENCY() {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return await res.json();
    }
  },
  getters: {
    ERROR: s => s.error
  },
  modules: {
    auth,
    info
  }
})
