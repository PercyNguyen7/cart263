// STATES
//  loading
function loading(){
  background(40);
  displayText(`To help or not to help... That is the question`, 30, width / 2, height / 6, 255);
}
function menu(){
  background(70,0,0);
  displayText(`GIBE`, 80, width / 2, height / 2, 255);
}

function instructions(){
  background(0,0,70);
  displayText(`Instructions`, 40, width / 2, height / 6, 255);
  displayText(`Put your index finger at the red button`, 25, width / 2, height / 4, 255);
  displayText(`And say "Let's Go!" `, 25, width / 2, height / 3, 255);

  //Display Start Button
  redbutton.display();

  displayText(currentInput, 30, width / 2, 7*height / 8,0);
  // Check if there are currently any predictions to display
  if (predictions.length > 0) {
    // Get the hand predicted
    let hand = predictions[0];
    // Show fingers coordinates
    highlightHand(hand);
  }
}
function introduction(){
  image(introbgImage,width/2,height/2,640,480);
  displayText(`"Enough of the black screens`, 30, width / 2, height / 5, 255);
  displayText(`Time to get out and take a breath of the wild"`, 35, width / 2, height / 3.5, 255);
  // Display and move the clouds
  cloud.display();
  cloud.move();
}
function firstSituation(){
  image(situation1bgImage,width/2,height/2, 640,480);
  displayText(`First Situation`, 50, width / 2, height / 2, 255);
}
// States functions
//Displays the webcam. If there is a hand it outlines it and highlights the tip of the index finger
function firstDecision() {
  background(120,0,0);

  // Display and move phone down
  phone.display();
  phone.move();

  displayText(currentInput, 30, width / 2, height / 8,0);
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
      displayText(`Your friend does not seem happy.`, 20, width / 2, height / 2 + 100, 255)
    }
    else if (catched === false){
      displayText(`he happi`, 20, width / 2, height / 2 + 100, 255)
    }
  }
  function secondDecision() {
    background(120,0,0);
    // Display and move poop
    displayText(currentInput, 20, width / 2, height / 8,0);
    // Check if there are currently any predictions to display
    if (predictions.length > 0) {
      // Get the hand predicted
      let hand = predictions[0];
      // Show fingers coordinates
      highlightHand(hand);
    }
  }
// Achieved by laughing Haha while having the size of your middle finger (sounds wrong) be bigger than half the height
  function phonePushedEnding(){
    background(20);
    displayText(`You pushed it away...`, 15, width / 2, height/2,255);
  }
