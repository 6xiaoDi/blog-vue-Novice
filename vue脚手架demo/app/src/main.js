import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false   // Vue 在启动时的生产提示

// 构建根组件
new Vue({
  // 没有采用template，而是render
  render: h => h(App), // 对jsx进行渲染，h就是似虚拟dom的构建函数，类似react的dom底下的create方法，然后把组件传进去，进行渲染
}).$mount('#app')  // 挂载到页面id的app上