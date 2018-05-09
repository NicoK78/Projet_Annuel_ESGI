<template>
  <div id="Solutions">
    <div class="container">

      <div class="row m-5">
        <div class="col-md-1 hide">
          <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
        </div>
        <div class="col-md-12 backBlueContact">
          <p class="demandeRdv pt-2">Nos Solutions</p>
        </div>
      </div>
      <div class="col-md-10 offset-1">
        <div class="col-md-12">
          <p style="text-align:justify;">Afin d’assurer le suivi sportif de l’ensemble de vos équipes et ainsi accroitre l’intérêt des donateurs, 
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
          <div class="col-md-1 hide">
            <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
          </div>
          <div class="col-md-12 backBlueContact">
            <p class="demandeRdv pt-2">Panorama des indicateurs de Performance</p>
          </div>
        </div>
      <div class="col-md-10 offset-1">
        <div>
          <table id=tablePanorama>
            <thead>
              <th></th>
              <th align="top" class="ml-3" style="width:22%;">
                <img src="./assets/replay.png" width="80px" height="24" alt="">
              </th>
              <th style="width:22%;">
                <img src="./assets/performance.png" width="150px" height="24px" alt="">
              </th>
              <th style="width:22%;">
                <img src="./assets/elite.png" width="65px" height="20px"  alt="">
              </th>
            </thead>
            <tbody>
              <tr >
                <td>
                  <div style="text-align:center;"><img class="m-3 pull-left"  src="./assets/stopwatch.svg" width="80px" height="80px"><p class="pt-5 text-left">Général</p></div>
                </td>
                <td class="orangeReplay">
                  <p>-</p>
                </td>
                <td class="bleuPerformance">
                  <p>8</p>
                </td>
                <td class="greenElite">
                  <p>18</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="text-align:center;"><img class="m-3 pull-left" src="./assets/target.svg" width="80px" height="80px"><p class="pt-5 text-left">Attaque</p></div>
                </td>
                <td class="orangeReplay">
                  <p>-</p>
                </td>
                <td class="bleuPerformance">
                  <p>10</p>
                </td>
                <td class="greenElite">
                  <p>30</p>
                </td>
              </tr>
              <tr>
                <td style="width:30%;">
                  <div style="text-align:center;"><img class="m-3 pull-left" src="./assets/distribution.svg" width="80px" height="80px"><p class="pt-5 text-left">Distribution</p></div>
                </td>
                <td class="orangeReplay">
                  <p>-</p>
                </td>
                <td class="bleuPerformance">
                  <p>8</p>
                </td>
                <td class="greenElite">
                  <p>16</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="text-align:center;"><img class="m-3 pull-left" src="./assets/shield.svg" width="80px" height="80px"><p class="pt-5 text-left">Défense</p></div>
                </td>
                <td class="orangeReplay">
                  <p>-</p>
                </td>
                <td class="bleuPerformance">
                  <p>6</p>
                </td>
                <td class="greenElite">
                  <p>18</p>
                </td>
              </tr>
              <tr>
                <td>
                  <div style="text-align:center;"><img class="m-3 pull-left" src="./assets/analytics.svg" width="80px" height="80px"><p class="pt-5 text-left">Individuelles</p></div>
                </td>
                <td class="orangeReplay">
                  <p>6</p>
                </td>
                <td class="bleuPerformance">
                  <p>6</p>
                </td>
                <td class="greenElite">
                  <p>28</p>
                </td>
              </tr>
              <tr style="height:80px;">
                <td>
                  <p class="text-left pt-4">Statistiques par match</p>
                </td>
                <td>
                  <p class="orangeReplayColor">6</p>
                </td>
                <td>
                  <p class="bleuPerformanceColor">38</p>
                </td>
                <td>
                  <p class="greenEliteColor">110</p>
                </td>
              </tr>
              <tr style="height:80px;">
                <td>
                  <p class="text-left pt-4">Statistiques de saison**</p>
                </td>
                <td>
                  <p class="orangeReplayColor">44</p>
                </td> 
                <td>
                  <p class="bleuPerformanceColor">73</p>
                </td>
                <td>
                  <p class="greenEliteColor">154</p>
                </td>
              </tr>
              <tr style="height:80px;">
                <td >
                  <p class="text-left pt-4">Indicateurs de performance</p>
                </td>
                <td class="orangeReplay">
                  <p>50</p>
                </td>
                <td class="bleuPerformance">
                  <p>111</p>
                </td>
                <td class="greenElite">
                  <p>264</p>
                </td>
              </tr>       
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Solutions',
  created:function(){
     console.log(window.screen.top);
  }
}
</script>

<style>

#Solutions{
  margin-top: 7%;
}

#tablePanorama{
  width: 100%;
}

#tablePanorama p{
  font-size: 1.1em;
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
  color: white;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.orangeReplayColor{
  color: #ff912c;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.bleuPerformance{
  background: #38ceff;
  color:white;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.bleuPerformanceColor{
  color: #38ceff;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.greenElite{
  background: #00dfac;
  color: white;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.greenEliteColor{
  color: #00dfac;
  font-size: 23px !important;
  padding-top: 1.1em !important;
}

.hide{
  display: none;
}

.demandeRdv{
    text-align: center;
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
