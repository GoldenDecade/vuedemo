<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <h2 v-if="flag">hello world 1</h2>
    <h2 v-else>{{msg}}</h2>
    <button @click="toggle">toggle</button>
    <button @click="change">change</button>
    <div style="position: fixed">
      <router-link to="/welcome">welcome</router-link>
    </div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: true
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
    change() {
      this.msg = Math.random();
    }
  },
  beforeCreate () {
    console.log('beforeCreate--helloworld')
  },
  created () {
    console.log('created--helloworld')
  },
  beforeMount () {
    console.log('beforeMount--helloworld')
  },
  mounted () {
    console.log('helloworld -- mounted')
    console.log(this.$router)
    console.log(this.$route)
  },
  beforeUpdate () {
    console.log('beforeUpdate--helloworld')
  },
  updated () {
    console.log('updated--helloworld')
  },
  beforeDestroy () {
    console.log('beforeDestroy--helloworld')
  },
  destroyed () {
    console.log('destroyed--helloworld')
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter--helloworld')
    console.log(arguments)
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      console.log('beforeRouteEnter 这里获取 this')
      console.log(vm)
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate--helloworld')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave--helloworld')
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
