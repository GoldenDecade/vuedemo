<template>
  <div>
    <p>welcome</p>
    <div style="position: fixed">
      <router-link to="/"> hello</router-link>
    </div>

    <div style="height: 2000px;">

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Welcome',
    beforeCreate () {
      console.log('beforeCreate----welcome')
    },
    created () {
      console.log('created----welcome')
    },
    beforeMount () {
      console.log('beforeMount----welcome')
    },
    mounted () {
      console.log('mounted----welcome')
      console.log(this.$router)
      console.log(this.$route)
    },
    beforeUpdate () {
      console.log('beforeUpdate----welcome')
    },
    updated () {
      console.log('updated----welcome')
    },
    beforeDestroy () {
      console.log('beforeDestroy----welcome')
    },
    destroyed () {
      console.log('destroyed----welcome')
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter--welcome')
      console.log(arguments)
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next(vm => {
        console.log('beforeRouteEnter  welcome 这里获取 this')
        console.log(vm)
      });
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate--welcome')
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave--welcome')
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next();
    }
  }
</script>
