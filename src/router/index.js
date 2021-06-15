import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '../components/Welecome'
import NotFoundComponent from '../components/NotFoundComponent'
Vue.use(Router)

const router = new Router({
  routes: [
    {
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
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ],
  scrollBehavior(to, from, savedPosition) {
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


  }
})

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

})

export default router;
