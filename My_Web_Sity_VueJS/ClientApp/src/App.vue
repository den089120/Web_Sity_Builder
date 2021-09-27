<template>
  <!--<nav-menu></nav-menu>-->
    <nav-temp></nav-temp>
    
  <router-view />

    <footer-temp></footer-temp>
</template>

<script>
    /*import NavMenu from './components/NavMenu.vue'*/
    import NavTemp from './components/NavTemp.vue'
    import FooterTemp from './components/FooterTemp.vue'

export default {
  name: 'App',
        components: {
            NavTemp, FooterTemp //NavMenu, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
