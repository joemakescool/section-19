<template>
  <div id="app" class="container">
    <Header/>
    <div class="row">
      <div class="col-xs-12">
        <router-view/>
      </div>
    </div>

  </div>

</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  },

  created() {
    this.$store.dispatch('initStocks'); // this is pretty cool!
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
