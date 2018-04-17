<template>
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-1">
                    <img src="./assets/barStatia.png" width="50px" height="50px" alt="">
                </div>
                <div class="col-md-10 backBlueContact">
                    <p class="demandeRdv pt-2">Demandez un rendez-vous</p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-3 no-padding offset-md-1">
                    <p class="no-margin conseiller">Votre Conseiller</p>
                    <p class="no-margin conseiller">Stéphane MAETZ</p>
                    <div class="fondBleu  col-md-11">
                        <p class="paragrapheInB" ><img width="25px" height="25px" src="./assets/phone.svg" alt="">&nbsp;06 42 66 37 05</p>
                         <p class="paragrapheInB" >@&nbsp;s.maetz@statia.fr</p>
                        <p class="paragrapheInB" ><img width="25px" height="25px" src="./assets/home.svg" alt="">&nbsp;www.statia.fr</p>
                    </div>
                    <p class="paragrapheNextToP"><img src="./assets/barStatia.png" width="20px" height="20px" alt="">&nbsp;STATIA</p>
                    <img style="float:left;" src="./assets/Logo_statia.png" width="250px" height="61px" alt=""><br/>
                    <p class="punderImg" >76, rue de Tocqueville, 75017 Paris</p>
                </div>
                <div class="col-md-7 no-padding ">
                    <img width="670px" height="380px" src="./assets/map.png" alt="">
                </div>
            </div>
        </div>
  </div>
</template>

<script>


export default {
  name: 'Contact'
}
</script>

<style>
#contact{
  margin-top: 7%;
}

.backBlueContact {
    background: #38ceff;
    height: 50px;
}

.fondBleu{
    background: #00daff;
    text-align: start;
}

.demandeRdv{
    text-align: start;
    color: white;
    font-size: 161%;
    font-weight: 500;
}

.no-margin {
    margin: 0px !important;
}

.no-padding {
    padding: 0px !important;
}

.conseiller {
    font-weight: 500;
    font-size: 150%;
    color: #7f7f7f;
    text-align: start;
}

.paragrapheInB{
    font-size: 150%;
    color:white;
    font-weight: 500;
}

.paragrapheNextToP{
    text-align: start;
    color:#00daff;
    display: none;
}

.punderImg{
    font-size:80%;
    color:#7f7f7f;
    margin-top: 6em !important;
}
</style>
