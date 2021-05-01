/**
Project 2 Prototype
Percy (Vinh Tuan Dat Nguyen)

There
author, and this description to match your project!
*/
"use strict";

// Current input for Annyang
let currentInput = ``;

let s1bg;
let dNbg;
let s2bg;
let pObg;
let dN2bg;
let s3bg;
let dN3bg;
let sObg;
let rObg;
// Starting state of program
let state = `loading`; // loading, firstDecision
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's firstDecision
let predictions = [];

// Declare classes
let title;
let firstDecisionBg;
let redbutton;
let cloud;
let phone;
let legs;
let bird;
let poop;
let michael;
let car;
let passerby;
// Decision One: catched variable to identify whether P catched or did not catch the phone
let phoneCaught;
let michaelPushed;
// Help Counter for Achievement
let helpCounter = 0;
// Event counters for each situation
// for Situation 1
let eventCounterS1 = 0;
// for Catch Outcome
let eventCounterCO = 0;
// for Do Nothing 1
let eventCounterDN1 = 0;
// for Situation 2
let eventCounterS2 = 0;
// for Push Outcome
let eventCounterPO = 0;
// for Do Nothing 2
let eventCounterDN2 = 0;
// for Situation 2
let eventCounterS3 = 0;
// for Save Outcome
let eventCounterSO = 0;
// for Do Nothing 2
let eventCounterDN3 = 0;
// for Situation 4
let eventCounterS4 = 0;
// for Report Outcome
let eventCounterRO = 0;
// Check if hand is on the left for 2nd Situation
let handLeft = false;

// Image variables
let introbgImage;
let cloudImage;
let situation1bgImage;
let situation1bg2Image;
let situation1bg3Image;
let situation1bg4Image;
let phoneFallings1bg4Image;
let firstDecisionbgImage;
let brokenphoneImage;
let catchOutcomebgImage;
let doNothing1bgImage;
let doNothing1bg2Image;
let doNothing1bg3Image;
let phoneImage;
let leftlegImage;
let rightlegImage;
let situation2bgImage;
let situation2bg2Image;
let birdS2Image;
let poopImage;
let secondDecisionbgImage;
let sdmichaelImage;
let pushOutcomebgImage;
let pushOutcomebg2Image;
let pushOutcomebg3Image;
let pushOutcomebg4Image;
let pushOutcomebg5Image;
let doNothing2bgImage;
let doNothing2bg2Image;
let doNothing2bg3Image;
let situation3bgHappyImage;
let situation3bgMadImage;
let situation3bg2Image;
let situation3bg3Image;
let decision3bgImage;
let michaelMadD3Image;
let michaelHappyD3Image;
let carImage;
let doNothing3bgImage;
let doNothing3bg2Image;
let saveOutcomebgImage;
let saveOutcomebg2Image;
let saveOutcomebg3Image;
let reportOutcomebgImage;
let passerbyImage;
let passerby2Image;
let strangerPhoneImage;
// Sound variables;
let parkAmbienceSFX;
let robertWmemeSFX;
let menuSFX;
let titleDroppedSFX;
let drumSFX;
let birdChirpingSFX;
let heartbeatSFX;
let dramaticHornSFX;
let carStartupSFX;
let windySFX;
let neonDreamSFX;
let bassBoomSFX;
// Font
let arrFont;
let newspaperCutoutFont;

function preload() {
  // FONT load
  arrFont = loadFont(`assets/fonts/arr.ttf`);
  newspaperCutoutFont = loadFont(`assets/fonts/newspapercutout.ttf`)
  //Image load
  introbgImage = loadImage(`assets/images/introbg.png`);
  cloudImage = loadImage(`assets/images/introclouds.png`);
  situation1bgImage = loadImage('assets/images/situation1bg.jpg');
  situation1bg2Image = loadImage(`assets/images/situation1bg2.jpg`);
  situation1bg3Image = loadImage(`assets/images/situation1bg3.jpg`);
  situation1bg4Image = loadImage(`assets/images/situation1bg4.jpg`);
  phoneFallings1bg4Image = loadImage(`assets/images/phones1bg4.png`);
  firstDecisionbgImage = loadImage(`assets/images/firstdecisionbg.jpg`);
  brokenphoneImage = loadImage(`assets/images/brokenphone.jpg`);
  catchOutcomebgImage = loadImage(`assets/images/catchoutcomebg.jpg`);
  doNothing1bgImage = loadImage(`assets/images/donothing1bg.jpg`);
  doNothing1bg2Image = loadImage(`assets/images/donothing1bg2.jpg`);
  doNothing1bg3Image = loadImage(`assets/images/donothing1bg3.jpg`);
  phoneImage = loadImage(`assets/images/phone.png`);
  leftlegImage = loadImage(`assets/images/leftleg.png`);
  rightlegImage = loadImage(`assets/images/rightleg.png`);
  situation2bgImage = loadImage(`assets/images/situation2bg1.jpg`);
  situation2bg2Image = loadImage(`assets/images/situation2bg2.jpg`);
  birdS2Image = loadImage(`assets/images/birds2.png`);
  poopImage = loadImage(`assets/images/poop.png`);
  secondDecisionbgImage = loadImage(`assets/images/seconddecisionbg.jpg`);
  sdmichaelImage = loadImage(`assets/images/seconddecisionmichael.png`);
  pushOutcomebgImage = loadImage(`assets/images/pushoutcomebg.jpg`);
  pushOutcomebg2Image = loadImage(`assets/images/pushoutcomebg2.jpg`);
  pushOutcomebg3Image = loadImage(`assets/images/pushoutcomebg3.jpg`);
  pushOutcomebg4Image = loadImage(`assets/images/pushoutcomebg4.jpg`);
  pushOutcomebg5Image = loadImage(`assets/images/pushoutcomebg5.jpg`);
  doNothing2bgImage = loadImage(`assets/images/donothing2bg.jpg`);
  doNothing2bg2Image = loadImage(`assets/images/donothing2bg2.jpg`);
  doNothing2bg3Image = loadImage(`assets/images/donothing2bg3.jpg`);
  situation3bgHappyImage = loadImage(`assets/images/situation3bghappy.jpg`);
  situation3bgMadImage = loadImage(`assets/images/situation3bgmad.jpg`);
  situation3bg2Image = loadImage(`assets/images/situation3bg2.jpg`);
  situation3bg3Image = loadImage(`assets/images/situation3bg3.jpg`);
  decision3bgImage = loadImage (`assets/images/decision3bg.jpg`);
  michaelMadD3Image = loadImage (`assets/images/michaelMadD3.png`);
  michaelHappyD3Image = loadImage (`assets/images/michaelHappyD3.png`);
  carImage = loadImage (`assets/images/carD3.png`);
  saveOutcomebgImage = loadImage (`assets/images/saveoutcomebg.jpg`);
  saveOutcomebg2Image = loadImage (`assets/images/saveoutcomebg2.jpg`);
  saveOutcomebg3Image = loadImage (`assets/images/saveoutcomebg3.jpg`);
  doNothing3bgImage = loadImage (`assets/images/donothing3bg.jpg`);
  doNothing3bg2Image = loadImage (`assets/images/donothing3bg2.jpg`);
  reportOutcomebgImage = loadImage(`assets/images/trueendingbg.jpg`)
  passerbyImage = loadImage(`assets/images/stranger.png`);
  passerby2Image = loadImage(`assets/images/strangerwphone.png`);
  strangerPhoneImage = loadImage(`assets/images/strangerphone.png`);


  //load SFX
  menuSFX = loadSound(`assets/sounds/menu.mp3`);
  parkAmbienceSFX = loadSound(`assets/sounds/cityparkambience.mp3`);
  robertWmemeSFX = loadSound (`assets/sounds/directedweide.mp3`);
  titleDroppedSFX = loadSound(`assets/sounds/wooddropped.mp3`);
  drumSFX = loadSound(`assets/sounds/drum.mp3`);
  birdChirpingSFX = loadSound(`assets/sounds/birdchirping.mp3`);
  heartbeatSFX = loadSound(`assets/sounds/heartbeat.mp3`);
  dramaticHornSFX = loadSound(`assets/sounds/dramatichorn.mp3`);
  carStartupSFX = loadSound(`assets/sounds/carstartup.mp3`);
  windySFX = loadSound(`assets/sounds/windy.mp3`);
  neonDreamSFX = loadSound(`assets/sounds/neondream.mp3`);
  bassBoomSFX = loadSound(`assets/sounds/bassboom.mp3`);
}

/**
Setup function to setup Annyang and Handpose!
*/
function setup() {
// Set Canvas small
  createCanvas(640, 480);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(arrFont);

  // Set first background image for situation 1
  s1bg = situation1bgImage;
  // Set first background image for doNothing1Outcome
  dNbg = doNothing1bgImage;
  // Set first background image for doNothing1Outcome
  s2bg = situation2bgImage;
  // Set first background image for PushOutcome
  pObg = pushOutcomebgImage;
  // Set first background image for PushOutcome
  dN2bg = secondDecisionbgImage;
  // Set first background image for PushOutcome
  dN3bg = doNothing3bgImage;
  // Set first background image for SaveOutcome
  sObg = saveOutcomebgImage;
  // Set first background image for reportOutcome
  rObg = reportOutcomebgImage;
  // Declare class
  passerby = new Passerby(passerbyImage, passerby2Image);
  car = new Car(carImage);
  michael = new Michael(sdmichaelImage, michaelMadD3Image,michaelHappyD3Image);
  bird = new Bird(birdS2Image);
  poop = new Poop(poopImage);
  firstDecisionBg = new FirstDecisionBg(firstDecisionbgImage);
  title = new Title;
  redbutton = new RedButton;
  cloud = new Cloud(cloudImage);
  phone = new Phone(phoneImage, phoneFallings1bg4Image,strangerPhoneImage);
  legs = new Legs(leftlegImage,rightlegImage);
  // Setup annyang
  if (annyang) {
    let commands = {
      '*input': userInput
    };
    annyang.addCommands(commands);
    annyang.start();
  }
  // Setup handpose
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to menu state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to menu state once handpose is loaded
    state = `menu`;
    menuSFX.loop();
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Draw function switches case to switch state!
*/
function draw() {
  background(255);
  // Switch case code format from Stephanie Dang
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
    case "firstSituation":
      firstSituation();
      break;
    case "firstDecisionIntro":
      firstDecisionIntro();
      break;
    case "firstDecision":
      firstDecision();
      break;
    case "introduction":
      introduction();
      break;
    case "doNothing1Outcome":
      doNothing1Outcome();
      break;
    case "catchOutcome":
      catchOutcome();
      break;
    case "secondSituation":
      secondSituation();
      break;
    case "secondDecisionIntro":
      secondDecisionIntro();
      break;
    case "secondDecision":
      secondDecision();
      break;
    case "pushOutcome":
      pushOutcome();
      break;
    case "doNothing2Outcome":
      doNothing2Outcome();
      break;
    case "thirdSituation":
      thirdSituation();
      break;
   case "thirdDecisionIntro":
     thirdDecisionIntro();
     break;
   case "thirdDecision":
     thirdDecision();
     break;
    case "saveOutcome":
      saveOutcome();
      break;
    case "fourthDecision":
      fourthDecision();
      break;
   case "reportOutcome":
     reportOutcome();
     break;
    case "loopEnding":
     loopEnding();
     break;
     case "atonedEnding":
      atonedEnding();
      break;
    case "doNothing3Outcome":
      doNothing3Outcome();
      break;
    case "futileEnding":
      futileEnding();
      break;
  }
}
/**
Detect hand and highlights the skeleton of each finger
Code from previous exercises by Pippin Barr.
*/
function highlightHand(hand) {
  push();
  noFill();
  strokeWeight(3);
  stroke(255);
  // Positioning of the thumb tip and base
  let thumb = hand.annotations.thumb;
  let tip = thumb[3];
  let base = thumb[0];
  let tipX = tip[0];
  let tipY = tip[1];
  let baseX = base[0];
  let baseY = base[1];
  line(baseX, baseY, tipX, tipY);
// Positioning of the index's tip and base
  let index = hand.annotations.indexFinger;
  let tip2 = index[3];
  let base2 = index[0];
  let tip2X = tip2[0];
  let tip2Y = tip2[1];
  let base2X = base2[0];
  let base2Y = base2[1];
  line(base2X, base2Y, tip2X, tip2Y);
// Positioning of the middle finger's tip and base
  let middle = hand.annotations.middleFinger;
  let tip3 = middle[3];
  let base3 = middle[0];
  let tip3X = tip3[0];
  let tip3Y = tip3[1];
  let base3X = base3[0];
  let base3Y = base3[1];
  line(base3X, base3Y, tip3X, tip3Y);
// Positioning of the ring finger's tip and base
  let ringFinger = hand.annotations.ringFinger;
  let tip4 = ringFinger[3];
  let base4 = ringFinger[0];
  let tip4X = tip4[0];
  let tip4Y = tip4[1];
  let base4X = base4[0];
  let base4Y = base4[1];
  line(base4X, base4Y, tip4X, tip4Y);
// Positioning of the pinky's tip and base
  let pinky = hand.annotations.pinky;
  let tip5 = pinky[3];
  let base5 = pinky[0];
  let tip5X = tip5[0];
  let tip5Y = tip5[1];
  let base5X = base5[0];
  let base5Y = base5[1];
  line(base5X, base5Y, tip5X, tip5Y);

  // MENU STATE:  Break the sub title if User's index finger is close enough to the area a point near the right side of the subtitle!
  let dm = dist(3 * width / 4, 3 * height / 4, tip2X, tip2Y);
  if (state === `menu` && dm <= 60) {
    title.broken = true;
  }
// INTRODUCTION STATE: If player puts fingertip of index finger on button and says "Let's Go" then play
  let di = dist(redbutton.x, redbutton.y, tip2X, tip2Y);
  if (state === `instructions` && di <= redbutton.size / 2 && currentInput === `Let's go`) {
    redbutton.y = height / 2 + 80;
    state = `introduction`
    parkAmbienceSFX.loop();
    birdChirpingSFX.loop();
    bassBoomSFX.play();
    menuSFX.stop();
  } else if (state === `instructions` && di <= redbutton.size / 2) {
    redbutton.y = height / 2 + 80;
  } else {
    redbutton.y = height / 2 + 70;
  }

  // HELPING CONDITIONS
  // FIRST SITUATION: Trigger catch outcome  if player's tips are near enough to the phone while they yell "I got you"
  let d1 = dist(phone.x, phone.y, tipX, tipY);
  let d2 = dist(phone.x, phone.y, tip2X, tip2Y);
  let d3 = dist(phone.x, phone.y, tip3X, tip3Y);
  let d4 = dist(phone.x, phone.y, tip4X, tip4Y);
  let d5 = dist(phone.x, phone.y, tip5X, tip5Y);
  pop();
  if (d1 <= phone.height / 2 && d2 <= phone.height / 2 && d3 <= phone.height / 2 && d4 <= phone.height / 2 && d5 <= phone.height / 2 &&
    currentInput === `I got you` &&
    state === `firstDecision`) {
    // displayText(`TOUCHED PHONE`, 20, width / 2, 7 * height / 8, 0);
    state = `catchOutcome`;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
    helpCounter += 1;
  }

// SECOND SITUATION: If players put hand on the half left, make handLeft variable true.
  if (tipX <= width/2 &&  tip2X <= width/2 && tip3X <= width/2 && tip4X <= width/2 && tip5X <= width/2 && state === `secondDecision`){
    handLeft = true
  }
// Display further instruction
  if (handLeft === true && state === `secondDecision`){
    displayText(`Now move your hand to the right and yell "Poop from the sky"!`, 27, width/2, 4.3*height / 5 , 70,70,70);
  }
// Trigger pushOutcome state if player puts his fingertips on the right half of the canvas while saying "Poop from the sky"
  if (tipX >= width/2 &&  tip2X >= width/2 && tip3X >= width/2 && tip4X >= width/2 && tip5X >= width/2 && state === `secondDecision` && handLeft === true && currentInput === `Poop from the sky`)  {
    state = `pushOutcome`
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
    helpCounter += 1;
  }
  // THIRD SITUATION: Trigger the saveOutcome state if player's middle finger is at least half the height of the canvas while they say "Not on my watch"
  let dp = dist(base3X, base3Y, tip3X, tip3Y);
  if (dp >= 240 && currentInput === `Not on my watch`&& state === `thirdDecision`){
    state = `saveOutcome`;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
    helpCounter += 1;
  }
}

// User voice shown up top!
function userInput(input) {
  // Code to capitalize first letter from https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
  currentInput = input.replace(/^\w/, (c) => c.toUpperCase());
  console.log(currentInput);

 if (state === `instructions`){
   titleDroppedSFX.play(1);
 }
}

// Function that allows display text to be more efficient
function displayText(string, size, x, y, r, g, b) {
  push();
  fill(r, g, b)
  // Display text Align left and change font for following states
  if (state === `firstSituation`|| state === `catchOutcome`|| state === `doNothing1Outcome` || state === `secondSituation`|| state === `pushOutcome`
  || state === `doNothing2Outcome` || state === `thirdSituation` || state === `doNothing3Outcome` || state === `saveOutcome` || state === `reportOutcome`) {
    textAlign(LEFT);
    textFont(newspaperCutoutFont);
  } else {
    textAlign(CENTER, CENTER);
  }
  textSize(size);
  text(string, x, y);
  pop();
}

// Text box for aesthetic purposes
function textBox() {
  push();
  rectMode(CORNER);
  fill(255,255,255,160);
  rect(5, 4 * height / 5, width - 10, 91);
  pop();
}


// Keypress function to change state and advance eventCounter of different states!
function keyPressed() {
  if (keyCode === ENTER && state === `menu`) {
    state = `instructions`
  } else if (keyCode === ENTER && state === `instructions`) {
    state = `introduction`;
    bassBoomSFX.play();
    parkAmbienceSFX.loop();
    birdChirpingSFX.loop();
    menuSFX.stop();
  } else if (keyCode === ENTER && state === `introduction`) {
    state = `firstSituation`
  } else if (keyCode === ENTER && state === `firstSituation`) {
    eventCounterS1 += 1;
  }  else if (keyCode === ENTER && state === `firstDecisionIntro`) {
    currentInput = ``;
    heartbeatSFX.loop();
    state = `firstDecision`
  } else if (keyCode === ENTER && state === `catchOutcome`) {
    eventCounterCO += 1;
  } else if (keyCode === ENTER && state === `doNothing1Outcome` && eventCounterDN1 >=2) {
    eventCounterDN1 += 1;
  } else if (keyCode === ENTER && state === `secondSituation`
    // && eventCounterS2 != 4
  ) {eventCounterS2 += 1;
  } else if (keyCode === ENTER && state === `secondDecisionIntro`) {
      currentInput =``;
      heartbeatSFX.loop();
    state = `secondDecision`;
  }  else if (keyCode === ENTER && state === `pushOutcome`)
    {eventCounterPO +=1;
  }  else if (keyCode === ENTER && state === `doNothing2Outcome`
    // && eventCounterDN2 >=1
  )
    {eventCounterDN2 +=1;
  } else if (keyCode === ENTER && state === `thirdSituation`){
    eventCounterS3 +=1;
  } else if (keyCode === ENTER && state === `thirdDecisionIntro`){
    currentInput =``;
    heartbeatSFX.loop();
    state = `thirdDecision`;
  } else if (keyCode === ENTER && state === `saveOutcome`){
    eventCounterSO += 1;
  } else if (keyCode === ENTER && state === `reportOutcome`){
    eventCounterRO += 1;
  } else if (keyCode === 65 && state === `fourthDecision`){
    state = `reportOutcome`
    helpCounter += 1;
  } else if (keyCode === 66 && state === `fourthDecision`){
    state = `atonedEnding`;
    robertWmemeSFX.loop();
    parkAmbienceSFX.stop();
    birdChirpingSFX.stop();
  } else if (keyCode === ENTER && state === `doNothing3Outcome`){
    eventCounterDN3 +=1;
  }

// Shortcut for each Decisions. A for HELP and B for Do Nothing
    else if (keyCode === 65 && state === `firstDecision`){
    state = `catchOutcome`
    helpCounter += 1;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }  else if (keyCode === 66 && state === `firstDecision`){
    state = `doNothing1Outcome`;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }  else if (keyCode === 65 && state === `secondDecision`){
    state = `pushOutcome`
    helpCounter += 1;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }  else if (keyCode === 66 && state === `secondDecision`){
    state = `doNothing2Outcome`;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }  else if (keyCode === 65 && state === `thirdDecision`){
    state = `saveOutcome`;
    helpCounter += 1;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }  else if (keyCode === 66 && state === `thirdDecision`){
    state = `doNothing3Outcome`;
    heartbeatSFX.stop();
    parkAmbienceSFX.play();
    birdChirpingSFX.play();
  }
}
