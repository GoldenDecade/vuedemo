import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '../components/Welecome'
import NotFoundComponent from '../components/NotFoundComponent'
Vue.use(Router)


import home from '../components/home'
import java from '../components/java'
import node from '../components/node'
import xxx from '../components/xxx'
const router = new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeRouteEnter (to, from, next) {
        console.log('路由独享 beforeRouteEnter')
        next()
      }
    }, {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      beforeRouteEnter (to, from, next) {
        console.log('welcome 路由独享 beforeRouteEnter')
        next()
      }
    },*/ {
      path: '/home',
      name: 'home',
      // component: resolve => require(['../components/home.vue'], resolve)
      component: home
    },{
      path: '/java',
      name: 'java',
      // component: resolve => require(['../components/java.vue'], resolve)
      component: java
    },{
      path: '/node',
      name: 'node',
      // component: resolve => require(['../components/node.vue'], resolve)
      component: node
    },{
      path: '/xxx',
      name: 'xxx',
      // component: resolve => require(['../components/xxx.vue'], resolve)
      component: xxx
    },{
      path: '*',
      // component: NotFoundComponent
      redirect: '/home'
    }
  ],
  /*scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior')
    console.log(to)
    console.log(from)
    console.log(savedPosition);
    if(savedPosition){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            behavior: 'smooth',
            x: 0,
            y: 0})
        }, 500)
      })
    }


  }*/
})
/*
// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log(to)
  console.log(from)

  next();
})
router.beforeResolve((to, from, resolve) => {
  console.log('beforeResolve')
  console.log(to)
  console.log(from)
  resolve();
})

router.afterEach((to, from) => {
  console.log('afterEach')
  console.log(to)
  console.log(from)

})*/

export default router;
