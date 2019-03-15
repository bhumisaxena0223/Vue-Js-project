<template>
  <div id="app">
    <b-container fluid class="no-padding">
      <b-row class="no-margin">
        <b-col class="no-padding">
          <Header />
        </b-col>
      </b-row>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
