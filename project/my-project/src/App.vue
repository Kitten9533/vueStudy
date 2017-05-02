<template>
  <div id="app">
    <!-- <hello></hello> -->
    <upload></upload>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Upload from './components/Upload'

export default {
  name: 'app',
  components: {
    'hello': Hello,
    'upload': Upload
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
