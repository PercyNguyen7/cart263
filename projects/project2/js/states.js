// STATES
//  loading
function loading(){
  background(40);
  displayText(`To help or not to help... That is the question`, 20, width / 2, height / 8, 255);
}
function menu(){
  background(70,0,0);
  displayText(`GIBE`, 20, width / 2, height / 2, 255);
}

function instructions(){
  background(0,0,70);
  displayText(`Instructions`, 20, width / 2, height / 2, 255);
}
function introduction(){
  background(0,0,70);
  displayText(`Introduction`, 20, width / 2, height / 2, 255);
}
function firstSituation(){
  background(0,0,40);
  displayText(`First Situation`, 20, width / 2, height / 2, 255);
}
// States functions
//Displays the webcam. If there is a hand it outlines it and highlights the tip of the index finger
function firstDecision() {
  // Display the webcam with reversed image
  let flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);
  background(120,0,0);

  // Display and move phone down
  phone.display();
  phone.move();

  displayText(currentInput, 20, width / 2, height / 8,0);
  // Check if there are currently any predictions to display
  if (predictions.length > 0) {
    // Get the hand predicted
    let hand = predictions[0];
    // Show fingers coordinates
    highlightHand(hand);
  }
}

// ENDINGS
// Letting the phone falls.
  function doNothingOutcome(){
    background(30);
    displayText(`Phone FELL`, 20, width / 2, height / 2,0);
    catched = false;
  }
// Achieved by saying I Got You while having all 5 fingers on the phonee
  function catchOutcome(){
    background(20,200,120);
    displayText(`You almost caught it... only to SMACK it down to the ground, breaking it apart.`, 15, width / 2, height/2,255);
    catched = true;
  }

  function secondSituation(){
    background(0,0,40);
    displayText(`Second Situation`, 20, width / 2, height / 2, 255)
    if (catched === true){
      displayText(`he angy`, 20, width / 2, height / 2 + 100, 255)
    }
    else if (catched === false){
      displayText(`he happi`, 20, width / 2, height / 2 + 100, 255)
    }
  }
// Achieved by laughing Haha while having the size of your middle finger (sounds wrong) be bigger than half the height
  function phonePushedEnding(){
    background(20);
    displayText(`You pushed it away...`, 15, width / 2, height/2,255);
  }
