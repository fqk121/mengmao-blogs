
import App from './App'
import router from './router'
import store from './store'
import lodash from 'lodash'
import '@/assets/theme/index.css'
import '@/assets/icon/iconfont.css'
import {formatTime} from "./utils/time";
Vue.config.productionTip = false
// 将lodash库挂载到vue原型
Object.defineProperty(Vue.prototype, '$_', { value: lodash })
Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})
// 格式化时间
Vue.filter('format', formatTime)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
