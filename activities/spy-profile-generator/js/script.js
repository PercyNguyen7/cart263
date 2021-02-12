"use strict";
let state = `menu`;

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

  if (annyang) {
       let commands = {
           'The Password': changestate
       };

       annyang.addCommands(commands);
       annyang.start();
     }
  }

function loadProfile(){
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  state = 'infopage'
  if (data !== null){
    let password = prompt(`Welcome back, Upwind unit! We're glad you stil' alive and kickin'. Enter your individual password to be granted access!`);
    if (password === data.password){
    spyProfile.name = data.name;
    spyProfile.alias = data.alias;
    spyProfile.species = data.species;
    spyProfile.descriptions = data.descriptions;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.catchphrase = data.catchphrase;
    spyProfile.password = data.password;
     }
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
  if (state ===`menu`){
    menu()
  }
  else if (state === `access`){
    access()
  }
  else if (state === `infopage`){
    infopage()
  }
}

// player must literally say "THE PASSWORD" to advance
function menu(){
  push();
  background(0);
  fill(210,0,0);
  textFont(`Courier,monospace`);
  textSize(70);
  textAlign(CENTER,CENTER);
  fill(210,0,0);
  text(`Operation Upwind`,width/2, height/2-50);
  textSize(60);
  text(`SAY THE PASSWORD`,width/2,height/2+100);
  pop();

}

function changestate(){
  state =`access`;
}
function access(){
  push();
  background(0);
  fill(210,0,0);
  textFont(`Courier,monospace`);
  textSize(50);
  textAlign(CENTER,CENTER);
  fill(210,0,0);
  text(`Access to Operation Upwind Data Center Granted`,width/2,height/2 -50);
  textSize(40);
  text(`Press Enter to Log In`,width/2,height/2+50);
  pop();
}


function infopage(){
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
  textSize(30);
  textStyle(NORMAL);
  text(`Press Space to delete your confidential data`, width/3, 4*height/5)
  pop();
}

function keyPressed(){
  // if (state === `menu`&& keyCode === ENTER){
  //   state =`infopage`
  // }
  if (state === `infopage` && keyCode === 32) {
           localStorage.removeItem(`spy-profile-data`);
           location.reload();
  }
  else if (state === `access` && keyCode === ENTER){
    loadProfile();
  }
}
