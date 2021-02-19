"use strict";

let state = `loading`
let video = undefined;
let modelName = `Handpose`;
let handpose = undefined;
let predictions = [];
let bubble = undefined;
let bubblecounter = 0;

let fireSFX;
let waterSFX;
let toxicSFX;
let lightningSFX;
let iceSFX;

function preload(){
    fireSFX = loadSound(`assets/sounds/fire.mp3`);
    waterSFX = loadSound(`assets/sounds/water.mp3`);
    toxicSFX = loadSound(`assets/sounds/toxic.mp3`);
    lightningSFX = loadSound(`assets/sounds/lightning.mp3`);
    iceSFX = loadSound(`assets/sounds/ice.mp3`);

}

function setup() {
  createCanvas(640,480);

// access user's webcam
  video = createCapture(VIDEO);
  video.hide();

// load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function(){
    console.log(`Model loaded.`);
    state = `title`;
  });

// listen for predictions
  handpose.on(`predict`,function(results){
    console.log(results);
    predictions = results;
  });

  // our bubble
  bubble = {
    x:random(width),
    y: height,
    size:0,
    vx:0,
    vy:-6
  }
}

function draw() {
background(0);

  if (state === `loading`){
  loading();
  }
  else if (state === `title`){
  title();
  }
  else if (state === `instructions`){
  instructions();
  }
  else if (state === `gameplay`){
  gameplay();
  }
}
function loading(){
  background (255);

  push();
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT,TOP);
  text(`Loading ${modelName}...`, 20,20);
  pop();
}

function title(){
  background (10,30,130);

  push();
  fill(255);
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Bubble Pop`, width/2,height/2 -50);
    textSize(30);
  text(`Press any key...`, width/2,height/2);
  pop();
}

function instructions(){
  background(255);
  push();
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Instructions`, width/2,height/4);
  pop();
}

function gameplay(){
  if (predictions.length > 0){
    let hand = predictions[0];

    let thumb = hand.annotations.thumb;
    let tip0 = thumb[3];
    let base0 = thumb[0];
    let tip0X = tip0[0];
    let tip0Y = tip0[1];
    let base0X = base0[0];
    let base0Y = base0[1];
    push();
    noFill();
    strokeWeight(3);
    stroke(20,220,50);
    line(base0X, base0Y, tip0X, tip0Y);
    pop();


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
    stroke(220,58,0);
    line(baseX, baseY, tipX, tipY);
    pop();

    // push()
    // noStroke();
    // fill(255,0,0);
    // ellipse(baseX, baseY, 20);
    // pop();

    let middle = hand.annotations.middleFinger;
    let tip2 = middle[3];
    let base2 = middle[0];
    let tip2X = tip2[0];
    let tip2Y = tip2[1];
    let base2X = base2[0];
    let base2Y = base2[1];
    push();
    noFill();
    strokeWeight(3);
    stroke(0,255,255);
    line(base2X, base2Y, tip2X, tip2Y);
    pop();

    let ringFinger = hand.annotations.ringFinger;
    let tip3 = ringFinger[3];
    let base3 = ringFinger[0];
    let tip3X = tip3[0];
    let tip3Y = tip3[1];
    let base3X = base3[0];
    let base3Y = base3[1];
    push();
    noFill();
    strokeWeight(3);
    stroke(0,20,140);
    line(base3X, base3Y, tip3X, tip3Y);
    pop();

    let pinky = hand.annotations.pinky;
    let tip4 = pinky[3];
    let base4 = pinky[0];
    let tip4X = tip4[0];
    let tip4Y = tip4[1];
    let base4X = base4[0];
    let base4Y = base4[1];
    push();
    noFill();
    strokeWeight(3);
    stroke(255);
    line(base4X, base4Y, tip4X, tip4Y);
    pop();

    // check bubble popping
    let d0 = dist(tip0X, tip0Y, bubble.x, bubble.y);
    let d = dist(tipX,tipY, bubble.x, bubble.y);
    let d2 = dist(tip2X, tip2Y, bubble.x, bubble.y);
    let d3 = dist(tip3X, tip3Y, bubble.x, bubble.y);
    let d4 = dist(tip4X, tip4Y, bubble.x, bubble.y);
      if (d < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
      fireSFX.play();
      bubblecounter++;
      }
      else if (d2 < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
      waterSFX.play();
      bubblecounter++;
      }
      else if (d3 < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
      iceSFX.play();
      bubblecounter++;
      }
      else if (d4 < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
      lightningSFX.play();
      bubblecounter++;
      }
      else if (d0 < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
      toxicSFX.play();
      bubblecounter++;
      }
  }
  resetBubble();
  displayBubble();
  displaycounter();
  moveBubble();
}

function displayBubble(){
  push();
  let r = random(0,160);
  let g = random(0,10);
  let b = random(0,160);
  fill(r,g,b);
  noStroke();
  bubble.size = random(50,100);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

function moveBubble(){
    bubble.x += bubble.vx;
    bubble.y += bubble.vy;

      let change = random(0,1);
    if (change < 0.1){
      bubble.vx = random(-5,5)
    }
}

function resetBubble(){
  if (bubble.y + bubble.size/2 < 0 || bubble.x + bubble.size < 0 || bubble.x - bubble.size > width){
    bubble.x = random(width);
    bubble.y = height;
  }
}

function displaycounter(){
  push();
  fill(255);
  textSize(10);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Horcruses destroyed: ${bubblecounter} `, width/2,height/8);

  pop();
}

function keyPressed(){
  if (state === `title`){
    state = `instructions`;
  }
  else if (state === `instructions`){
    state = `gameplay`;
  }
}
