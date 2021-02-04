"use strict";

const choices = [
  "rock",
  "paper",
  "scissors",
    ];

let currentChoice = ``;
let currentAnswer = ``;

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

  if (currentChoice === currentAnswer){
    fill(120);
  }
  else if (currentChoice === 'scissors' && currentAnswer === 'rock'
      || currentChoice === 'rock' && currentAnswer === 'paper'
      || currentChoice === 'paper' && currentAnswer === 'scissors'){
    fill(0,255,0);
  }
  else{
    fill(255,0,0);
  }
  text(currentAnswer, width/2,height/2);
}


function playRandom(choice) {
  currentAnswer = choice.toLowerCase();
  console.log(currentAnswer);

  currentChoice = random(choices);
  responsiveVoice.speak(currentChoice);

  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
}
