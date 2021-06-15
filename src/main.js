// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 异步组件实现的本质是 2 次渲染(当然高级应用的时候 还有loading error, 则为3次渲染), 先渲染为注释节点,当组件加载成功后,再通过forceRender重新渲染
// 异步组件3中实现方式中,高级异步组件的设计是非常巧妙的,它可以通过简单的配置实现了 loading resolve reject timeout 4中状态
// 异步组件的三种方式: (必须写在 new Vue 前面, 防止找不到)
// 1. 通过require 方式
/*Vue.component('HelloWorld', function (resolve, reject) {
  require(['./components/HelloWorld'], function (res) {
    resolve(res)
  })
})*/
//2. 通过webpack 处理过的 import, 这里的import 不是es6的import
/*
Vue.component('HelloWorld',
  // 这里的import 返回的是一个promise 对象
  () => import('./components/HelloWorld'))
*/
//3. 高级异步组件
const LoadingComp = {
  template: '<div>loading123</div>'
};
const ErrorComp = {
  template: '<div>error</div>'
};
const AsyncComp = () => ({
  // 需要加载的组件, 应当是一个Promise
  component: import('./components/HelloWorld'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间,默认200ms
  delay: 5000, // 可以通过修改network 为 fast3G 和 slow3G 来模拟
  // 最长的等待时间, 超出此时间则渲染错误组件, 默认Infinity
  timeout: 7000
})
Vue.component('HelloWorld', AsyncComp);


/* eslint-disable no-new */
new Vue({
  el: '#app',// vm.$mount(vm.$options.el)
  // router,
  components: {App},
  template: '<App/>',
  router
  // createElement(context, tag, data, children, normalizationType, alwaysNormalize)
  /*render: h => h(App, {
   // is: 'section',
   props: {
     a: 123234
   },
   attrs: {
     id: 'app' // 会替换掉 #app;
   },
   key: 'elem'
 })*/
})
