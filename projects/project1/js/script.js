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
// FONT
let harrypotterFont
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
let expelliarmusspells =[];
let confringospells =[];

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
let voldemortspell2Image;
let timerImage;
let stupefyspellImage;
let stupefyspell2Image;
let stupefyeffectImage;
let incendiospellImage;
let incendiospell2Image;
let incendioeffectImage;
let expelliarmusspellImage;
let expelliarmusspell2Image;
let expelliarmuseffectImage;
let confringospellImage;
let confringospell2Image;
let confringoeffectImage;
//Sound variables
let trainSFX;
let firebgSFX;
let menuSoundtrack;
let introSoundtrack;
let snitchSFX;
let introspellSFX;
let teleportspellSFX;
let stage123Soundtrack;
let warSFX;
let voldemortnameSFX;
let wleviosaSFX;
let wleviosaguideSFX;
let lumosSFX;
let lumosmaximaSFX;
let dementorsSFX;
let expectopatronusSFX;
let stage4Soundtrack;
let stupefySFX;
let spellhitV;
let incendioSFX;
let incendiohitVSFX;
let expelliarmusSFX;
let expelliarmushitVSFX;
let confringoSFX;
let confringohitVSFX;
let spellcounteredSFX;
let avadakedavraSFX;


/**
Description of preload
*/
function preload() {
// FONT load
harrypotterFont = loadFont(`assets/fonts/harryp.TTF`)

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
  voldemortspell2Image = loadImage(`assets/images/vspell2.png`);
  timerImage = loadImage(`assets/images/timer.png`);
  stupefyspellImage = loadImage (`assets/images/stupefyspell.png`);
  stupefyspell2Image = loadImage(`assets/images/stupefyspell2.png`);
  stupefyeffectImage = loadImage(`assets/images/stupefyeffect.png`);
  incendiospellImage = loadImage (`assets/images/incendio.png`);
  incendiospell2Image = loadImage(`assets/images/incendio2.png`);
  incendioeffectImage = loadImage(`assets/images/incendioeffect.png`);
  expelliarmusspellImage = loadImage (`assets/images/expelliarmus.png`);
  expelliarmusspell2Image = loadImage(`assets/images/expelliarmus2.png`);
  expelliarmuseffectImage = loadImage(`assets/images/expelliarmuseffect.png`);
  confringospellImage = loadImage (`assets/images/confringo.png`);
  confringospell2Image = loadImage(`assets/images/confringo2.png`);
  confringoeffectImage = loadImage(`assets/images/confringoeffect.png`);


// Sound load
  trainSFX = loadSound(`assets/sounds/trainwhistle.mp3`);
  firebgSFX = loadSound(`assets/sounds/firebg.mp3`);
  menuSoundtrack = loadSound(`assets/sounds/menumusic.mp3`);
  introSoundtrack = loadSound(`assets/sounds/introbg.mp3`);
  snitchSFX = loadSound(`assets/sounds/snitch.mp3`);
  introspellSFX = loadSound(`assets/sounds/immobulus.mp3`);
  stage123Soundtrack = loadSound(`assets/sounds/snapetomalfoy.mp3`);
  warSFX = loadSound(`assets/sounds/warSFX.mp3`);
  voldemortnameSFX = loadSound(`assets/sounds/voldemortname.mp3`);
  teleportspellSFX = loadSound(`assets/sounds/teleportspell.wav`);
  wleviosaSFX = loadSound(`assets/sounds/wleviosa.mp3`);
  wleviosaguideSFX = loadSound(`assets/sounds/wleviosaguide.mp3`);
  lumosSFX = loadSound(`assets/sounds/lumos.mp3`);
  lumosmaximaSFX = loadSound(`assets/sounds/lumosmaxima.mp3`);
  dementorsSFX = loadSound(`assets/sounds/dementors.mp3`);
  expectopatronusSFX = loadSound(`assets/sounds/expectopatronus.mp3`);
  stage4Soundtrack = loadSound(`assets/sounds/battlefield.mp3`);
  stupefySFX = loadSound(`assets/sounds/stupefy.wav`);
  incendioSFX = loadSound(`assets/sounds/incendio.wav`);
  incendiohitVSFX = loadSound(`assets/sounds/incendiohitV.wav`);
  expelliarmusSFX = loadSound(`assets/sounds/expelliarmus.wav`);
  expelliarmushitVSFX = loadSound(`assets/sounds/expelliarmushitV.wav`);
  confringoSFX = loadSound(`assets/sounds/confringo.wav`);
  confringohitVSFX = loadSound(`assets/sounds/confringohitV.wav`);
  spellcounteredSFX = loadSound(`assets/sounds/spellcountered.wav`);
  spellhitV = loadSound(`assets/sounds/spellhitV.mp3`);
  avadakedavraSFX = loadSound(`assets/sounds/avadakedavra.wav`);

}
/**
Description of setup
*/
function setup() {
createCanvas(640,480);
imageMode(CENTER);
textFont(harrypotterFont);
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
      stage123Soundtrack.amp(0.3);
      warSFX.amp(0.2);
      stage4Soundtrack.amp(0.4);


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
  displayText(`The Hogwarts Express is reaching its destination`, 35, width/2.5, height/12);
  pop();
}

function menu(){
  push();
  tintvalue = tintvalue +10;
  // tint(255,tintvalue);
  image(hogwartsbgImage, width/2, height/2,850,480);
  strokeWeight(1);
  stroke(20,38,47);
  displayText(`Battle of Hogwarts`,90, width/2, height/2,255,242,224);
  pop();
}

function instructions(){
  background(200,100,0);
  push();
  displayText(`Instructions`,50, width/2, height/5);
  pop();
}

function intro(){
// background image
  image(introbgImage, width/2, height/2, 680, 480);
  //If say Voldemort, game warns user!
  if (currentSpell === `Voldemort`){
    currentSpell = `He who must not be named...`
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
      displayText(`Golden Snitch Immobilized!`,50, width/2, height/5,255);
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
    voldemort.display();
    voldemort.Voldemorthurt();
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
          if (voldemort.countered === false && stupefyspell.size >= 200){
          stupefyspell.chaseVspell(voldemort);
          stupefyspell.collideVspell(voldemort);
          }
          else if (voldemort.countered === true || voldemort.countered === false && stupefyspell.size < 200){
          stupefyspell.chaseVoldemort(voldemort);
          stupefyspell.collideVoldemort(voldemort,timer);
          }
          if (stupefyspell.hitspell === true){
            stupefyspells.splice(i,1);
            break;
          }
          if (stupefyspell.hitVoldemort === true){
            stupefyspells.splice(i,1);
            break;
          }
      }
        for (let i = 0; i < incendiospells.length; i++){
          let incendiospell = incendiospells[i];
          incendiospell.display();
          incendiospell.move();
          if (voldemort.countered === false && incendiospell.size >= 200){
          incendiospell.chaseVspell(voldemort);
          incendiospell.collideVspell(voldemort);
          }
          else if (voldemort.countered === true || voldemort.countered === false && incendiospell.size < 200){
          incendiospell.chaseVoldemort(voldemort);
          incendiospell.collideVoldemort(voldemort,timer);
          }
          if (incendiospell.hitspell === true){
            incendiospells.splice(i,1);
            break;
          }
          if (incendiospell.hitVoldemort === true){
            incendiospells.splice(i,1);
            break;
          }
      }
        for (let i = 0; i < expelliarmusspells.length; i++){
          let expelliarmusspell = expelliarmusspells[i];
          expelliarmusspell.display();
          expelliarmusspell.move();
          if (voldemort.countered === false && expelliarmusspell.size >= 200){
          expelliarmusspell.chaseVspell(voldemort);
          expelliarmusspell.collideVspell(voldemort);
          }
          else if (voldemort.countered === true || voldemort.countered === false && expelliarmusspell.size < 200){
          expelliarmusspell.chaseVoldemort(voldemort);
          expelliarmusspell.collideVoldemort(voldemort,timer);
          }
          if (expelliarmusspell.hitspell === true){
            expelliarmusspells.splice(i,1);
            break;
          }
          if (expelliarmusspell.hitVoldemort === true){
            expelliarmusspells.splice(i,1);
            break;
          }
      }
        for (let i = 0; i < confringospells.length; i++){
          let confringospell = confringospells[i];
          confringospell.display();
          confringospell.move();
          if (voldemort.countered === false && confringospell.size >= 200){
          confringospell.chaseVspell(voldemort);
          confringospell.collideVspell(voldemort);
          }
          else if (voldemort.countered === true || voldemort.countered === false && confringospell.size < 200){
          confringospell.chaseVoldemort(voldemort);
          confringospell.collideVoldemort(voldemort,timer);
          }
          if (confringospell.hitspell === true){
            confringospells.splice(i,1);
            break;
          }
          if (confringospell.hitVoldemort === true){
            confringospells.splice(i,1);
            break;
          }
      }
    }

    voldemort.move();
    timer.move(voldemort);
    voldemortname.display();
    voldemortname.move();
    displaySpellName();

}
// BAD ENDINGS - GAME LOST
// DEMENTORS ENDING if player fails to push dementors outside of the screen in time using the Patronus Charm (Expecto Patronum)
function dementorEnding(){
  background(0);
  push();
  displayText(`DementorEnding`, 50, width/2.5, height/12, 255);
  pop();
}
// VOLDEMORT ENDING if player says the name Voldemort in stages 1-4.
function VNameEnding(){
  background(20,116,82);
  push();
  displayText(`Foolish enough to mention the Dark Lord?`, 40, width/2, height/2, 180);
  displayText(`The End`, 35, width/2, 3*height/4, 180)
  pop();

}
//Display the current spell that the user just use up top!
function displaySpellName(){
  push();
  if (currentSpell === `Voldemort`){
    fill(217,254,177);
  }
  displayText(currentSpell + `!`, 40, width / 2, height / 8);
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
  || currentSpell === `Voldemort` && state === `stage3`|| currentSpell === `Voldemort` && state === `stage4`){
    if (dementorsSFX.isPlaying()){
      dementorsSFX.stop();
    }
    teleportspellSFX.play();
    voldemortnameSFX.play();
  }
  else if (currentSpell === `Wingardium Leviosa` && state===`stage1`){
    wleviosaSFX.play();
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
  else if(currentSpell === `Stupify` && state ===`stage4`){
    stupefySFX.play();
    createStupefySpell(tipX,tipY);
  }
  else if(currentSpell === `Incendio` && state ===`stage4`){
    incendioSFX.play();
    createIncendioSpell(tipX,tipY);
  }
  else if(currentSpell === `Expelliarmus` && state ===`stage4`){
    expelliarmusSFX.play();
    createExpelliarmusSpell(tipX,tipY);
  }
  else if(currentSpell === `Confringo` && state ===`stage4`){
    confringoSFX.play();
    createConfringoSpell(tipX,tipY);
  }
}

// function that create introspell each time the player yells Immobulus
function createIntroSpell(x,y){
    let introspell = new IntroSpell(x,y, introspellImage);
    introspells.push(introspell);
}
// Function that create Stupefy spell each time the player yells Stupify
function createStupefySpell(x,y){
    let stupefyspell = new StupefySpell(x,y,stupefyspellImage,stupefyspell2Image,stupefyeffectImage);
    stupefyspells.push(stupefyspell);
}
// Function that create Incendio spell each time the player yells Incendio
function createIncendioSpell(x,y){
    let incendiospell = new IncendioSpell(x,y,incendiospellImage,incendiospell2Image,incendioeffectImage);
    incendiospells.push(incendiospell);
}
// Function that create Expelliarmus spell each time the player yells Incendio
function createExpelliarmusSpell(x,y){
    let expelliarmusspell = new ExpelliarmusSpell(x,y,expelliarmusspellImage,expelliarmusspell2Image,expelliarmuseffectImage);
    expelliarmusspells.push(expelliarmusspell);
}

// Function that create Confringo spell each time the player yells Incendio
function createConfringoSpell(x,y){
    let confringospell = new ConfringoSpell(x,y,confringospellImage,confringospell2Image,confringoeffectImage);
    confringospells.push(confringospell);
}
// Function that allow display text to be more efficient
function displayText(string, size, x, y, r, g, b) {
    push();
    fill(r,g,b)
    textAlign(CENTER, CENTER);
    textSize(size);
    text(string, x, y);
    pop();
}
// Keypress function that changes states of the game
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
    stage123Soundtrack.loop();
    warSFX.loop();
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
    stage123Soundtrack.stop();
    warSFX.stop();
  }
  else if (keyCode === ENTER && state === `stage3End` ){
    state = `stage4`;
    stage4Soundtrack.loop();
  }
  // Delete current spell if BACKSPACE is pressed
  else if (keyCode === 8){
    currentSpell = ``;
  }
}
