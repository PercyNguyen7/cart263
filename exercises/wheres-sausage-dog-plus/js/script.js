"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let state = `title`;

let r = 3.0;
let barkSFX;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++){
    let animalImage = loadImage(`assets/images/animal${i}.png`)
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i <NUM_ANIMALS; i++){
    let x = random(0,width);
    let y = random(0,height);
    let animalImage = random(animalImages);
    let animal = new Animal (x,y,animalImage);
    animals.push(animal);
  }

  let x = random(0,width);
  let y = random(0,height);
  sausageDog = new SausageDog(x,y, sausageDogImage);
}

function draw() {
  background (60,170,240);

  if (state === `title`) {
    title();
  }
  if (state === `gameplay`) {
   gameplay();
  }
  if (state === `end`) {
  end();
  }
}
function title(){
  background(0,19,36);

    push();
    noStroke();
    fill(220, 212, 69);
    textAlign(CENTER, CENTER);
    textSize(100);
    text(`Sausage Dog`, width / 2, height/2 -50);
    textSize(50);
    text(`Find and click Doggo`, width / 2, height/2 +50);
    textSize(30);
    text(`Press Space to begin`, width / 2, height/2 +150);
    pop();
}

function gameplay(){
  for (let i =0; i <animals.length; i++){
    animals[i].update();
  }

  sausageDog.update();

  sausageDog.bounce();
}

function mousePressed(){
  sausageDog.mousePressed();
}

function end(){
  background(0,19,36);

    push();
    noStroke();
    fill(220, 212, 69);
    translate(width / 2, height / 2);
    rotate(r / 20);
    r+=50;
    textSize(100);
    text(`Helicopter Dog`, 0,0);
    textSize(40);
    text(`Press Space to reload the page`, 0,100);

    pop();
}


function keyPressed(){
  if (state ===`title` && keyCode == 32){
     state = `gameplay`;
   }
  if (state ===`end` && keyCode == 32){
      location.reload();
    }
}
