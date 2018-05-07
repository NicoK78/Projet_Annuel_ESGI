<template>
  <div id="About">
    <img id="imgBrain" src="./assets/brain.png"></img>
    
    <br><br>
    
    <div id="textIntro">
      Aujourd'hui, les moyens dont dispose l'entraîneur sont limités. L'observation en match à elle seule ne suffit pas pour apprécier l'ensemble des performances collectives et individuelles des joueurs, et le manque d'éléments de recul ne permet pas de décrypter le jeu pratiqué de façon optimale. L'entraîneur n'est donc pas en possession de toutes les informations nécessaires pour prendre les meilleures décisions sur et en dehors du terrain :
    </div>

    <br><br>

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src="./assets/whistle.png"/>
          <p>Travail spécifique à l'entraînement</p>
        </div>
        <div class="col-sm">
          <img src="./assets/board.png"/>
          <p>Nouveaux choix de titularisation</p>
        </div>
        <div class="col-sm">
          <img src="./assets/board.png"/>
          <p>Changement de dispositif tactique</p>
        </div>
      </div>
    </div>

    <br><br>

    <ul class="no_bullet">
      <li class="liOne"><img src="./assets/camera.png"/>&nbsp;Comment filmer les matchs ? Quel matériel utiliser ?</li>
      <li class="liTwo"><img src="./assets/analytics.png"/>&nbsp;Comment collecter, traiter et analyser les données sportives de son équipe et de l'adversaire ?</li>
      <li class="liThree"><img src="./assets/team.png"/>&nbsp;Comment partager les vidéos et analyses statistiques des matchs avec ses joueurs et son staff ?</li>
    </ul>

    <br><br>

    <div class="container">
      <div class="row">
        <div class="col col-lg-10" id="text-body">
          Il est difficile d'assurer un suivi sportif de qualité sans moyens adaptés, ni connaissances des indicateurs de performance les plus pertinents. Statia permet aux entraineurs de s'affranchir de ses difficultés en mettant à leur disposition son expertise en matière de collecte et de traitement de données sportives.
        </div>
        <div class="col-md-auto">
          <img id="img-right" src="./assets/analytics2.png"></img>
        </div>
      </div>
    </div>

    <br><br>

    <div class="row grid-bottom">
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Ecoute et réactivité</h3>
        <p class="text-grid-bottom">Un interlocuteur dédié, disponible 7j/7.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Expertise</h3>
        <p class="text-grid-bottom">Des statisticiens confirmés analysent vos matchs.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Accessibilité</h3>
        <p class="text-grid-bottom">Des offres adaptées aux besoins et au budget de chaque club.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Rapidité</h3>
        <p class="text-grid-bottom">Accédez à vos vidéos et rapports d'analyse sous  24h.</p>
      </div>

      <!-- Force next columns to break to new line at md breakpoint and up -->
      <div class="w-100 d-none d-md-block"></div>

      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Précision et fiabilité</h3>
        <p class="text-grid-bottom">Vos statistiques font l'objet d'une vérification approfondie.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Simplicité</h3>
        <p class="text-grid-bottom">Notre dispositif est facile et rapide à mettre en place.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Qualité</h3>
        <p class="text-grid-bottom">Bénéficiez d'analyses de niveau professionnel, incluant plus de 800 statistiques.</p>
      </div>
      <div class="col-3 col-sm-3 grid-case-bottom">
        <img src="./assets/analytics2.png" alt="./assets/analytics2.png" class="img-thumbnail">
        <h3>Sécurité</h3>
        <p class="text-grid-bottom">Vos données sont stockées et protégées sur notre plateforme sécurisée.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

#About{
  margin-top: 3%;
}

#imgBrain {
  margin-top: 50px;
}

#textIntro {
  text-align: justify;
  font-size:20px;
  color: black;
  /*font-weight: bold;*/
  margin: 30px 50px 30px 50px;
}

#text-body {
  text-align: justify;
  font-size: 20px;
  font-weight: bold;
}

#img-right {
  width: 120px;
  height: 120px;
}

.no_bullet li{
  list-style-type: none;
  margin-bottom: 3%;
  text-align: left;
  font-size: 20px;

}

.tableGrey{
  background: #f2f2f2;
}
.table tr td {
  text-align: left;
  border: 0px !important;
  
}

.table thead th {
  text-align: right;
  border: 0px !important;
  color: #38cdff;
}

.table tbody svg {
  fill: green;
  float: right;
  
}

.text-grid-bottom {
  font-size: 18px;
  margin: 0px 10px 0px 10px;
}

.grid-bottom {
  margin: 10px 30px 10px 30px;
}

.grid-case-bottom {
  padding: 20px 20px 20px 20px;
}
</style>