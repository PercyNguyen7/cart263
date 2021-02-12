"use strict";
let spyProfile = {
  name:`**REDACTED**`,
  species: `**REDACTED**`,
  alias: `**REDACTED**`,
  nature:`**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  catchphrase:  `**REDACTED**`,
  password: `**REDACTED**`
};

let instrumentData = undefined;
let monsterData = undefined;
let natureData = undefined;
let objectData = undefined;
let tarotData = undefined;
let personalitytestData = undefined;



function preload() {
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  monsterData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/mythology/monsters.json`);
  natureData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`)
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  personalitytestData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/psychology/personality_test.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null){
    // let password = prompt(`Agent! What is your password?!`);
    // if (password === data.password){
    spyProfile.name = data.name;
    spyProfile.alias = data.alias;
    spyProfile.species = data.species;
    spyProfile.descriptions = data.descriptions;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.catchphrase = data.catchphrase;
    spyProfile.password = data.password;
    }
  else{
    generateSpyProfile();
  }
}

function generateSpyProfile(){
  spyProfile.name = prompt(`Agent! What is your name?!`);
  let instrument = random(instrumentData.instruments);
  spyProfile.species = random(monsterData.names);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.nature = random(natureData.descriptions);
  spyProfile.secretWeapon = random(objectData.objects);
    spyProfile.catchphrase = random(personalitytestData.personality_test);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = card.name;




  localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}
function setSpyProfile(){

}
function draw() {
  background(0);

  let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **
Name: ${spyProfile.name}
Alias:  ${spyProfile.alias}
Species: ${spyProfile.species}
Nature: ${spyProfile.nature}
Secret Weapon:  ${spyProfile.secretWeapon}
Catchphrase: "${spyProfile.catchphrase}"
Password:  ${spyProfile.password}`;

  push();
  textFont(`Courier,monospace`);
  textSize(24);
  textStyle(BOLD);
  textAlign(LEFT,TOP);
  fill(210,0,0);
  text(profile,100,100);
  pop();
}

function keyPressed(){
  if (keyCode === ENTER) {

           localStorage.removeItem(`spy-profile-data`);
           location.reload();
  }
}
