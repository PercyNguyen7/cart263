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

// tintvalue for fade in effect;
let tintvalue = 0;
// User Webcam
let video = undefined;

//                        CLASSES VARIABLES
// The Golden Snitch for Intro phase
let snitch;
// Intro spell (Immobulus) for intro phase;
let introspells =[];
// Tree trunk blocks path of phase 1;
let treetrunk;
// lumosspell block vision of phase 2;
let lumosspell;

//                        IMAGES VARIABLES
let trainbgGif;
let hogwartsbgImage;
let snitchImage;
let snitch2Image;
let introbgImage;
let wandlightImage;
let introspellImage;
let stage1bgImage;
let treetrunkImage;
let stage2bgImage;
let lumosflareImage;
let dementorImage;

//Sound variables
let trainSFX;
let firebgSFX;
let menuSoundtrack;
let introspellSFX;
let wleviosaSFX;
let lumosSFX;
let lumosmaximaSFX;

/**
Description of preload
*/
function preload() {
// Image load
  trainbgGif= loadImage(`assets/images/trainbg.gif`);
  hogwartsbgImage = loadImage(`assets/images/hogwartsbg.jpg`);
  snitchImage = loadImage(`assets/images/snitch.png`);
  snitch2Image = loadImage(`assets/images/snitch2.png`);
  introbgImage = loadImage(`assets/images/quidditchbg.jpg`);
  wandlightImage = loadImage(`assets/images/wandlight.png`);
  introspellImage = loadImage(`assets/images/introspell.png`);
  stage1bgImage = loadImage(`assets/images/forestbg.jpg`);
  treetrunkImage = loadImage(`assets/images/treetrunk.png`);
  lumosflareImage = loadImage(`assets/images/lumosflare.png`);
  stage2bgImage = loadImage(`assets/images/forest2bg.jpg`);

// Sound load
  trainSFX = loadSound(`assets/sounds/trainwhistle.mp3`);
  firebgSFX = loadSound(`assets/sounds/firebg.mp3`)
  menuSoundtrack = loadSound(`assets/sounds/menumusic.mp3`);
  introspellSFX = loadSound(`assets/sounds/immobulus.mp3`);
  wleviosaSFX = loadSound(`assets/sounds/wleviosa.mp3`);
  lumosSFX = loadSound(`assets/sounds/lumos.mp3`);
  lumosmaximaSFX = loadSound(`assets/sounds/lumosmaxima.mp3`);
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
  treetrunk = new TreeTrunk(treetrunkImage);
  lumosspell = new LumosSpell;

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
      menuSoundtrack.amp(0.6);
      firebgSFX.amp(0.3);


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
       case "introEnd":
               introEnd();
               break;
       case "stage1":
            stage1();
            break;
      case "stage1End":
            stage1End();
            break;
      case "stage2":
            stage2();
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
  tintvalue = tintvalue +5;
  tint(255,tintvalue);
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
  image(introbgImage, width/2, height/2, 680, 480)

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
      // tintvalue = random(0,150)
      // tint(255,tintvalue);
      strokeWeight(3);
      stroke(0);
      line(baseX, baseY, tipX, tipY);
      image(wandlightImage,tipX,tipY,30,30);
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
function introEnd(){
  background(255);
}

// Stage 1 of game: Use spell Wingardium Leviosa to levitate the tree log that blocks the path
function stage1(){
  push();
  image(stage1bgImage,width/2,height/2, 667,480 );
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

function stage1End(){
  background(255);
  push();
  fill(0);
  displayText(`The Hogwarts Express is reaching its destination`, 20, width/2.5, height/12, 0);
  pop();
}

function stage2(){
image(stage2bgImage,width/2,height/2, 853, 480);

      lumosspell.display();

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
      strokeWeight(3);
      fill(150);
      stroke(150);
      line(baseX, baseY, tipX, tipY);

      if(currentSpell === `Lumos`){
        tint(255,200);
        image(lumosflareImage,tipX,tipY,70,70);
      }
      else if(currentSpell === `Lumos Maxima`){
        tint(255,220);
        image(lumosflareImage,tipX,tipY,90,90);
      }
      pop();
    }
    displaySpellName();
}

function displaySpellName(){
  displayText(currentSpell + `!`, 20, width / 2, height / 8);
}

function castSpell(spell){
//Capitalize first letter of each word!
  currentSpell = spell.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  console.log(currentSpell);

  if (currentSpell === `Immobulus`){
      createIntroSpell(tipX,tipY);
  }
  else if (currentSpell === `Lumos` && state ===`stage2`){
    lumosSFX.play();
  }
  else if (currentSpell === `Lumos Maxima` && state ===`stage2`){
    lumosmaximaSFX.play();
  }
}

// function that create introspell
function createIntroSpell(x,y){
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
// Keypress function
function keyPressed(){
  // Allow to change state if pressed on appropriate keys!
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
  ){state = `introEnd`;
  }
  else if (keyCode === ENTER && state === `introEnd` ){
    state = `stage1`;
  }
  else if (keyCode === ENTER && state === `stage1` ){
    state = `stage1End`;
  }
  else if (keyCode === ENTER && state === `stage1End` ){
    state = `stage2`;
  }
  // Delete current spell if Backspace is pressed
  else if (keyCode === 8){
    currentSpell = ``;
  }
}
