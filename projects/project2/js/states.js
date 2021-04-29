// STATES
//  loading
function loading(){
  background(40);
  displayText(`"To help or not to help... `, 30, 2*width / 5, height / 6, 255);
  displayText(`That is the question"`, 30, 2*width / 3, height / 4, 255);
  displayText(`"Don't fix-it felix!"`, 30, 2*width / 3, 3*height / 4, 255);
}
// Menu state. Player may attempt to fix the sub title "The Extremely Silly Game" just to break it.
function menu(){
  background(70,0,0);
  displayText(`GIBE`, 120, width / 2, height / 2 - 40, 255);
  displayText(`Enter to Play`, 40, width/2,height/2 + 150, 255);

//Display and move sub title "The Extremely Silly Game" down.
  title.display();
  title.move();
// If title is down far enough, replace it with new sub-title
  if (title.y + 30 >= height*2){
  displayText(`Good Intention, Bad Execution`, 55, width/2, height/2 + 50, 255);
  }
  // Check if there are currently any predictions to display
  if (predictions.length > 0) {
    // Get the hand predicted
    let hand = predictions[0];
    // Show fingers coordinates
    highlightHand(hand);
  }
}

function instructions(){
  background(0,0,70);
  displayText(`Instructions`, 70, width / 2, height / 6, 255);
  displayText(`Enter to Proceed with the story`, 25, width/2, height/3.6, 255);
  displayText(`To Begin, put your index finger on the red button`, 25, width / 2, height / 2.8, 255);
  displayText(`And say "Let's Go!" `, 25, width / 2, height / 2.3, 255);

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
// Introduction state
function introduction(){
  image(introbgImage,width/2,height/2,640,480);
  displayText(`"Enough of the black screens`, 30, width / 2, height / 5, 255);
  displayText(`Time to get out and take a breath of the wild"`, 35, width / 2, height / 3.5, 255);
  // Display and move the clouds
  cloud.display();
  cloud.move();
}
// First situation  state
function firstSituation(){
  image(s1bg,width/2,height/2, 640,480);
  textBox();
  push();
  textFont(newspaperCutoutFont);
  if (eventCounterS1 === 0){
  displayText(`...`, 25, 20, 4.3*height /5,70,70,70);
  }
  else if (eventCounterS1 === 1){
  displayText(`Sure feels nice outside`, 25, 20, 4.3*height /5, 70,70,70);
  }
  else if (eventCounterS1 === 2){
  s1bg = situation1bg2Image;
  }
  else if (eventCounterS1 === 3){
  displayText(`Oh hold up...That guy must be...`,25, 20, 4.3*height /5,70,70,70);
  }
  else if (eventCounterS1 === 4){
  s1bg = situation1bg3Image;
  displayText(`! `, 25, 20, 4.3*height /5, 70);
  }
  else if (eventCounterS1 === 5){
  displayText(`It's your best friend Michael from highschool!`, 25, 20, 4.3*height /5, 70,70,70);
  displayText(`Sporty. Class clown... that's about it.`, 25, 20, 4.7*height /5, 70,70,70);
  }
  else if (eventCounterS1 === 6){
  displayText(`You two trade a few words.`, 25, 20, 4.3*height /5, 70,70,70);
  }
  else if (eventCounterS1 === 7){
  s1bg = situation1bg4Image;
  displayText(`Until... ALl HELLS BROKE LOOSE`, 55, 20, 4.3*height /5, 70,70,70);
  }
  else if (eventCounterS1 >= 8){
  state = `firstDecisionIntro`
  }
  pop();
}
function firstDecisionIntro(){
  background(157,52,174);
  push();
  displayText(`Will you CATCH IT or LET IT DROP?`, 50 , width/2, height /2 - 75, 255);
  textFont(newspaperCutoutFont);
  displayText(`To catch, put your fingertips on the phone and yell "I GOT YOU!"`, 30 , width/2, height /2, 184,188,230);
  displayText(`To let it drop... you... let it drop."`, 30 , width/2, height / 2+50, 184,188,230);
  pop();
}
// States functions
//Displays the webcam. If there is a hand it outlines it and highlights the tip of the index finger
function firstDecision() {
  firstDecisionBg.display();
  firstDecisionBg.move();
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
  function doNothing1Outcome(){
    phonecaught = false;
    push();
    textFont(newspaperCutoutFont);
    if (eventCounterDN1 === 0){
      image(doNothing1bgImage,width/2,height/2,640,480);
      legs.display();
      legs.move(phone);
      phone.display2();
      phone.move2();
    }
    else if(eventCounterDN1 === 1){
      image(doNothing1bg2Image,width/2,height/2,640,480);
      phone.display2();
      phone.move2();
    }
    else if(eventCounterDN1 === 2){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`!`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 3){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`He... just juggled with his left foot`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 4){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`He... just juggled with his left foot`, 25, 20, 4.3*height /5, 70,70,70);
      displayText(`Oh right... he's a sporty bastard! `, 25, 20, 4.7*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 5){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`You couldn't help but wonder what if you tried to catch it`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 6){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`You couldn't help but wonder what if you tried to catch it`, 25, 20, 4.3*height /5, 70,70,70);
      displayText(`Oh well! At least all is good!`, 25, 20, 4.7*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 7){
      image(doNothing1bg3Image,width/2,height/2,640,480);
      textBox();
      displayText(`You feel your friendship strengthens`, 25, 20, 4.3*height /5, 70,70,70);
      textStyle(BOLD);
      displayText(`Friendship + 1`, 30, 20, 4.7*height /5, 70,70,70);
    }
    else if(eventCounterDN1 >= 8){
    state = `secondSituation`;
    }
    pop();
  }
// Achieved by saying I Got You while having all 5 fingers on the phonee
  function catchOutcome(){
    background(0);
    textBox();
    phonecaught = true;
    if (eventCounterCO === 0){
    displayText(`... `, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterCO === 1){
    displayText(`You almost caught it ...`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterCO === 2){
    displayText(`You almost caught it ... only to SMACK it to the ground, breaking it apart.`, 25, 20, 4.3*height /5,180,0,0);
    }
    else if (eventCounterCO === 3){
    image(brokenphoneImage,width/2,height/2,640,480);
    }
    else if (eventCounterCO === 4){
    image(catchOutcomebgImage,width/2,height/2,640,480);
    }
    else if (eventCounterCO === 5){
    image(catchOutcomebgImage,width/2,height/2,640,480);
    textBox();
    displayText(`Michael assures you that it is fine. At least you tried.`, 25, 20, 4.3*height /5,70,70,70);
    }
    else if (eventCounterCO === 6){
    image(catchOutcomebgImage,width/2,height/2 + 400,1920,1440);
    textBox();
    displayText(`Michael assures you that it's fine. At least you tried.`, 25, 20, 4.3*height /5,70,70,70);
    displayText(`It was an honest mistake...`, 25, 20, 4.7*height /5,70,70,70);
    }
    else if (eventCounterCO === 7){
    textBox();
    displayText(`...`, 25, 20, 4.3*height /5,160,0,0);
    }
    else if (eventCounterCO === 8){
    textBox();
    displayText(`You feel your guilt crawling on your back...`, 25, 20, 4.3*height /5,160,0,0);
    }
    else if (eventCounterCO >= 9){
    state = `secondSituation`
    }
   }
  function secondSituation(){
    background(0,0,40);
    textBox();
    if (phonecaught === true){
      displayText(`Your friend does not seem happy.`, 20, width / 2, height / 2 + 100, 255)
    }
    else if (phonecaught === false){
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
