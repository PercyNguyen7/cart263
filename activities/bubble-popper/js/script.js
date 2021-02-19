"use strict";

let state = `loading`
let video = undefined;
let modelName = `Portal to Hogwarts`;
let handpose = undefined;
let predictions = [];
let servant = undefined;
let servantcounter = 0;

let fireSFX;
let waterSFX;
let toxicSFX;
let lightningSFX;
let iceSFX;
let killspellSFX;

let menuImage;
let bgImage;
let himGif;

function preload(){
    bgImage = loadImage(`assets/images/bg.jpg`);
    himGif = loadImage(`assets/images/him.gif`)
    menuImage =loadImage(`assets/images/forest.png`)

    fireSFX = loadSound(`assets/sounds/fire.mp3`);
    waterSFX = loadSound(`assets/sounds/water.mp3`);
    toxicSFX = loadSound(`assets/sounds/toxic.mp3`);
    lightningSFX = loadSound(`assets/sounds/lightning.mp3`);
    iceSFX = loadSound(`assets/sounds/ice.mp3`);
    killspellSFX = loadSound(`assets/sounds/killspell.mp3`)
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

  // our servant
  servant = {
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
  else if (state === `ending`){
  ending();
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
  imageMode(CENTER);
  image(menuImage,width/2,height/2)



  push();
  fill(230);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(`Fend off the Death Eaters`, width/2,height/2 -20);
  textSize(20);
  text(`Press any key...`, width/2,height/2 +20);
  pop();
}

function instructions(){
  background(255);
  push();
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`Instructions`, width/2,height/4);
  textSize(20);
  text(`Cast spell by raising your hand`, width/2,height/2-25);
  text(`Spell casted when fingertip connects to a Death Eater`, width/2,height/2+25);
  pop();
}

function gameplay(){
  image(bgImage,width/2,height/2);
  imageMode(CENTER)

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

    // check servant popping
    let d0 = dist(tip0X, tip0Y, servant.x, servant.y);
    let d = dist(tipX,tipY, servant.x, servant.y);
    let d2 = dist(tip2X, tip2Y, servant.x, servant.y);
    let d3 = dist(tip3X, tip3Y, servant.x, servant.y);
    let d4 = dist(tip4X, tip4Y, servant.x, servant.y);
      if (d < servant.size /2){
      servant.x = random(width);
      servant.y = height;
      fireSFX.play();
      servantcounter++;

      push()
      noStroke();
      fill(255);
      ellipse(tipX, tipY, 30);
      pop();
      }
      else if (d2 < servant.size /2){
      servant.x = random(width);
      servant.y = height;
      iceSFX.play();
      servantcounter++;

      push()
      noStroke();
      fill(255);
      ellipse(tip2X, tip2Y, 30);
      pop();
      }
      else if (d3 < servant.size /2){
      servant.x = random(width);
      servant.y = height;
      waterSFX.play();
      servantcounter++;
      push()
      noStroke();
      fill(255);
      ellipse(tip3X, tip3Y, 30);
      pop();
      }
      else if (d4 < servant.size /2){
      servant.x = random(width);
      servant.y = height;
      lightningSFX.play();
      servantcounter++;
      push()
      noStroke();
      fill(255);
      ellipse(tip4X, tip4Y, 30);
      pop();
      }
      else if (d0 < servant.size /2){
      servant.x = random(width);
      servant.y = height;
      toxicSFX.play();
      servantcounter++;
      push()
      noStroke();
      fill(255);
      ellipse(tip0X, tip0Y, 30);
      pop();
      }
  }
  resetservant();
  displayservant();
  moveservant();

  displaycounter();
  endingtrigger();

}
function ending(){
  background(0);
  imageMode(CENTER);
  image(himGif,width/2,height/2,600,245);
  push();
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`You Angered Lord Voldemort...`, width/2,7*height/8);
  pop();

}




function displayservant(){
  push();
  let r = random(0,160);
  let g = random(0,10);
  let b = random(0,160);
  fill(r,g,b);
  noStroke();
  servant.size = random(100,150);
  ellipse(servant.x, servant.y, servant.size);
  pop();
}

function moveservant(){
    servant.x += servant.vx;
    servant.y += servant.vy;

      let change = random(0,1);
    if (change < 0.1){
      servant.vx = random(-7,7)
    }
}

function resetservant(){
  if (servant.y + servant.size/2 < 0 || servant.x + servant.size < 0 || servant.x - servant.size > width){
    servant.x = random(width);
    servant.y = height;
  }
}

function displaycounter(){
  push();
  fill(255);
  textSize(20);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Death Eater killed: ${servantcounter} `, width/2, height/10);
  pop();
}

function endingtrigger(){
  if(servantcounter >= 12){
    state = `ending`
    killspellSFX.play();
  }
}

function keyPressed(){
  if (state === `title`){
    state = `instructions`;
  }
  else if (state === `instructions`){
    state = `gameplay`;
  }
}
