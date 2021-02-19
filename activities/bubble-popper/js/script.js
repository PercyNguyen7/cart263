"use strict";

let state = `loading`

let video = undefined;

let modelName = `Handpose`;

let handpose = undefined;

let predictions = [];

let bubble = undefined;



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
    size:100,
    vx:random(-2,2),
    vy:-10
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
  text(``)

  pop();
}

function gameplay(){
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
    stroke(255,255,255);
    line(baseX, baseY, tipX, tipY);
    pop();

    push()
    noStroke();
    fill(255,0,0);
    ellipse(baseX, baseY, 20);
    pop();

    // check bubble popping
    let d = dist(tipX,tipY, bubble.x, bubble.y);
    if (d < bubble.size /2){
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y + bubble.size/2 < 0 || bubble.x + bubble.size < 0 || bubble.x - bubble.size > width){
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0,100,200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
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
