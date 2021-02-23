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

// tipX and tipY variables for the tip of my finger!
let tipX;
let tipY;

// User Webcam
let video = undefined;

// The Golden Snitch for Intro phase
let snitch;
let introspells =[];

// Images variable
let hogwartsbgImage;
let snitchImage;
let snitch2Image;
let quidditchbgImage;
let wandlightImage;
let introspellImage;

/**
Description of preload
*/
function preload() {
  hogwartsbgImage = loadImage(`assets/images/hogwartsbg.jpg`);
  snitchImage = loadImage(`assets/images/snitch.png`);
  snitch2Image = loadImage(`assets/images/snitch2.png`);
  quidditchbgImage = loadImage(`assets/images/quidditchbg.jpg`)
  wandlightImage = loadImage(`assets/images/wandlight.png`)
  introspellImage = loadImage(`assets/images/introspell.png`)


}

/**
Description of setup
*/
function setup() {
createCanvas(640,480);

  // Declare classes
  snitch = new Snitch(snitchImage);




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
  image(hogwartsbgImage, width/2, height/2,850,480);
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
  push();
  imageMode(CENTER);
  image(quidditchbgImage, width/2, height/2, 680, 480)
  pop();

     snitch.display();
     snitch.move();



  if (predictions.length > 0){
     let hand = predictions[0];

  let index = hand.annotations.indexFinger;
      let tip = index[3];
      let base = index[0];
      tipX = tip[0];
      tipY = tip[1];
      let baseX = base[0];
      let baseY = base[1];

// Wand display
      push();
      imageMode(CENTER);
      image(wandlightImage,tipX,tipY,50,50);
      noFill();
      strokeWeight(3);
      stroke(0);
      line(baseX, baseY, tipX, tipY);
      pop();

      for (let i = 0; i < introspells.length; i++){
        let introspell = introspells[i];
        // introspell.x = tipX;
        // introspell.y = tipY;
        introspell.display();
        introspell.move();
      }
    }

// display Spell up top
    displaySpellName();
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
      fill(0);
      stroke(255);
      line(baseX, baseY, tipX, tipY);
      pop();

    }
    displaySpellName();


}
function displaySpellName(){
  displayText(currentSpell + `!`, 20, width / 2, height / 8);
}



function castSpell(spell){

  currentSpell = spell[0].toUpperCase() + spell.substring(1);
  console.log(currentSpell);

  if (currentSpell === `Hi`){
      createSpell(tipX,tipY);
  }
    }

function createSpell(x,y){
    let introspell = new IntroSpell(x,y, introspellImage);
    introspells.push(introspell);
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
