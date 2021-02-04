"use strict";

//counter
let wincounter = 0;
let losecounter = 0;

//choices for robot to pick from
const choices = [
  "rock",
  "paper",
  "scissors",
];
// responses to user's irregular answer
const cheatresponses = [
  "Stop trying to cheat you lil bastard",
  "You dare cross me, human?",
  "Are you ducking with me?",
  "If you don't stop cheating I am going to crawl out of the sewer grate in your basement",
  "How dare you challenge me, mere mortal?",
  "Don't make me hunt you down over a game of rock paper scissors",
  "Here's ...... someone. much. worse. than Johnny",
  "Respect the rules... or... I'm coming for you...",
];

let robotChoice = ``;
let currentAnswer = ``;
let currentCheatResponse = ``;

let state = 'menu'; // menu, start, win, lose, tie, cheat, wingame, losegame

//image
let robotImage;

function preload() {
  robotImage = loadImage(`assets/images/robot.jpg`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      'Go *choice': playRandom
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}


function draw() {
  background(0);
  if (state === `menu`){
    menu();
    return;
  }

  display()
  counterdisplay();

  if (state === `wingame`){
   wingame();}

  else if (state === `losegame`){
   losegame();
 }

}

function display() {
  textSize(32);
  //                HIDE TEXT BEGINNING

   if (state === `start`) {
    push();
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(50);
    text("you go first...don't fret i won't cheat...",width/2,height/2);
    pop();
    return;
  }
  //                  TIE
  else if (state === `tie`) {
    push();
    textSize(90);
    text('TIE', width / 2, height / 2)
    pop();
    fill(140);
  }
  //                  WON
  else if (state === `win`) {
    push();
    textSize(90);
    text('You Won', width / 2, height / 2);
    pop();
    fill(0, 255, 0);
  }
  //                    LOST
  else if (state === `lose`) {
    push();
    textSize(90);
    text('You Lost', width / 2, height / 2);
    pop();
    fill(255, 0, 0);
  }
  //                    CHEAT
  else if (state === `cheat`) {
    fill(240);
    textSize(26);
    background(165, 21, 3);
    image(robotImage, width / 5 - 50, 0, );
    push();
    textStyle(BOLD);
    textSize(80);
    text('CHEATING DETECTED', 1 * width / 5, height / 2)
    pop();
  }
  if (wincounter >= 2){
    (state =`wingame`)
  }
  else if (losecounter >= 2){
    (state =`losegame`)
  }

  text('Your Pick:', width / 5, height / 3);
  text('Their Pick:', width / 5, 2 * height / 3);
  text(currentAnswer, width / 3, height / 3)
  text(robotChoice, width / 3, 2 * height / 3)
}

function counterdisplay() {
  text('Win:' + wincounter, width / 4, 100);
  text('Loss:' + losecounter, 3 * width / 4, 100);
}

function menu(){
  background(240);
  push();
  textAlign(CENTER,CENTER);
  fill(20);
  textSize(100);
  text('Rock, Paper, Scissors!',width/2,height/2 - 100);
  textSize(60);
  text('Yell "Go Rock, Go Paper or Go Scissors!"',width/2,height/2 );
  text('Click to Begin"',width/2,height/2 + 100);
  pop();
}

function wingame(){
  background(0,150,0);
  annyang.abort();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(80);
  text('You win... for now',width/2,height/2 );
}

function losegame(){
  background (160,0,0);
  annyang.abort();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(60);
  text("Just another human defeated by the likes of machine",width/2,height/2);
}

// FUNCTION ALLOWING ROBOT TO RESPOND TO PLAYER
function playRandom(choice) {

  currentAnswer = choice.toLowerCase();
  console.log(currentAnswer);

  // IF RIGHT ANSWER
  if (currentAnswer === 'rock' || currentAnswer === 'scissors' || currentAnswer === 'paper') {
    // Robot plays
    robotChoice = random(choices);
    responsiveVoice.speak(`go`+robotChoice, "US English Male", {
      pitch: 1,
      rate: 1,
      volume: 1,
    });
    // Check result!
    if (currentAnswer === robotChoice) {
      state = `tie`;
    }
    else if (robotChoice === 'scissors' && currentAnswer === 'rock' ||
      robotChoice === 'rock' && currentAnswer === 'paper' ||
      robotChoice === 'paper' && currentAnswer === 'scissors') {
      wincounter++;
      state = `win`;
    }
    else if (robotChoice === 'rock' && currentAnswer === 'scissors' ||
      robotChoice === 'paper' && currentAnswer === 'rock' ||
      robotChoice === 'scissors' && currentAnswer === 'paper') {
      losecounter++;
      state = `lose`;
    }
  }
  // IF CHEAT
  else {
    state = `cheat`;
    robotChoice = random(cheatresponses);
    responsiveVoice.speak(robotChoice, "UK English Male", {
      pitch: 0.7,
      rate: 0.7,
      volume: 6,
    });
  }

}

function mousePressed() {
  if (state === `menu`) {
    state = `start`;
  }
}
