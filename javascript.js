"use strict";
const debug = true;
//html binding
let weerButton = document.getElementById('weatherButton');
let weerButton2 = document.getElementById('weatherButton2');
let weatherTickerTape = document.getElementById('weatherTickerTape');
let weatherHere = document.getElementById('weatherHere');
let completeWeatherHere = document.getElementById('completeWeatherHere');

weerButton2.addEventListener('click', getWeather2);

//overige vars
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="; //address
let key = "demo";
// let key = "77f9e00dfd"; //api key van docent
let locatie="&locatie=";
//let geoLocatie= "52.391225, 4,856799"; //longitude lattitude als locatie
let geoLocatie ="Amsterdam";
let url = apiAddress + key + locatie + geoLocatie;

//function

//function 2
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
}
function getWeather2(){
  console.log("function werkt");
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
