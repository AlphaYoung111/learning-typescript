import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelp from './ActionHelp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aHelper: new ActionHelp(),
    isShow:false
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})


