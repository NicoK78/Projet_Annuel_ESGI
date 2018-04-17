<template>
  <div id="home">
    <div class="parallax">

    </div>
    <div class="container">
       <img class="m-3 hide" src="./assets/FondAccueil.png" width="1000px" height="620px" alt="">
      <div class="row m-5">
        <div class="col-md-2">
          <img src="./assets/barStatia.png" width="95px" height="120px" alt="">
        </div>
        <div class="col-md-8 hide">
          <p>Statia est un cabinet d'étude statistiques spécialisé dans l'analyse de performance sportive.</p>
          <p>Notre objectif est de pérénniser le développement sportif des clubs de football</p>
          <p>à tous les niveaux de compétitions en mettant à dispositions des entraineurs et des joueurs</p>
          <p>un département performance dédié, en charge d'assurer le suivi sportif de leur équipe.</p>
        </div>
        <div class="col-md-8 text-justify pt-3">
          <p>
            Statia est un cabinet d'étude statistiques spécialisé dans l'analyse de performance sportive.
            Notre objectif est de pérénniser le développement sportif des clubs de football
            à tous les niveaux de compétitions en mettant à dispositions des entraineurs et des joueurs
            un département performance dédié, en charge d'assurer le suivi sportif de leur équipe.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5">
          <img class="pull-left imageTab"  src="./assets/graph1.png" alt="">
          <p class="textInTab">Assurer un suivi sportif de haut
              niveau match après match, tout au
              long de la saison.
          </p>
        </div>
        <div class="col-md-6 backBlue p-5">
          <img class="pull-left imageTab" src="./assets/tableau.png" alt="">
          <p class="textInTab">Optimiser le coaching de vos
              entraineurs et élever le niveau de
                jeu pratiqué.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5 backBlue">
          <img class="pull-left imageTab" src="./assets/football.png" alt="">
          <p class="textInTab">Décrypter le jeu de vos adversaires
              et vous faire profiter d’un avantage
              concurrentiel en championnat.
        </p>
        </div>
        <div class="col-md-6 p-5">
          <img class="pull-left imageTab" src="./assets/main.png" alt="">
          <p class="textInTab">Monétiser votre audience en
            rendant payant l’accès au suivi
            sportif des équipes
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-5">
          <img class="pull-left imageTab" src="./assets/argent.png" alt="">
          <p class="textInTab">Diversifier vos sources de revenu et
            optimiser votre trésorerie grâce au
            financement participatif.
          </p>
        </div>
        <div class="col-md-6 backBlue p-5">
          <img class="pull-left imageTab" src="./assets/trophe.png" alt="">
          <p class="textInTab">Pérenniser le développement
            sportif de vos équipes et la
            croissance économique du club.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home'
}
</script>

<style>

#home{
  margin-top: 3%;
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

.hide{
  display: none;
}

.imageTab{
  width: 100px;
  height: 100px;
}

.textInTab{
  padding-top: 1em !important;
  margin-left: 24%;
}


.parallax { 
    /* The image used */
    background-image: url("assets/FondAccueil.png");

    /* Set a specific height */
    height: 550px; 
    width: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
