"use strict";
const debug = true;
//html binding
let weerButton = document.getElementById('weatherButton');
let weerButton2 = document.getElementById('weatherButton2');
let weerButton3 = document.getElementById('weatherTickerTape');
let weatherTickerTape = document.getElementById('weatherTickerTape');
let weatherHere = document.getElementById('weatherHere');
let completeWeatherHere = document.getElementById('completeWeatherHere');
let tikerweer = document.getElementById('tikerweer');
let tikeradd = document.getElementById('tikeradd');

weerButton.addEventListener('click', getWeather);
weerButton2.addEventListener('click', getWeather2);
weerButton3.addEventListener('click', getWeather3);

//overige vars
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="; //address
let key = "demo";
// let key = "77f9e00dfd"; //api key van docent
let locatie="&locatie=";
//let geoLocatie= "52.391225, 4,856799"; //longitude lattitude als locatie
let geoLocatie ="Amsterdam";
let url = apiAddress + key + locatie + geoLocatie;

//function

//function showWeather2
function showWeather2(weatherString) {
  console.log("showt weer/");
  let weatherObject = JSON.parse(weatherString);
  let completeData = "";
  console.log("complete data is leeg");
  for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
    debug ? console.log(`${key}: ${value}`) : ""; //debug naar console
    completeData += key + " : " + value + "<br>"; //maak String
    console.log("compleet data is af" + completeData);
    weatherHere.innerHTML = completeData; //string printen in bro
  }
}//getWeather2
function getWeather2(){
  console.log("function2 werkt");
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
function getWeather(){
  console.log("function2 werkt");
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET"). then (showWeather, errorHandler);
}

function showWeather3(weatherString){
  let weatherObject = JSON.parse(weatherString);
  let ditweer  =
  weatherObject.liveweer[0].plaats +
  " tempratuur "+
  weatherObject.liveweer[0].temp + " &#176;C " +
  " Verwachting" +
 weatherObject.liveweer[0].image +
 ' <img class="weerplaatje" src="iconen-weerlive/'+ weatherObject.liveweer[0].image + '.png">';

 var adds =["KOOP NU ZOOLOZE SCHOENEN <i>altijd last van spijkers in je zool? nooit meer versleten zolen dan is dit de oplossing!</i>ZOOLOZE SCHOENEN $200,95","<i>duizende programmers zitten te zwoegen op slechte macbooks, ze hebben bijna niks en wonen in kleine vilaas</i>STEUN<i>en u red een programmer in nood</i>","<b>hier adverteren? betaal dan nu 10euro per maand</b>"];
 let i = 0;
tikeradd.innerHTML= adds[i];
tikerweer.innerHTML = ditweer;
console.log("plus"+ adds[i]);
i++;


}


function getWeather3(){
  console.log("function3 werkt");
  tikerweer.innerHTML = "";
  makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}
