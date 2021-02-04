"use strict";

const choices = [
  "rock",
  "paper",
  "scissors",
    ];
const cheatresponses = [
  "Stop trying to cheat you lil bastard",
  "You dare...cross me?",
  "Are you ducking with me?",
  "If you don't stop cheating I am going to crawl out of the sewer grate in your basement"
];

let currentChoice = ``;
let currentAnswer = ``;
let currentCheatResponse = ``;

function setup() {
  createCanvas(windowWidth,windowHeight);

  if (annyang) {
    let commands = {
      'Go *choice':playRandom
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}


function draw() {
  background(0);
  display();
}

function display(){

  if (currentChoice === currentAnswer){
    text('TIE', width/2,height/2)
    fill(140);
  }
  else if (currentChoice === 'scissors' && currentAnswer === 'rock'
      || currentChoice === 'rock' && currentAnswer === 'paper'
      || currentChoice === 'paper' && currentAnswer === 'scissors'){

    text('You Won', width/2,height/2)
    fill(0,255,0);
  }
  else if (currentChoice === 'rock' && currentAnswer ==='scissors'
  || currentChoice === 'paper' && currentAnswer === 'rock'
  || currentChoice === 'scissors' && currentAnswer === 'paper') {
    text('You Lost', width/2,height/2)
    fill(255,0,0);

  }
  else {
    text(currentCheatResponse, width/2,height/2)
    text('Your Pick:', width/4, height/3);
    text('Their Pick:', width/4, 2*height/3);
    fill(0,0,255);
  }
  text('Your Pick:', width/4, height/3);
  text('Their Pick:', width/4, 2*height/3);
  text(currentAnswer,width/2,height/3)
  text(currentChoice, width/2,2*height/3)

}
function playRandom(choice) {
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
  currentAnswer = choice.toLowerCase();
  console.log(currentAnswer);



  if (currentAnswer === 'rock' || currentAnswer ==='scissors' || currentAnswer === 'paper'){
    currentChoice = random(choices);
  responsiveVoice.speak(currentChoice,"US English Male",{
    pitch:1,
    rate:1,
    volume:1,
  });
  }

  else {
  currentChoice =random(cheatresponses);
  responsiveVoice.speak(currentChoice, "UK English Male",{
    pitch:0.7,
    rate:0.5,
    volume:3,
  });
  }

}
