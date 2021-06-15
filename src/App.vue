<!--<template>
  <div id="app">
    &lt;!&ndash;<img src="./assets/logo.png">
    <hello-world></hello-world>
    <p>nested: {{nested.a.b}}</p>
    <p>{{name}}</p>
    <button @click="change">change</button>
    <button @click="changeLast">changeLast</button>&ndash;&gt;


    <router-view></router-view>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  props: {
    a: {
      type: Number
    }
  },
  data() {
    return {
      m: 1,
      unless: 0,
      nested: {
        a: {
          b: 1
        }
      },
      firstName: 'a',
      lastName: 'b'
    }
  },
  computed: {
    name() {
      if(this.unless > 0) {
        return this.firstName + ' ' +  this.lastName
      }
      return 'pick me';
    }
  },
  methods: {
    change() {
      this.unless++;
      this.nested.a.b = 2;
    },
    changeLast() {
      this.lastName = 'c';
    }
  },
  watch: {

    unless(newVal) {
      console.log('unless : ', newVal);
    },
    name: {
      immediate: true,
      handler(newVal) {
        console.log('name : ', newVal);
      }
    },
    nested: {
      deep: true,
      // sync: true,
      handler(newVal) {
        console.log('nested.a.b : ', newVal);
      }
    },
  },
  // components: {HelloWorld},
  created () {
    this.b = 5;
    // console.log('created this')
    // console.log(this); // 是一个 vueComponent
  },
  mounted: ()=> {
    // console.log('mounted this')
    // console.log(this); // 是一个对象
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->


<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/java">java</router-link>
      <router-link to="/node">node</router-link>
      <router-link to='/xxx'>XXX</router-link>
    </header>
    <!-- 对应组件的内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    }
  }
</script>
