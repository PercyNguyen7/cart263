"use strict";

/**
Harry Potter - Spellcaster
Percy Vinh TUan Dat Nguyen

This is
*/
//
// First state is Loading screen
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

//                        CLASSES VARIABLES
// The Golden Snitch for Intro phase
let snitch;
// Intro spell (Immobulus) for intro phase;
let introspells =[];
// TreeTrunk Image;
let treetrunk;

// Images variable
let trainbgGif;
let hogwartsbgImage;
let snitchImage;
let snitch2Image;
let quidditchbgImage;
let wandlightImage;
let introspellImage;
let forestbgImage;
let treetrunkImage;

//Sound variables
let trainSFX;
let firebgSFX;
let menuSoundtrack;
let introspellSFX;
let wleviosaSFX;

/**
Description of preload
*/
function preload() {
// Image load
  trainbgGif= loadImage(`assets/images/trainbg.gif`);
  hogwartsbgImage = loadImage(`assets/images/hogwartsbg.jpg`);
  snitchImage = loadImage(`assets/images/snitch.png`);
  snitch2Image = loadImage(`assets/images/snitch2.png`);
  quidditchbgImage = loadImage(`assets/images/quidditchbg.jpg`);
  wandlightImage = loadImage(`assets/images/wandlight.png`);
  introspellImage = loadImage(`assets/images/introspell.png`);
  forestbgImage = loadImage(`assets/images/forestbg.jpg`);
  treetrunkImage = loadImage(`assets/images/treetrunk.png`);

// Sound load
  trainSFX = loadSound(`assets/sounds/trainwhistle.mp3`);
  firebgSFX = loadSound(`assets/sounds/firebg.mp3`)
  menuSoundtrack = loadSound(`assets/sounds/menumusic.mp3`);
  introspellSFX = loadSound(`assets/sounds/immobulus.mp3`);
  wleviosaSFX = loadSound(`assets/sounds/wleviosa.mp3`);
}
/**
Description of setup
*/
function setup() {
createCanvas(640,480);
imageMode(CENTER);

if (state === `loading`){
  trainSFX.play();

}

  // Declare classes
  snitch = new Snitch(snitchImage);

  treetrunk = new TreeTrunk(treetrunkImage)

  // access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  // load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function(){
    console.log(`Model loaded.`);
    state = `menu`;

      trainSFX.stop();
      menuSoundtrack.loop();
      firebgSFX.loop();
      firebgSFX.amp(0.4);

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
       case "introend":
               introend();
               break;
       case "stage1":
            stage1();
            break;
   }
}

function loading(){
  image(trainbgGif,width/2,height/2);
  push();
  displayText(`The Hogwarts Express is reaching its destination`, 20, width/2.5, height/12);
  pop();
}

function menu(){
  push();
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
// background image
  image(quidditchbgImage, width/2, height/2, 680, 480)

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
      tint(255,100);
      image(wandlightImage,tipX,tipY,50,50);
      strokeWeight(3);
      stroke(0);
      line(baseX, baseY, tipX, tipY);
      pop();

      for (let i = 0; i < introspells.length; i++){
        let introspell = introspells[i];
        introspell.display(snitch);
        introspell.move();
        introspell.chase(snitch);
        introspell.collide(snitch);
        if (snitch.frozen === true){
          introspells.splice(i,1);
          break;
      }
    }
  }
// display Spell up top
    displaySpellName();
// if snitch frozen, show text
    if(snitch.frozen ===true){
      displayText(`Golden Snitch Immobilized!`,30, width/2, height/5,255);
    }
  }
function introend(){
  background(255);

}
function stage1(){
  push();
  image(forestbgImage,width/2,height/2);
  pop();
  treetrunk.display();
  if(currentSpell === `Wingardium Leviosa`){
      treetrunk.move();

  }
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

  if (currentSpell === `Immobulus`){
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
    menuSoundtrack.stop();
    firebgSFX.stop();
  }
  else if (keyCode === ENTER && state === `intro`
    // && snitch.frozen ===true
  ){
    state = `introend`;
  }
  else if (keyCode === ENTER && state === `introend` ){
    state = `stage1`;
  }
}
