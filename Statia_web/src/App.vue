<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo_Statia.png" width="180" height="50" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Solutions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">A Propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
       <img src="./assets/FondAccueil.png" width="1000px" height="620px" alt="">
      <div class="row mt-4">
        <div class="col-md-2">
          <img src="./assets/barStatia.png" width="95px" height="120px" alt="">
        </div>
        <div class="col-md-8">
          <p>Statia est un cabinet d'étude statistiques spécialisé dans l'analyse de performance sportive.</p>
          <p>Notre objectif est de pérénniser le développement sportif des clubs de football</p>
          <p>à tous les niveaux de compétitions en mettant à dispositions des entraineurs et des joueurs</p>
          <p>un département performance dédié, en charge d'assurer le suivi sportif de leur équipe.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
        <div class="col-md-6 backBlue p-5">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5 backBlue">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
        <div class="col-md-6 p-5">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
        <div class="col-md-6 backBlue p-5">
          <img class="pull-left" src="./assets/football.png" alt="">
          <p>Texte</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
}

nav{
  background-color:#d3f8ff;
  position: fixed;
}

.backWhite{
  background: white;
}

.backBlue{
  background: #66ccff;
}

.pull-left{
  float: left;
}
</style>
