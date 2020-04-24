import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ItemData from './model/ItemData'
import CateEnum from './model/CateEnum'
import ActionHelp from './store/ActionHelp'
import Category from './model/CateEnum'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


// const item1 = new ItemData(1, CateEnum.Study, '学习ts', '加油学习')
// console.log(item1);
// const item2: any = new ActionHelp()
// console.log(item2.memoList)
// item2.add(item1)



