<template>
  <div id="home">
    <div class="parallax">

    </div>
    <div class="container">
       <img class="m-3 hide" src="./assets/FondAccueil.png" width="1000px" height="620px" alt="">
      <div class="row m-3">
        <div class="col-md-1 hide">
          <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
        </div>
        <div class="col-md-12 backBlueContact">
          <p class="demandeRdvHome pt-2 ">Notre vocation</p>
        </div>
        <div class="col-md-12 mt-4">
          <div style="margin-left:-1%;">
            <p style="float:left;padding-top:1.9em;" class="pHome ">Statia est un cabinet d'étude statistiques spécialisé dans l'analyse de performance sportive.</p>
            <img class="mt-2" src="./assets/homeIcone1.png" width="200px" height="90px" alt="">
          </div>
          <div style="margin-left:-1%;" >
            <img src="./assets/synergie.png" style="float:left;" class="mr-4"  width="200px" height="45px" alt="">
            <p class="mt-4 pHome " style="text-align: justify;">Notre objectif est de pérenniser le développement sportif et économique des clubs de football
          amateur<br/> en proposant la mise en place d’un programme de développement permettant :
           </p>
          </div>
          <div class="row mt-5 col-md-10 offset-1">
            <div class="col-md-5">
              <img class="mb-2" width="130px" height="130px" src="./assets/graphPoint.png" alt="">
              <p>D’optimiser le suivi sportif de vos équipes.</p>
            </div>
            <div class="col-md-2">
              <img class="rotate mt-5" width="90px" height="90px" src="./assets/fleche.png" alt="">
            </div>
            <div class="col-md-5">
              <img  class="mb-2" width="130px" height="130px"  src="./assets/mainPiece.png" alt="">
              <p>Et de monétiser l’audience de votre club.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-5">
          <div class="col-md-1 hide">
              <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
            </div>
          <div class="col-md-12 backBlueContact">
              <p class="demandeRdvHome pt-2">Objectifs du programme de développement</p>
            </div>
      </div>
      <div class="col-md-10 offset-1">
          <div class="row">
              <div class="col-md-6 p-4">
                <img class="pull-left imageTab"  src="./assets/graph1.png" alt="">
                <p class="textInTab">Centraliser les données administratives et sportives
                    de toutes vos équipes sur une interface privée.
                </p>
              </div>
              <div class="col-md-6 backGreyHome p-4">
                <img class="pull-left imageTab" src="./assets/tableau.png" alt="">
                <p class="textInTab">Assurer un suivi sportif de haut niveau
                    match après match, tout au long de la saison.
                  </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 p-4 backGreyHome">
                <img class="pull-left imageTab" src="./assets/football.png" alt="">
                <p class="textInTab">Optimiser le coaching des entraineurs<br/>
                    et élever le niveau de jeu pratiqué.
              </p>
              </div>
              <div class="col-md-6 p-4">
                <img class="pull-left imageTab" src="./assets/main.png" alt="">
                <p class="textInTab">Décrypter le jeu de vos adversaires<br/> et vous procurer
                    un avantage concurrentiel durable en championnat.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 p-4">
                <img class="pull-left imageTab" src="./assets/argent.png" alt="">
                <p class="textInTab mt-3">Fédérer vos licenciés en renforçant<br/>
                    le projet sportif de votre club.
                </p>
              </div>
              <div class="col-md-6 backOrangeHome p-4">
                <img class="pull-left imageTab" src="./assets/trophe.png" alt="">
                <p style="color:white;"  class="textInTab">Monétiser votre audience en rendant payant
                    l’accès au suivi sportif des équipes.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 backBlue p-4">
                <img class="pull-left imageTab mt-3" src="./assets/federer.png" alt="">
                <p style="color:white;" class="textInTab">Diversifier vos sources de revenu<br/> et optimiser votre trésorerie
                    grâce à notre système de financement participatif.
                </p>
              </div>
              <div class="col-md-6 backGreenHome p-4">
                <img class="pull-left imageTab mt-3" src="./assets/rouage.png" alt="">
                <p style="color:white;" class="textInTab mt-3">Pérenniser le développement sportif<br/> de vos équipes
                    et la croissance économique de votre club.
                </p>
              </div>
            </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  created:function(){
     console.log(window.screen.top);
  }
}
</script>

<style>

#home{
  margin-top: 3%;
}

.pHome{
  text-align: justify;
  font-size: 16px;
}
.backWhite{
  background: white;
}

.backBlue{
  background: #38ceff;
}

.backGreyHome{
  background-color: #f2f2f2;
  color: black !important;
}

.backOrangeHome{
  background: #ff912c;
  color: black;

}

.backGreenHome{
  background: #00dfac;
  color:black;
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
  font-size: 16px;
  text-align: start;
  padding-left: 1.6em;
}

.demandeRdvHome{
    text-align: center;
    color: white;
    font-size: 161%;
    font-weight: 500;
}

.backBlueContact {
    background: #38ceff;
    height: 50px;
}

.rotate{
  transform: rotate(90deg);
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
