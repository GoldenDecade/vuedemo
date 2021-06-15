<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <hello-world></hello-world>
    <p>nested: {{nested.a.b}}</p>
    <p>{{name}}</p>
    <button @click="change">change</button>
    <button @click="changeLast">changeLast</button>-->
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
</style>
