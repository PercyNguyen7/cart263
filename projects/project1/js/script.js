"use strict";

/**
Harry Potter - Spellcaster
Percy Vinh TUan Dat Nguyen

Description
*/
//
// First state is game menu
let state = `loading`;

// Word string for current spell being casted
let currentSpell = ``;

// predictions array
let predictions = [];

// User Webcam
let video = undefined;

/**
Description of preload
*/
function preload() {
}

/**
Description of setup
*/
function setup() {
createCanvas(640,480);

  // access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  // load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function(){
    console.log(`Model loaded.`);
    state = `menu`;
  });

  // Listen for predictions
  handpose.on(`predict`,function(results){
    console.log(results);
    predictions = results;
  });

  if (annyang) {
     let commands = {
       '*spell': castSpell,
     };
     annyang.addCommands(commands);
     annyang.start();
   }
 }



/**
Description of draw()
*/
function draw() {
  background(0);

  switch (state) {
       case "menu":
           menu();
           break;

   }


   // castSpell()
}

function menu(){
  background(255,200,200);

  if (predictions.length > 0){
     let hand = predictions[0];

  let index = hand.annotations.indexFinger;
      let tip = index[3];
      let base = index[0];
      let tipX = tip[0];
      let tipY = tip[1];
      let baseX = base[0];
      let baseY = base[1];
      push();
      noFill();
      strokeWeight(3);
      stroke(255);
      line(baseX, baseY, tipX, tipY);
      pop();


      if (currentSpell === `Expelliarmus`){
        ellipse(0,0,50);
      }
    }
    displaySpell()
}

function displaySpell(){
  text(currentSpell + `!`, width / 2, height / 8)
}
function castSpell(spell){
  currentSpell = spell[0].toUpperCase() + spell.substring(1);
  console.log(currentSpell);



}
