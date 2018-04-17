<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">
        <img src="./assets/logo_Statia.png" width="180" height="50" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/solutions">Solutions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">A Propos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
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
}

nav{
  top : 0;
  background-color:#d3f8ff;
  position: fixed !important;
  z-index: 1;
  width: 100%;
}


</style>
