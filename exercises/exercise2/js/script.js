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

let currentChoice = ``;
let currentAnswer = ``;
let currentCheatResponse = ``;

//image
let robotImage;

function preload(){
  robotImage = loadImage(`assets/images/robot.jpg`)
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  if (annyang) {
    let commands = {
      'Go *choice':playRandom,display
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}


function draw() {
  background(0);

 display()
  counterdisplay();
}

function display(){
  textSize(32);
  //                HIDE TEXT BEGINNING
  if (currentChoice ===``){
    fill(0);
  }
  //                  TIE
  else if (currentChoice === currentAnswer){
    push();
    textSize(90);
    text('TIE', width/2,height/2)
    pop();
    fill(140);
  }
  //                  WON
  else if (currentChoice === 'scissors' && currentAnswer === 'rock'
      || currentChoice === 'rock' && currentAnswer === 'paper'
      || currentChoice === 'paper' && currentAnswer === 'scissors'){
    wincounter ++ ;

    push();
    textSize(90);
    text('You Won', width/2,height/2);
    pop();
    fill(0,255,0);
  }
  //                    LOST
  else if (currentChoice === 'rock' && currentAnswer ==='scissors'
  || currentChoice === 'paper' && currentAnswer === 'rock'
  || currentChoice === 'scissors' && currentAnswer === 'paper') {
    losecounter ++ ;
    push();
    textSize(90);
    text('You Lost', width/2,height/2);
    pop();
    fill(255,0,0);
  }
  //                    CHEAT
  else {
    fill(240);
    textSize(26);
    background(165,21,3);
    image(robotImage,width/5 - 50,0,);
    push();
    textStyle(BOLD);
    textSize(80);
    text('CHEATING DETECTED.', 1*width/5,height/2)
    pop();
  }

  text('Your Pick:', width/5, height/3);
  text('Their Pick:', width/5, 2*height/3);
  text(currentAnswer,width/3,height/3)
  text(currentChoice, width/3,2*height/3)
}

function counterdisplay(){
  text('Win:' + wincounter,width/4,100);
  text('Loss:' + losecounter,3*width/4,100);
}

function playRandom(choice) {

  currentAnswer = choice.toLowerCase();
  console.log(currentAnswer);

  // IF RIGHT ANSWER
  if (currentAnswer === 'rock' || currentAnswer ==='scissors' || currentAnswer === 'paper'){
    currentChoice = random(choices);
  responsiveVoice.speak(currentChoice,"US English Male",{
    pitch:1,
    rate:1,
    volume:1,
  });
  }
  // IF CHEAT
  else {
  currentChoice =random(cheatresponses);
  responsiveVoice.speak(currentChoice, "UK English Male",{
    pitch:0.7,
    rate:0.7,
    volume:6,
  });
  }

}
