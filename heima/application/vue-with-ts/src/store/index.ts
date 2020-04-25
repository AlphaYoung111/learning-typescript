import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelp from './ActionHelp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aHelper: new ActionHelp(),
    isShow: false,
    transMemo: null,
    filterCateId: 2
  },
  mutations: {
    showEditMemo(state: any, editMemo: any): void {
      state.transMemo = editMemo
      state.isShow = true
    }
  },
  actions: {
  },
  modules: {
  }
})


