/**
Project 2 Prototype
Percy (Vinh Tuan Dat Nguyen)

There
author, and this description to match your project!
*/
"use strict";

// Current input for Annyang
let currentInput = ``;

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
let redbutton;
let cloud;
let phone;
// Decision One: catched variable to identify whether P catched or did not catch the phone
let catched;

// Image variables
let introbgImage;
let cloudImage;
let situation1bgImage;

// Font
let arrFont;

function preload() {
  // FONT load
  arrFont = loadFont(`assets/fonts/arr.ttf`)
  //Image load
  introbgImage = loadImage(`assets/images/introbg.png`);
  cloudImage = loadImage(`assets/images/introclouds.png`);
  situation1bgImage = loadImage('assets/images/situation1bg.jpg');


}

/**
Setup function to setup Annyang and Handpose!
*/
function setup() {
  createCanvas(640,480);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(arrFont);
  // Declare class
  title = new Title;
  redbutton = new RedButton;
  cloud = new Cloud(cloudImage);
  phone = new Phone;

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
   // Switch to the firstDecision state
   state = `menu`;
 });

 // Listen for prediction events from Handpose and store the results in our
 // predictions array when they occur
 handpose.on(`predict`, function(results) {
   predictions = results;
 });
}

/**
Description of draw()
*/
function draw() {
background(255);
// Switch case from Stephanie
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
     case "firstDecision":
       firstDecision();
       break;
     case "introduction":
        introduction();
        break;
     case "doNothingOutcome":
       doNothingOutcome();
       break;
     case "catchOutcome":
       catchOutcome();
       break;
     case "secondSituation":
       secondSituation();
       break;

  }
}
/**
Provided with a detected hand it highlights the skeleton of each finger
*/
function highlightHand(hand){
   push();
   noFill();
   strokeWeight(3);
   stroke(225,220,177);
  // Display a circle at the tip of the index finger
  let thumb = hand.annotations.thumb;
     let tip = thumb[3];
     let base = thumb[0];
     let tipX = tip[0];
     let tipY = tip[1];
     let baseX = base[0];
     let baseY = base[1];
     line(baseX, baseY, tipX, tipY);

     let index = hand.annotations.indexFinger;
     let tip2 = index[3];
     let base2 = index[0];
     let tip2X = tip2[0];
     let tip2Y = tip2[1];
     let base2X = base2[0];
     let base2Y = base2[1];
     line(base2X, base2Y, tip2X, tip2Y);

     let middle = hand.annotations.middleFinger;
     let tip3 = middle[3];
     let base3 = middle[0];
     let tip3X = tip3[0];
     let tip3Y = tip3[1];
     let base3X = base3[0];
     let base3Y = base3[1];
     line(base3X, base3Y, tip3X, tip3Y);

     let ringFinger = hand.annotations.ringFinger;
     let tip4 = ringFinger[3];
     let base4 = ringFinger[0];
     let tip4X = tip4[0];
     let tip4Y = tip4[1];
     let base4X = base4[0];
     let base4Y = base4[1];
     line(base4X, base4Y, tip4X, tip4Y);

     let pinky = hand.annotations.pinky;
     let tip5 = pinky[3];
     let base5 = pinky[0];
     let tip5X = tip5[0];
     let tip5Y = tip5[1];
     let base5X = base5[0];
     let base5Y = base5[1];
     line(base5X, base5Y, tip5X, tip5Y);

// Break the sub title if User's index finger is close enough to it!
      let dm = dist(3*width/4, 3*height/4, tip2X, tip2Y);
      if (state === `menu`&& dm <= 60){
        title.broken = true;
      }

      let di = dist(redbutton.x, redbutton.y, tip2X, tip2Y);
      if (state === `instructions` && di <= redbutton.size/2 && currentInput === `Let's go`){
        redbutton.y = height/2 + 60;
        state = `introduction`
      }
      else if (state === `instructions` && di <= redbutton.size/2 ){
        redbutton.y = height/2 +60;
      }
      else{
        redbutton.y = height/2 +50;
      }

    // Trigger phone Pushed Ending if player's middle finger is at least half the height while they laugh haha
      // let d = dist(base3X, base3Y, tip3X, tip3Y);
      // if (d >= 240 && currentInput === `Haha`){
      //   state = `phonePushedEnding`;
      // }

      // Trigger phone Smack Ending if player's tips are close enough to the phone while they yell I got you
      let d1 = dist(phone.x, phone.y,tipX,tipY);
      let d2 = dist(phone.x, phone.y,tip2X,tip2Y);
      let d3 = dist(phone.x, phone.y,tip3X,tip3Y);
      let d4 = dist(phone.x, phone.y,tip4X,tip4Y);
      let d5 = dist(phone.x, phone.y,tip5X,tip5Y);
      pop();
      if (d1 <= phone.height/2 && d2 <= phone.height/2 && d3 <= phone.height/2 && d4 <= phone.height/2 && d5 <= phone.height/2
         &&  currentInput === `I got you`
          && state === `firstDecision`){
        displayText(`TOUCHED PHONE`, 20, width / 2, 7*height / 8,0);
        // state = `catchOutcome`;
      }
}

// User voice shown up top!
function userInput(input) {
// Code to capitalize first letter from https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
  currentInput = input.replace(/^\w/, (c) => c.toUpperCase());
  console.log(currentInput);
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

// Keypress function to change state
function keyPressed(){
  if (keyCode === ENTER && state ===`menu`){
    state = `instructions`
  }
  else if (keyCode === ENTER && state ===`instructions`){
    state = `introduction`
  }
  else if (keyCode === ENTER && state ===`introduction`){
    state = `firstSituation`
  }
  else if (keyCode === ENTER && state ===`firstSituation`){
    state = `firstDecision`
  }
  else if (keyCode === ENTER && state ===`catchOutcome`){
    state = `secondSituation`
  }
  else if (keyCode === ENTER && state ===`doNothingOutcome`){
    state = `secondSituation`
  }
}
