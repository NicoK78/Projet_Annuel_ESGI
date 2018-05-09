<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img class="m-2" src="./assets/logo1.png" width="160px" height="40px"  alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse paddingTopApp" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/solutions">Solutions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link hide" to="/about">A Propos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script>
import footer from './Footer.vue'

export default {

  name: 'App',
  component:{
    footer
  },
  created: function() {
    let script = document.createElement('script')
    script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3vGKxTak7t_rIZ2lM7tivkgMQ9QiOWMY')
    document.head.appendChild(script)
   
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
  margin-top: 2px;
  margin-bottom: 12%;
}

html {
    position: relative;
    min-height: 100%;
}


nav{
  top : 0;
  background-color:white;
  color: #d3f8ff;
  position: fixed !important;
  z-index: 1;
  width: 100%;
  height: 9%;
}

nav a {
  color: #38cdff !important;
  font-size: 19px;
  margin-top:0.2em !important;
}

.paddingTopApp{
      padding-top: 0.8rem !important;
}

.hide{
  display: none;
}

footer{
    background-color: white;
    color: #38cdff;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    overflow: hidden;
    
}
</style>
