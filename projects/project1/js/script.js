"use strict";

/**
Harry Potter - Spellcaster
Percy Vinh TUan Dat Nguyen

Description
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
let snitch;
let introspells =[];
let voldemortname;
let treetrunk;
let darkness;
let dementors;
let patronuscharm;
let voldemort;
let timer;
let stupefyspells=[];
let incendiospells=[];

//                        IMAGES VARIABLES
let trainbgGif;
let hogwartsbgImage;
let snitchImage;
let snitch2Image;
let introbgImage;
let wandlightImage;
let introspellImage;
let stage1bgImage;
let voldemortnameImage;
let avadakedavraImage;
let avadakedavra2Image;
let avadakedavra3Image;
let treetrunkImage;
let stage2bgImage;
let lumosflareImage;
let snapeImage;
let stage3bgImage;
let dementorImage;
let dementor2Image;
let dementor3Image;
let stage4bgImage;
let voldemortgreetImage;
let voldemortcastImage;
let voldemortspellImage;
let timerImage;
let stupefyspellImage;
//Sound variables
let trainSFX;
let firebgSFX;
let menuSoundtrack;
let introSoundtrack;
let snitchSFX;
let introspellSFX;
let teleportspellSFX;
let voldemortnameSFX;
let wleviosaSFX;
let wleviosaguideSFX;
let lumosSFX;
let lumosmaximaSFX;
let dementorsSFX;
let expectopatronusSFX;

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
  voldemortnameImage = loadImage(`assets/images/voldemortname.png`);
  avadakedavraImage = loadImage(`assets/images/avadakedavra.png`);
  avadakedavra2Image = loadImage(`assets/images/avadakedavra2.png`);
  avadakedavra3Image = loadImage(`assets/images/avadakedavra3.png`);
  treetrunkImage = loadImage(`assets/images/treetrunk.png`);
  stage2bgImage = loadImage(`assets/images/forest2bg.jpg`);
  lumosflareImage = loadImage(`assets/images/lumosflare.png`);
  snapeImage = loadImage(`assets/images/snape.png`);
  stage3bgImage = loadImage(`assets/images/dementorbg.jpg`);
  dementorImage = loadImage(`assets/images/dementor.png`);
  dementor2Image = loadImage(`assets/images/dementor2.png`);
  dementor3Image = loadImage(`assets/images/dementor3.png`);
  stage4bgImage = loadImage(`assets/images/courtyardbg.jpg`)
  voldemortgreetImage = loadImage(`assets/images/voldemortgreet.png`);
  voldemortcastImage = loadImage(`assets/images/voldemortcast.png`);
  voldemortspellImage = loadImage(`assets/images/vspell.png`);
  timerImage = loadImage(`assets/images/timer.png`);
  stupefyspellImage = loadImage (`assets/images/stupefyspell.png`);

// Sound load
  trainSFX = loadSound(`assets/sounds/trainwhistle.mp3`);
  firebgSFX = loadSound(`assets/sounds/firebg.mp3`)
  menuSoundtrack = loadSound(`assets/sounds/menumusic.mp3`);
  introSoundtrack = loadSound(`assets/sounds/introbg.mp3`);
  introspellSFX = loadSound(`assets/sounds/immobulus.mp3`);
  voldemortnameSFX = loadSound(`assets/sounds/voldemortname.mp3`);
  teleportspellSFX = loadSound(`assets/sounds/teleportspell.wav`);
  wleviosaSFX = loadSound(`assets/sounds/wleviosa.mp3`);
  wleviosaguideSFX = loadSound(`assets/sounds/wleviosaguide.mp3`);
  lumosSFX = loadSound(`assets/sounds/lumos.mp3`);
  lumosmaximaSFX = loadSound(`assets/sounds/lumosmaxima.mp3`);
  dementorsSFX = loadSound(`assets/sounds/dementors.mp3`);
  expectopatronusSFX = loadSound(`assets/sounds/expectopatronus.mp3`);
  snitchSFX = loadSound(`assets/sounds/snitch.mp3`);

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
  darkness = new Darkness;
  dementors = new Dementors(dementorImage, dementor2Image);
  patronuscharm = new PatronusCharm();
  timer = new Timer(timerImage);
  voldemortname = new VoldemortName(voldemortnameImage,avadakedavraImage,avadakedavra2Image);
  voldemort = new Voldemort(voldemortgreetImage, voldemortcastImage, voldemortspellImage);

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
      trainSFX.amp(0.6);
      menuSoundtrack.amp(0.6);
      firebgSFX.amp(0.3);
      snitchSFX.amp(0.3);


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
      case "VNameEnding":
            VNameEnding();
            break;
      case "stage1End":
            stage1End();
            break;
      case "stage2":
            stage2();
            break;
      case "stage2End":
            stage2End();
            break;
      case "stage3":
            stage3();
            break;
      case "dementorEnding":
            dementorEnding();
            break;
      case "stage3End":
            stage3End();
            break;
      case "stage4":
            stage4();
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
  tintvalue = tintvalue +10;
  // tint(255,tintvalue);
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
  image(introbgImage, width/2, height/2, 680, 480);
  //If say Voldemort, game warns user!
  if (currentSpell === `Voldemort`){
    currentSpell = `HE WHO MUST NOT BE NAMED...`
  }
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
      // image(wandlightImage,tipX,tipY,30,30);
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
// Display Spell up top
    displaySpellName();
// If snitch frozen, show text
    if(snitch.frozen ===true){
      displayText(`Golden Snitch Immobilized!`,30, width/2, height/5,255);
    }
  }
function introEnd(){
  background(255);
  push();
  fill(0);
  displayText(`Intro End`, 20, width/2.5, height/12, 0);
  pop();
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
    voldemortname.display();
    voldemortname.move();
}

function stage1End(){
  background(255);
  push();
  fill(0);
  displayText(`Stage 1 End`, 20, width/2.5, height/12, 0);
  pop();
}

function stage2(){
image(stage2bgImage,width/2,height/2, 853, 480);

      darkness.display();

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

        image(snapeImage, 3*width/4,3*height/4, 143.75,400);
        tint(255,200);
        image(lumosflareImage,tipX,tipY,70,70);
      }
      else if(currentSpell === `Lumos Maxima`){
        // tint(255,220);
        image(lumosflareImage,tipX,tipY,90,90);
      }
      pop();
    }
    voldemortname.display();
    voldemortname.move();
    displaySpellName();
}
function stage2End(){
  background(255);
  push();
  fill(0);
  displayText(`Stage 2 End`, 20, width/2.5, height/12, 0);
  pop();
}
function stage3(){
  image(stage3bgImage,width/2,height/2, 853, 480);

  dementors.display();
  dementors.move();
  dementors.disappear();
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
      stroke(0);
      line(baseX, baseY, tipX, tipY);
      pop();
      patronuscharm.x = tipX;
      patronuscharm.y = tipY;
      patronuscharm.x2 = tipX;
      patronuscharm.y2 = tipY;

      if (currentSpell === `Expecto Patronum`){
      patronuscharm.display();
      patronuscharm.casted();
      patronuscharm.collide(dementors);
      }
    }
    voldemortname.display();
    voldemortname.move();
    displaySpellName();
}

function stage3End(){
  background(255);
  push();
  fill(0);
  displayText(`Stage 3 End`, 20, width/2.5, height/12);
  pop();
}

function stage4(){
  image(stage4bgImage,width/2,height/2,1127,480);

  if (currentSpell === `Stupify`){
    currentSpell = `Stupefy`
  }
    timer.display();
    timer.move();
    voldemort.display();
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
      strokeWeight(3);
      stroke(0);
      line(baseX, baseY, tipX, tipY);
      pop();

        for (let i = 0; i < stupefyspells.length; i++){
          let stupefyspell = stupefyspells[i];
          stupefyspell.display(voldemort);
          stupefyspell.move();
          stupefyspell.chase(voldemort);
          stupefyspell.collide(voldemort);
          if (voldemort.countered === true){
            stupefyspells.splice(i,1);
            break;
        }
      }
    }
    voldemort.move();
    if (voldemort.size2 >= 20){
    }
    displaySpellName();
}
// BAD ENDINGS - GAME LOST
function dementorEnding(){
  background(0);
  push();
  displayText(`DementorEnding`, 20, width/2.5, height/12, 255);
  pop();
}

function VNameEnding(){
  background(160,0,0);
  push();
  displayText(`Voldemort Ending`, 20, width/2.5, height/12, 255);
  pop();
}
//DISPLAY THE CURRENT SPELL AT TOP
function displaySpellName(){
  push();
  if (currentSpell === `Voldemort`){
    fill(217,254,177);
  }
  displayText(currentSpell + `!`, 20, width / 2, height / 8);
  pop();
}

function castSpell(spell){
//Capitalize first letter of each word!
  currentSpell = spell.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  console.log(currentSpell);

  if (currentSpell === `Immobulus`){
      createIntroSpell(tipX,tipY);
  }
  else if (currentSpell === `Voldemort` && state === `stage1` || currentSpell === `Voldemort` && state === `stage2`
  || currentSpell === `Voldemort` && state === `stage3`){
    if (dementorsSFX.isPlaying()){
      dementorsSFX.stop();
    }
    teleportspellSFX.play();
    voldemortnameSFX.play();
  }
  else if (currentSpell === `Lumos` && state ===`stage2`){
    lumosSFX.play();
  }
  else if (currentSpell === `Lumos Maxima` && state ===`stage2`){
    lumosmaximaSFX.play();
  }
  else if (currentSpell === `Expecto Patronum` && state === `stage3`){
    expectopatronusSFX.loop();
    dementorsSFX.stop();
  }
  else if(currentSpell === `Stupify`){
    createStupefySpell(tipX,tipY);
  }
}

// function that create introspell
function createIntroSpell(x,y){
    let introspell = new IntroSpell(x,y, introspellImage);
    introspells.push(introspell);
}
// function that create introspell
function createStupefySpell(x,y){
    let stupefyspell = new StupefySpell(x,y,stupefyspellImage);
    stupefyspells.push(stupefyspell);
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
    snitchSFX.loop();
    introSoundtrack.loop();
  }
  else if (keyCode === ENTER && state === `intro`
    // && snitch.frozen ===true
  ){state = `introEnd`;
    snitchSFX.stop();

  }
  else if (keyCode === ENTER && state === `introEnd` ){
    state = `stage1`;
    introSoundtrack.stop();
  }
  else if (keyCode === ENTER && state === `stage1` ){
    state = `stage1End`;

  }
  else if (keyCode === ENTER && state === `stage1End` ){
    state = `stage2`;
  }
  else if (keyCode === ENTER && state === `stage2` ){
    state = `stage2End`;
  }
  else if (keyCode === ENTER && state === `stage2End` ){
    state = `stage3`;
    dementorsSFX.play();
  }
  else if (keyCode === ENTER && state === `stage3` ){
    state = `stage3End`;
    dementorsSFX.stop();
  }
  else if (keyCode === ENTER && state === `stage3End` ){
    state = `stage4`;
  }
  // Delete current spell if BACKSPACE is pressed
  else if (keyCode === 8){
    currentSpell = ``;
  }
}
