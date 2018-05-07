<template>
  <div id="Solutions">
    <div class="container">

      <div class="row m-5">
        <div class="col-md-1">
          <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
        </div>
        <div class="col-md-11 backBlueContact">
          <p class="demandeRdv pt-2">Nos Solutions</p>
        </div>
      </div>
      <div class="col-md-10 offset-1">
        <div class="col-md-12">
          <p>Afin d’assurer le suivi sportif de l’ensemble de vos équipes et ainsi accroitre l’intérêt des donateurs, 
            Statia met à disposition de tous vos entraineurs une fonctionnalité permettant de collecter
             facilement les statistiques individuelles en match.</p>
             <img src="./assets/boyAndGirl.png" class="mb-5" width="280px" height="280px" alt="">
             <div class="mb-5">
               <img class="pull-left mr-3" width="95px" height="95px" src="./assets/analytics.png" alt="">
               <p class="pt-2 text-justify" >Le traitement automatique des données collectées par vos entraineurs permettra 
                 de produire plus de 50 indicateurs de performance qui viendront alimenter la base de données 
                 sportive de chacune de vos équipes tout au long de la saison.</p>
             </div>
             <img src="./assets/ensemble.png" class="mb-5" alt="">
             <div class="mb-5">
                <img class="pull-left mr-3" width="95px" height="95px" src="./assets/analytics.svg" alt="">
                <p class="pt-2 text-justify" >Statia propose également de prendre en charge l’édition des vidéos et la collecte 
                  des statistiques collectives avec une profondeur d’analyse variable en fonction des besoins de vos entraineurs et 
                  des objectifs sportifs de vos équipes.</p>
              </div>
        </div>
      </div>

      <div class="row m-5 pt-5">
          <div class="col-md-1">
            <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
          </div>
          <div class="col-md-11 backBlueContact">
            <p class="demandeRdv pt-2">Panorama des indicateurs de Performance</p>
          </div>
        </div>
      <div class="col-md-10 offset-1">
        <div class="row">
          <div class="secondTable">
            <table class="table mt-3">
              <thead>
                <th></th>
                <th style="color:black;">
                  <div style="text-align:center;"><img src="./assets/stopwatch.svg" width="30px" height="30px"></div>Général
                </th>
                <th style="color:black;">
                  <div style="text-align:center;"><img src="./assets/target.svg" width="30px" height="30px"></div>Attaque
                </th>
                <th style="color:black;">
                  <div style="text-align:center;"><img src="./assets/distribution.svg" width="30px" height="30px"></div>Distribution
                </th>
                 <th style="color:black;">
                  <div style="text-align:center;"><img src="./assets/shield.svg" width="30px" height="30px"></div>Défense
                </th>
                <th style="color:black;">
                  <div style="text-align:center;"><img src="./assets/analytics.svg" width="30px" height="30px"></div>Individuelles
                </th>
                <th class="">Stats/match</th>
                <th class="">Stats/saison</th>
                <th class="">Total</th>
              </thead>
              <tbody>
                <tr class="text-left">
                  <td class="textLeft">
                    <img src="./assets/barStatia.png" width="18px" height="18px">&nbsp;Replay
                  </td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay">-</td>
                  <td class="orangeReplay paddingBlue">6</td>
                </tr>
                <tr class="text-left">
                  <td class="textLeft">
                  <img  src="./assets/barStatia.png"  width="20px" height="20px">&nbsp;Performance
                  </td>
                  <td class="bleuPerformance">8</td>
                  <td class="bleuPerformance">10</td>
                  <td class="bleuPerformance">8</td>
                  <td class="bleuPerformance">6</td>
                  <td class="bleuPerformance">6</td>
                  <td class="bleuPerformance">38</td>
                  <td class="bleuPerformance">73</td>
                  <td class="bleuPerformance paddingBlue">111</td>
                </tr>
                <tr class="text-left">
                  <td class="textLeft">
                    <span><img src="./assets/barStatia.png" width="18px" height="18px"></span>&nbsp;élite
                  </td>
                  <td class="greenElite">18</td>
                  <td class="greenElite">30</td>
                  <td class="greenElite">16</td>
                  <td class="greenElite">18</td>
                  <td class="greenElite">28</td>
                  <td class="greenElite">110</td>
                  <td class="greenElite">154</td>
                  <td class="greenElite paddingBlue">264</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Solutions'
}
</script>

<style>

#Solutions{
  margin-top: 7%;
}

.tableGrey{
  background: #f2f2f2;
}
.table tr td {
  text-align: left;
  border: 0px !important;
  
}

.table svg{
  margin-right:25%; 
}

.secondTable .table tr td {
  text-align: center ;
  color: white;
  font-size: x-large;
  font-weight: bold;
}


.table thead th {
  text-align: right;
  border: 0px !important;
  color: black;
}

.table tbody svg {
  fill: green;
  float: right;
  
}

.backBlue {
  color:white !important;
  background: #65cdff;
}

.backGreen {
  background: #04ffcb;
  color: white !important
}

.backGrey {
  background: #f2f2f2;
  color:#65cdff !important;
}
.textLeft{
  text-align: left !important;
  color: #38cdff !important;
  font-size: 21px !important;
  display: flex;
  line-height: 23px;
}

.orangeReplay{
  background: #ff912c;
}

.bleuPerformance{
  background: #38ceff;
}

.greenElite{
  background: #00dfac;
}

.hide{
  display: none;
}

.demandeRdv{
    text-align: start;
    color: white;
    font-size: 161%;
    font-weight: 500;
}

.backBlueContact {
    background: #38ceff;
    height: 50px;
}

.pull-left{
  float: left;
}




</style>
