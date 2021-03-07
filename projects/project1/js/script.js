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
// tipX and tipY variables for the tip of the wand/finger. Used as original coordinates of every spell!
let tipX;
let tipY;
// tintvalue for fade in effect of menu image;
let tintvalue = 0;
// User Webcam
let video = undefined;
// FONT
let harrypotterFont

let lumosmaxcasted = false;
//                        CLASSES VARIABLES
let snitch;
let introspells = [];
let voldemortname;
let treetrunk;
let darkness;
let dementors;
let patronuscharm;
let voldemort;
let timer;
let stupefyspells = [];
let incendiospells = [];
let expelliarmusspells = [];
let confringospells = [];

//                        IMAGES VARIABLES
let trainbgGif;
let hogwartsbgImage;
let instructionsImage;
let spellslistImage;
let snitchImage;
let snitch2Image;
let introbgImage;
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
let dementorGif;
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
let loseEndingGif;
let winEndingGif;

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
let dementorEndingSFX;
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
let evillaughSFX;
let loseEndingSFX;
let winEndingSFX;

/**
Description of preload
*/
function preload() {
  // FONT load
  harrypotterFont = loadFont(`assets/fonts/harryp.TTF`)

  // Image load
  trainbgGif = loadImage(`assets/images/trainbg.gif`);
  hogwartsbgImage = loadImage(`assets/images/hogwartsbg.jpg`);
  instructionsImage = loadImage(`assets/images/gryf.jpg`);
  spellslistImage = loadImage(`assets/images/ravenclaw.png`);
  snitchImage = loadImage(`assets/images/snitch.png`);
  snitch2Image = loadImage(`assets/images/snitch2.png`);
  introbgImage = loadImage(`assets/images/quidditchbg.jpg`);
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
  dementorGif = loadImage(`assets/images/dementor.gif`);
  stage4bgImage = loadImage(`assets/images/courtyardbg.jpg`)
  voldemortgreetImage = loadImage(`assets/images/voldemortgreet.png`);
  voldemortcastImage = loadImage(`assets/images/voldemortcast.png`);
  voldemortspellImage = loadImage(`assets/images/vspell.png`);
  voldemortspell2Image = loadImage(`assets/images/vspell2.png`);
  timerImage = loadImage(`assets/images/timer.png`);
  stupefyspellImage = loadImage(`assets/images/stupefyspell.png`);
  stupefyspell2Image = loadImage(`assets/images/stupefyspell2.png`);
  stupefyeffectImage = loadImage(`assets/images/stupefyeffect.png`);
  incendiospellImage = loadImage(`assets/images/incendio.png`);
  incendiospell2Image = loadImage(`assets/images/incendio2.png`);
  incendioeffectImage = loadImage(`assets/images/incendioeffect.png`);
  expelliarmusspellImage = loadImage(`assets/images/expelliarmus.png`);
  expelliarmusspell2Image = loadImage(`assets/images/expelliarmus2.png`);
  expelliarmuseffectImage = loadImage(`assets/images/expelliarmuseffect.png`);
  confringospellImage = loadImage(`assets/images/confringo.png`);
  confringospell2Image = loadImage(`assets/images/confringo2.png`);
  confringoeffectImage = loadImage(`assets/images/confringoeffect.png`);
  winEndingGif = loadImage(`assets/images/vdeath.gif`);
  loseEndingGif = loadImage(`assets/images/loseending.gif`);

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
  dementorEndingSFX = loadSound(`assets/sounds/dementorend.mp3`);
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
  evillaughSFX = loadSound(`assets/sounds/evillaugh.mp3`);
  loseEndingSFX = loadSound(`assets/sounds/loseending.mp3`);
  winEndingSFX = loadSound(`assets/sounds/winending.mp3`);
}
/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);
  imageMode(CENTER);
  textFont(harrypotterFont);
  if (state === `loading`) {
    trainSFX.play();
  }

  // Declare classes
  snitch = new Snitch(snitchImage);
  treetrunk = new TreeTrunk(treetrunkImage);
  darkness = new Darkness;
  dementors = new Dementors(dementorImage, dementor2Image);
  patronuscharm = new PatronusCharm();
  timer = new Timer(timerImage);
  voldemortname = new VoldemortName(voldemortnameImage, avadakedavraImage, avadakedavra2Image);
  voldemort = new Voldemort(voldemortgreetImage, voldemortcastImage, voldemortspellImage);

  // access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  // load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
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
    warSFX.amp(0.3);
    stage4Soundtrack.amp(0.4);


  });

  // Listen for predictions
  handpose.on(`predict`, function(results) {
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
 Switch case between states!
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
    case "spellslist":
      spellslist();
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
    case "loseEnding":
      loseEnding();
      break;
    case "winEnding":
      winEnding();
      break;
  }
}
// STATES
// Loading state of the game.
function loading() {
  image(trainbgGif, width / 2, height / 2);
  push();
  displayText(`The Hogwarts Express is reaching its destination`, 35, width / 2.5, height / 12);
  pop();
}
// Menu state of the game.
function menu() {
  push();
  tintvalue += 30;
  tint(255, tintvalue);
  image(hogwartsbgImage, width / 2, height / 2, 850, 480);
  strokeWeight(1);
  stroke(20, 38, 47);
  displayText(`Battle of Hogwarts`, 90, width / 2, height / 2, 255, 242, 224);
  displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6, 255, 242, 224);
  pop();
}
// Instructions state for the game
function instructions() {
  image(instructionsImage, width / 2, height / 2, 862, 480);
  push();
  stroke(0);
  strokeWeight(1);
  displayText(`Instructions`, 50, width / 2, height / 5);
  displayText(`Raise Index Finger to see your wand!`, 40, width / 2, height / 2 - 40);
  displayText(`Yell the incantation of a spell to cast it`, 40, width / 2, height / 2);
  displayText(`Consult the Spells List by yelling "Spells List" or press S`, 35, width / 2, height / 2 + 40);
  displayText(`Rule to Abide by - Never mention You-Know-Who`, 40, width / 2, height / 2 + 80);
  displayText(`Once READY, Press Enter to Practice`, 40, width / 2, height / 2 + 120);
  displayText(currentSpell, 40, width / 2, height / 2 + 180);
  pop();
}
// Spells list state of the game which stores a description of all the spells in the game.
// This will help players greatly at the final stage of the game through elimination.
function spellslist() {
  background(1, 80, 110);
  image(spellslistImage, width / 2, height / 2, 408, 480);
  push();
  stroke(0);
  strokeWeight(1);
  displayText(`Spells List`, 50, width / 2, height / 8);
  displayText(`Confringo: Curse that causes the target to explode`, 30, width / 2, height / 2 - 140);
  displayText(`Expecto Patronum: Defensive charm against Dementors`, 30, width / 2, height / 2 - 110);
  displayText(`Expelliarmus: Disarm Charm`, 30, width / 2, height / 2 - 80);
  displayText(`Immobulus: Freezing Charm`, 30, width / 2, height / 2 - 50);
  displayText(`Incendio: Fire-Making Spell`, 30, width / 2, height / 2 - 20);
  displayText(`Lumos: Wand-Lighting Charm`, 30, width / 2, height / 2 + 10);
  displayText(`Lumos Maxima: Modified version of the Wand-Lighting Charm`, 30, width / 2, height / 2 + 40);
  displayText(`Wingardium Leviosa: Levitation Charm`, 30, width / 2, height / 2 + 70);
  displayText(`Stupefy: Stunning Spell`, 30, width / 2, height / 2 + 100);
  displayText(`Revelio: Charm that reveal concealed objects, messages, passages`, 30, width / 2, height / 2 + 130);
  displayText(`Yell BACK or Press B to go back to Instructions`, 30, width / 2, height / 2 + 180);
  pop();
}
// Introduction of the game. Required spell (Immobulus) is revealed to player. Play must casts Immobulus to freeze the golden snitch
// and continue with the game
function intro() {
  // background image
  image(introbgImage, width / 2, height / 2, 680, 480);

  //If say Voldemort, game warns user!
  if (currentSpell === `Voldemort`) {
    currentSpell = `He who must not be named...`
  }
  snitch.display();
  snitch.move();
  if (predictions.length > 0) {
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

    for (let i = 0; i < introspells.length; i++) {
      let introspell = introspells[i];
      introspell.display(snitch);
      introspell.move();
      introspell.chase(snitch);
      introspell.collide(snitch);
      if (snitch.frozen === true) {
        introspells.splice(i, 1);
        break;
      }
    }
  }
  // Display Spell up top
  displaySpellName();
  // If snitch frozen, show text
  if (snitch.frozen === false) {
    displayText(`Use the Freezing Charm, Immobulus, to stop the Golden Snitch from moving!`, 25, width / 2, 5 * height / 6);
  }
  if (snitch.frozen === true) {
    displayText(`Golden Snitch Immobilized!`, 50, width / 2, height / 5, 255);
    displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  }
}

function introEnd() {
  background(10);
  push();
  displayText(`Apply your knowledge to the journey ahead`, 40, width / 2, height / 2, 255, 255, 255);
  displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  pop();
}
// Stage 1 of game: Use spell Wingardium Leviosa to levitate the tree log that blocks the path. Cannot proceed until tree log is still there.
function stage1() {
  push();
  image(stage1bgImage, width / 2, height / 2, 667, 480);
  pop();
  treetrunk.display();
  if (currentSpell === `Revelio`) {
    displayText(`Wingardium Leviosa`, 40, width / 2, 5 * height / 6, 255, 255, 255);
  } else if (currentSpell === `Wingardium Leviosa`) {
    treetrunk.move();
    displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  } else if (currentSpell != `Wingardium Leviosa`) {
    displayText(`The tree is blocking the path... If only there is a way to move it...`, 30, width / 2, 5 * height / 6);
  }
  if (predictions.length > 0) {
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
// Break after stage 1.
function stage1End() {
  background(10);
  push();
  displayText(`And we march onward`, 50, width / 2, height / 2, 255, 255, 255);
  displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  pop();
}
// Stage 2. Player must first cast Lumos Maxima to advance. Player could also cast Lumos to see Snape.
function stage2() {
  image(stage2bgImage, width / 2, height / 2, 853, 480);

  darkness.display();

  if (predictions.length > 0) {
    let hand = predictions[0];

    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    if (currentSpell === `Revelio`) {
      displayText(`Lumos, Lumos Maxima`, 40, width / 2, 5 * height / 6, 255, 255, 255);
    } else if (currentSpell === `Lumos`) {
      push();
      image(snapeImage, 3 * width / 4, 3 * height / 4, 143.75, 400);
      tint(255, 200);
      image(lumosflareImage, tipX, tipY, 70, 70);
      displayText(`Still too dark...`, 25, width / 2, 5 * height / 6);
      pop();
    } else if (currentSpell != `Lumos` && currentSpell != `Lumos Maxima`) {
      displayText(`Can't advance while your vision is blocked...`, 30, width / 2, 5 * height / 6);
    } else if (currentSpell === `Lumos Maxima`) {

      image(lumosflareImage, tipX, tipY, 90, 90);
      lumosmaxcasted = true;
      displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
    }
    push();
    strokeWeight(3);
    fill(150);
    stroke(150);
    line(baseX, baseY, tipX, tipY);
    pop();


  }
  voldemortname.display();
  voldemortname.move();
  displaySpellName();
}
// Break after stage 2
function stage2End() {
  background(10);
  push();
  displayText(`Finally, Hogwarts is in sight`, 50, width / 2, height / 2, 255, 255, 255);
  displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  pop();
}
// Stage 3 Player must push Dementors away from the screen using Expecto Patronum (the Patronus Charm). If push successfully, advance
// If not and first dementor reaches max size, player gets Dementor Ending (Bad Ending).
function stage3() {
  image(stage3bgImage, width / 2, height / 2, 853, 480);
  dementors.display();
  dementors.move();
  dementors.disappear();
  if (currentSpell === `Revelio`) {
    displayText(`Expecto Patronum`, 40, width / 2, 5 * height / 6, 255, 255, 255);
  }
  if (predictions.length > 0) {
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

    if (currentSpell === `Expecto Patronum`) {
      patronuscharm.display();
      patronuscharm.casted();
      patronuscharm.collide(dementors);
    }
  }
  voldemortname.display();
  voldemortname.move();
  displaySpellName();
}
// Break after stage 3
function stage3End() {
  background(10);
  push();
  displayText(`The smell of Death is near...`, 50, width / 2, height / 2 - 50, 255, 255, 255);
  displayText(`Be on guard!`, 50, width / 2, height / 2 + 50, 255, 255, 255);
  displayText(`Enter to continue`, 30, 4 * width / 5, 5 * height / 6);
  pop();
}
// Stage 4. Player fights Voldemort. Player may only use Stupefy, Expelliarmus, Incendio or Confringo. Play must counter Voldy's spell before
// being able to attack him directly. Player wins if cast expelliarmus when Voldy's hp is 1, loses if Voldy's spell reaches max size.
function stage4() {
  image(stage4bgImage, width / 2, height / 2, 1127, 480);

  if (currentSpell === `Stupify`) {
    currentSpell = `Stupefy`;
  } else if (currentSpell === `Revelio`) {
    state = `loseEnding`;
    stage4Soundtrack.stop();
    annyang.abort();
    loseEndingSFX.play();
  }
  timer.display();
  voldemort.display();
  voldemort.Voldemorthurt();
  if (predictions.length > 0) {
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
    // array for stupify
    for (let i = 0; i < stupefyspells.length; i++) {
      let stupefyspell = stupefyspells[i];
      stupefyspell.display(voldemort);
      stupefyspell.move();
      // Chase spell if countered is false and spell size is bigger than 200.
      if (voldemort.countered === false && stupefyspell.size >= 200) {
        stupefyspell.chaseVspell(voldemort);
        stupefyspell.collideVspell(voldemort);
      }
      // Chase Voldemort if Voldy is countered or Voldy is not countered but spell size is already too small.
      else if (voldemort.countered === true || voldemort.countered === false && stupefyspell.size < 200) {
        stupefyspell.chaseVoldemort(voldemort);
        stupefyspell.collideVoldemort(voldemort, timer);
      }
      // Split if hit Voldy's spell
      if (stupefyspell.hitspell === true) {
        stupefyspells.splice(i, 1);
        break;
      }
      // Split if hit Voldy
      if (stupefyspell.hitVoldemort === true) {
        stupefyspells.splice(i, 1);
        break;
      }
    }
    // array for incendio spell
    for (let i = 0; i < incendiospells.length; i++) {
      let incendiospell = incendiospells[i];
      incendiospell.display();
      incendiospell.move();
      if (voldemort.countered === false && incendiospell.size >= 200) {
        incendiospell.chaseVspell(voldemort);
        incendiospell.collideVspell(voldemort);
      } else if (voldemort.countered === true || voldemort.countered === false && incendiospell.size < 200) {
        incendiospell.chaseVoldemort(voldemort);
        incendiospell.collideVoldemort(voldemort, timer);
      }
      if (incendiospell.hitspell === true) {
        incendiospells.splice(i, 1);
        break;
      }
      if (incendiospell.hitVoldemort === true) {
        incendiospells.splice(i, 1);
        break;
      }
    }
    // array for expelliarmus
    for (let i = 0; i < expelliarmusspells.length; i++) {
      let expelliarmusspell = expelliarmusspells[i];
      expelliarmusspell.display();
      expelliarmusspell.move();
      if (voldemort.countered === false && expelliarmusspell.size >= 200) {
        expelliarmusspell.chaseVspell(voldemort);
        expelliarmusspell.collideVspell(voldemort);
      } else if (voldemort.countered === true || voldemort.countered === false && expelliarmusspell.size < 200) {
        expelliarmusspell.chaseVoldemort(voldemort);
        expelliarmusspell.collideVoldemort(voldemort, timer);
      }
      if (expelliarmusspell.hitspell === true) {
        expelliarmusspells.splice(i, 1);
        break;
      }
      if (expelliarmusspell.hitVoldemort === true) {
        expelliarmusspells.splice(i, 1);
        break;
      }
    }
    // array for confringo spells
    for (let i = 0; i < confringospells.length; i++) {
      let confringospell = confringospells[i];
      confringospell.display();
      confringospell.move();
      if (voldemort.countered === false && confringospell.size >= 200) {
        confringospell.chaseVspell(voldemort);
        confringospell.collideVspell(voldemort);
      } else if (voldemort.countered === true || voldemort.countered === false && confringospell.size < 200) {
        confringospell.chaseVoldemort(voldemort);
        confringospell.collideVoldemort(voldemort, timer);
      }
      if (confringospell.hitspell === true) {
        confringospells.splice(i, 1);
        break;
      }
      if (confringospell.hitVoldemort === true) {
        confringospells.splice(i, 1);
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
// 3 BAD ENDINGS - DEMENTORS ENDING, VOLDEMORT NAME ENDING,LOSE TO VOLDEMORT ENDING.
// DEMENTORS ENDING if player fails to push dementors outside of the screen in time using the Patronus Charm (Expecto Patronum)
function dementorEnding() {
  image(dementorGif, width / 2, height / 3, 640, 273);
  push();
  displayText(`Enter to Try Again`, 40, width / 2, 4 * height / 5, 255);
  pop();
}
// VOLDEMORT NAME  ENDING if player mentions the name Voldemort in stages 1-4.
function VNameEnding() {
  push();
  displayText(`Foolish enough to mention the Dark Lord's name?`, 40, width / 2, height / 2, 20, 116, 82);
  displayText(`Enter to Try Again`, 40, width / 2, height / 2 + 50, 20, 116, 82);
  pop();
}
// LOSE ENDING if Voldemort's spell reaches 620 size, means player is too slow to counter the spell and thus lose the duel.
function loseEnding() {
  image(loseEndingGif, width / 2, 2 * height / 5, 640, 392);
  push();
  displayText(`Enter to Try Again`, 40, width / 2, 4 * height / 5, 20, 116, 82);
  pop();
}
// FINAL ENDING
function winEnding() {
  image(winEndingGif, width / 2, 2 * height / 5, 640, 315);
  push();
  displayText(`And the curse rebounds. The Dark Lord disintegrates into ashes.`, 30, width / 2, 3 * height / 4, 180);
  displayText(`Well Played`, 45, width / 2, 3 * height / 4 + 50, 180);
  pop();
}
//Display the current spell that the user just use up top!
function displaySpellName() {
  push();
  if (currentSpell === `Voldemort`) {
    fill(217, 254, 177);
  }
  displayText(currentSpell, 40, width / 2, height / 8);
  pop();
}
// Function called by Annyang. Used for creating spells, changing states  and queuing sound effects.
function castSpell(spell) {
  //Capitalize first letter of each word!
  currentSpell = spell.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  console.log(currentSpell);

  if (currentSpell === `Spells List` && state === `instructions`) {
    state = `spellslist`
  } else if (currentSpell === `Back` && state === `spellslist`) {
    state = `instructions`
  } else if (currentSpell === `Immobulus` && state === `intro`) {
    createIntroSpell(tipX, tipY);
  } else if (currentSpell === `Voldemort` && state === `stage1` || currentSpell === `Voldemort` && state === `stage2` ||
    currentSpell === `Voldemort` && state === `stage3` || currentSpell === `Voldemort` && state === `stage4`) {
    if (dementorsSFX.isPlaying()) {
      dementorsSFX.stop();
    }
    teleportspellSFX.play();
    voldemortnameSFX.play();
  } else if (currentSpell === `Wingardium Leviosa` && state === `stage1`) {
    wleviosaSFX.play();
  } else if (currentSpell === `Lumos` && state === `stage2`) {
    lumosSFX.play();
  } else if (currentSpell === `Lumos Maxima` && state === `stage2`) {
    lumosmaximaSFX.play();
  } else if (currentSpell === `Expecto Patronum` && state === `stage3`) {
    expectopatronusSFX.loop();
    dementorsSFX.stop();
  } else if (currentSpell === `Stupify` && state === `stage4`) {
    stupefySFX.play();
    createStupefySpell(tipX, tipY);
  } else if (currentSpell === `Incendio` && state === `stage4`) {
    incendioSFX.play();
    createIncendioSpell(tipX, tipY);
  } else if (currentSpell === `Expelliarmus` && state === `stage4`) {
    expelliarmusSFX.play();
    createExpelliarmusSpell(tipX, tipY);
  } else if (currentSpell === `Confringo` && state === `stage4`) {
    confringoSFX.play();
    createConfringoSpell(tipX, tipY);
  }
}

// function that create introspell each time the player yells Immobulus
function createIntroSpell(x, y) {
  let introspell = new IntroSpell(x, y, introspellImage);
  introspells.push(introspell);
}
// Function that create Stupefy spell each time the player yells Stupify
function createStupefySpell(x, y) {
  let stupefyspell = new StupefySpell(x, y, stupefyspellImage, stupefyspell2Image, stupefyeffectImage);
  stupefyspells.push(stupefyspell);
}
// Function that create Incendio spell each time the player yells Incendio
function createIncendioSpell(x, y) {
  let incendiospell = new IncendioSpell(x, y, incendiospellImage, incendiospell2Image, incendioeffectImage);
  incendiospells.push(incendiospell);
}
// Function that create Expelliarmus spell each time the player yells Expelliarmus
function createExpelliarmusSpell(x, y) {
  let expelliarmusspell = new ExpelliarmusSpell(x, y, expelliarmusspellImage, expelliarmusspell2Image, expelliarmuseffectImage);
  expelliarmusspells.push(expelliarmusspell);
}

// Function that create Confringo spell each time the player yells Confringo
function createConfringoSpell(x, y) {
  let confringospell = new ConfringoSpell(x, y, confringospellImage, confringospell2Image, confringoeffectImage);
  confringospells.push(confringospell);
}
// Function that allow display text to be more efficient
function displayText(string, size, x, y, r, g, b) {
  push();
  fill(r, g, b)
  textAlign(CENTER, CENTER);
  textSize(size);
  text(string, x, y);
  pop();
}
// Keypress function that changes states of the game.
// NOTE** PLAYER MAY ENTER THROUGH STAGES 1 to 3 WITHOUT MEETING ITS CONDITIONS ON PURPOSE FOR THE PURPOSE OF
// NOT HAVING TO REPLAY EVERY STAGE AGAIN TO REACH THE FINAL STAGE.
function keyPressed() {
  // Allow to change state if pressed on appropriate keys!
  if (keyCode === ENTER && state === `menu`) {
    state = `instructions`;
  } else if (keyCode === 83 && state === `instructions`) {
    state = `spellslist`
  } else if (keyCode === 66 && state === `spellslist`) {
    state = `instructions`
  } else if (keyCode === ENTER && state === `instructions`) {
    state = `intro`;
    menuSoundtrack.stop();
    firebgSFX.stop();
    snitchSFX.loop();
    introSoundtrack.loop();
    currentSpell = `Your Spell`;
  } else if (keyCode === ENTER && state === `intro`
    // Condition of passing Introduction state
    // && snitch.frozen ===true
  ) {
    state = `introEnd`;
    currentSpell = ``;
    snitchSFX.stop();

  } else if (keyCode === ENTER && state === `introEnd`) {
    state = `stage1`;
    introSoundtrack.stop();
    stage123Soundtrack.loop();
    warSFX.loop();
    currentSpell = ``;
  } else if (keyCode === ENTER && state === `stage1`
    // Condition of passing stage 1
    // && treetrunk.y <4*height/5
  ) {
    state = `stage1End`;
    currentSpell = ``;
  } else if (keyCode === ENTER && state === `stage1End`) {
    state = `stage2`;
    currentSpell = ``;
  } else if (keyCode === ENTER && state === `stage2`
    // Condition of passing stage 2
    // && lumosmaxcasted === true
  ) {
    state = `stage2End`;
    currentSpell = ``;
  } else if (keyCode === ENTER && state === `stage2End`) {
    state = `stage3`;
    dementorsSFX.play();
    currentSpell = ``;
  }
  // Cheat through stage 3
  else if (keyCode === ENTER && state === `stage3`) {
    state = `stage3End`;
    currentSpell = ``;
    dementorsSFX.stop();
    stage123Soundtrack.stop();
    warSFX.stop();
    expectopatronusSFX.stop();
  } else if (keyCode === ENTER && state === `stage3End`) {
    state = `stage4`;
    currentSpell = ``;
    stage4Soundtrack.loop();
  }
  // Cheat through stage 4
  // else if (keyCode === ENTER && state === `stage4` ){
  //   state = `winEnding`;
  //   currentSpell = ``;
  // }
  else if (keyCode === ENTER && state === `loseEnding` || keyCode === ENTER && state === `dementorEnding` || keyCode === ENTER && state === `VNameEnding`) {
    location.reload();
  }
  // Delete current spell if BACKSPACE is pressed. (Most likely not necessary)
  else if (keyCode === 8) {
    currentSpell = ``;
  }
}
