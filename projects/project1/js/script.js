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

// images variable
let hogwartsbg;

/**
Description of preload
*/
function preload() {
  hogwartsbg = loadImage(`assets/images/hogwartsbg.jpg`)
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
    case "loading":
           loading();
        break;
       case "menu":
           menu();
           break;
       case "instructions":
           instructions();
           break;
       case "intro":
           intro();
           break;
       case "gameplay":
            gameplay();
            break;

   }
}

function loading(){
  background(210);
  push();
  displayText(`The Hogwarts Express is reaching its destination`, 20, width/2.5, height/12);
  pop();
}

function menu(){
  push();
  imageMode(CENTER);
  tint(255,200);
  image(hogwartsbg, width/2, height/2,850,480);
  displayText(`Battle of Hogwarts`,30, width/2, height/2, 255);
  pop();
}

function instructions(){
  background(200,100,0);
  push();
  displayText(`Battle of Hogwarts`,30, width/2, height/2,255,255,100);
  pop();
}

function intro(){
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
        ellipse(width/2,height/2,50);
      }
    }
    displaySpell();

}

function gameplay(){
  background(200,100,100);
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
    displaySpell();


}
function displaySpell(){
  displayText(currentSpell + `!`, 20, width / 2, height / 8);
}


function castSpell(spell){

  currentSpell = spell[0].toUpperCase() + spell.substring(1);
  console.log(currentSpell);
    }



// Display text easier
function displayText(string, size, x, y, r, g, b) {
    push();
    fill(r,g,b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
}

function keyPressed(){
  if (keyCode === ENTER && state ===`menu`){
    state =`instructions`;
  }
  else if (keyCode === ENTER && state === `instructions`){
    state = `intro`;
  }
  else if (keyCode === ENTER && state === `intro`){
    state = `gameplay`;
  }
}
