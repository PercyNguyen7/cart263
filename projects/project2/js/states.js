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
  displayText(`! `, 25, 20, 4.3*height /5, 70,70,70);
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
  phone.display3();
  phone.move3();
  }
  else if (eventCounterS1 >= 8){
  state = `firstDecisionIntro`;
  dramaticHornSFX.play();
  parkAmbienceSFX.pause();
  birdChirpingSFX.pause();
  }
  pop();
}
// Intro of first Decision
function firstDecisionIntro(){
  background(255);
  push();
  displayText(`Will you CATCH IT or LET IT DROP?`, 50 , width/2, height /2 - 75, 70,70,70);
  textFont(newspaperCutoutFont);
  displayText(`To catch, put your fingertips on the phone and yell "I GOT YOU!"`, 30 , width/2, height /2, 70,70,70);
  displayText(`To let it drop... you... let it drop."`, 30 , width/2, height / 2+50, 70,70,70);
  displayText(`ENTER to BEGIN"`, 30 , width/2, height / 2+150, 70,70,70);
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

  displayText(currentInput, 40, width / 2, height / 8,0);
  // Check if there are currently any predictions to display
  if (predictions.length > 0) {
    // Get the hand predicted
    let hand = predictions[0];
    // Show fingers coordinates
    highlightHand(hand);
  }
}
// Letting the phone falls.
function doNothing1Outcome(){
    image(dNbg,width/2,height/2,640,480);
    phoneCaught = false;
    push();
    textFont(newspaperCutoutFont);
    if (eventCounterDN1 === 0){
      legs.display();
      legs.move(phone);
      phone.display2();
      phone.move2();
    }
    else if(eventCounterDN1 === 1){
      dNbg = doNothing1bg2Image;
      phone.display2();
      phone.move2();
    }
    else if(eventCounterDN1 === 2){
      dNbg = doNothing1bg3Image;
      textBox();
      displayText(`!`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 3){
      textBox();
      displayText(`He... just juggled with his left foot`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 4){
      textBox();
      displayText(`He... just juggled with his left foot`, 25, 20, 4.3*height /5, 70,70,70);
      displayText(`Oh right... he's a sporty bastard! `, 25, 20, 4.7*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 5){
      textBox();
      displayText(`You couldn't help but wonder what if you tried to catch it`, 25, 20, 4.3*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 6){
      textBox();
      displayText(`You couldn't help but wonder what if you tried to catch it`, 25, 20, 4.3*height /5, 70,70,70);
      displayText(`Oh well! At least all is good!`, 25, 20, 4.7*height /5, 70,70,70);
    }
    else if(eventCounterDN1 === 7){
      textBox();
      displayText(`You feel your friendship strengthens`, 25, 20, 4.3*height /5,0,160,0);
      textStyle(BOLD);
      displayText(`FRIENDSHIP + 1`, 30, 20, 4.7*height /5, 0,160,0);
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
    phoneCaught = true;
    if (eventCounterCO === 0){
    displayText(`... `, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterCO === 1){
    displayText(`You almost caught it ...`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterCO === 2){
    displayText(`You almost caught it ... only to SMACK it to the ground, breaking it apart.`, 25, 20, 4.3*height /5,160,0,0);
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
    displayText(`Michael assures you that it's fine. At least you tried.`, 25, 20, 4.3*height /5,70,70,70);
    }
    else if (eventCounterCO === 6){
    image(catchOutcomebgImage,width/2,height/2 + 400,1920,1440);
    textBox();
    displayText(`Michael assures you that it's fine. At least you tried.`, 25, 20, 4.3*height /5,70,70,70);
    displayText(`It was an honest mistake...`, 25, 20, 4.7*height /5,70,70,70);
    }
    else if (eventCounterCO === 7){
    displayText(`...`, 25, 20, 4.3*height /5,160,0,0);
    }
    else if (eventCounterCO === 8){
    displayText(`You feel your guilt crawling on your back...`, 25, 20, 4.3*height /5,160,0,0);
    }
    else if (eventCounterCO >= 9){
    state = `secondSituation`
    }
   }
   // Second situation
  function secondSituation(){
    push();
    image(s2bg,width/2,height/2,640,480);
    textBox();
    if (phoneCaught === true && eventCounterS2 === 0){
      displayText(`Michael seems slightly annoyed.`, 25, 20, 4.3*height / 5 , 160,0,0);
    }
    else if (phoneCaught === false && eventCounterS2 === 0){
      displayText(`Michael seems glad that he got to show off`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterS2 === 1){
      displayText(`You two continue to chat while walking...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterS2 === 2){
      displayText(`You chat while walking...`, 25, 20, 4.3*height / 5 , 70,70,70);
      displayText(`Quite windy, but still a lovely day!`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterS2 === 3){
      displayText(`You look up and gaze at the cloud`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterS2 === 4){
      s2bg = situation2bg2Image;
      bird.display();
      bird.move();
      if (poop.appear){
        displayText(`BIRD POOP TOWARDS MICHAEL!!`, 45, 20, 4.3*height /5, 70,70,70);;
       }
      poop.display();
      poop.move(bird);
    }
    else if (eventCounterS2 >= 5){
      state = `secondDecisionIntro`;
        dramaticHornSFX.play();
      parkAmbienceSFX.pause();
      birdChirpingSFX.pause();
    }
    pop();
  }
  function secondDecisionIntro(){
    background(87,134,145);
    push();
    displayText(`Will you PUSH YOUR FRIEND or POOP YOUR FRIEND? `, 35 , width/2, height /2 - 75, 255,255,255);
    textFont(newspaperCutoutFont);
    displayText(`To PUSH, put your hand on the left half of the screen "`, 30 , width/2, height /2, 255,255,255);
    displayText(`Then move your hand to the right and yell "POOP FROM THE SKY"`, 30 , width/2, height /2+50,255,255,255);
    displayText(`To POOP... you... let it poop."`, 30 , width/2, height / 2+100, 255,255,255);
      displayText(`ENTER to BEGIN"`, 30 , width/2, height / 2+150, 255,255,255);
    pop();
  }
  function secondDecision() {
    image(secondDecisionbgImage,width/2,height/2,640,480);
    michael.display();
    // Display and move poop
    poop.display2();
    poop.move2(michael);
    // Display user's voice input
    displayText(currentInput, 40, width / 2, height / 8,255,255,255);
    // Check if there are currently any predictions to display
    if (predictions.length > 0) {
      // Get the hand predicted
      let hand = predictions[0];
      // Show fingers coordinates
      highlightHand(hand);
    }
  }
// Helping him!
  function pushOutcome(){
    image(pObg, width/2,height/2);
    textBox();
    michaelPushed = true;
    if (eventCounterPO === 0){
    background(0);
    textBox();
    displayText(`You pushed him away... `, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterPO === 1){
    displayText(`You pushed him away... `, 25, 20, 4.3*height /5,0,0,0);
    displayText(`Forgotten that his shoes were untied... `, 25, 20, 4.7*height /5,0,0,0);
    }
    else if (eventCounterPO === 2){
    pObg = pushOutcomebg2Image
    displayText(`He tripped on his shoelace...`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterPO === 3){
    displayText(`He tripped on his shoelace...`, 25, 20, 4.3*height /5,0,0,0);
    displayText(`Then fell on the street`, 25, 20, 4.7*height /5,0,0,0);
    }
    else if (eventCounterPO === 4){
    displayText(`AN INCOMING CAR`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterPO === 5){
    pObg = pushOutcomebg3Image;
    displayText(`AN INCOMING CAR`, 25, 20, 4.3*height /5,0,0,0);
    displayText(`stopped in time to save his life`, 25, 20, 4.7*height /5,0,0,0);
    }
    else if (eventCounterPO === 6){
    displayText(`Yet it did run over`, 25, 20, 4.3*height /5,0,0,0);
    displayText(`His BLOODY CELLPHONE!`, 25, 20, 4.7*height /5,0,0,0);
    }
    else if (eventCounterPO === 7){
      pObg = pushOutcomebg4Image;
    displayText(`He glazes at you with eyes of a mad man`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if (eventCounterPO === 8){
      pObg = pushOutcomebg5Image;
    displayText(`He glazes at you with eyes of a mad man`, 25, 20, 4.3*height /5,0,0,0);
    displayText(`Though stopped when he understood your good intention`, 25, 20, 4.7*height /5,0,0,0);
    }
    else if(eventCounterPO === 9){
    displayText(`BUT...all you ever wanted...`, 25, 20, 4.3*height /5,0,0,0);
    }
    else if(eventCounterPO === 10){
    displayText(`BUT...all you ever wanted...`, 25, 20, 4.3*height /5,0,0,0);
    displayText(`Was to save him from some bird poop...`, 25, 20, 4.7*height /5,0,0,0);
    }
    else if(eventCounterPO === 11){
    displayText(`You feel your sins tingling on your skin`, 25, 20, 4.3*height /5,160,0,0);
    }
    else if(eventCounterPO >= 12){
    state = `thirdSituation`;
    }
  }
  function doNothing2Outcome(){
    image(dN2bg,width/2,height/2,640,480);
    textBox();
    michaelPushed = false;
    if (eventCounterDN2 === 0){
    michael.display();
    michael.move();
    displayText(`...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 1){
    displayText(`how did he DODGE IT !?`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 2){
    displayText(`Oh...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 3){
    dN2bg = doNothing2bgImage;
    displayText(`Oh...`, 25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`He's just TYING HIS SHOES`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 4){
      dN2bg = doNothing2bg2Image;
    displayText(`While the gust of wind blew it away from him...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 5){
    displayText(`While the gust of wind blew it away from him...`, 25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`Michael looked to see how lucky he was...`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 6){
    dN2bg = doNothing2bg3Image;
    displayText(`He looks at you with a face of the blessed`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 7){
    displayText(`He looks at you with a face of the blessed`, 25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`Your heartless decision was actually for the better good...`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterDN2 === 8){
    displayText(`You feel your friendship strengthens`, 25, 20, 4.3*height / 5 , 0,160,0);
    displayText(`FRIENDSHIP + 1`, 30, 20, 4.7*height / 5 , 0,160,0);
    }
    else if (eventCounterDN2 >= 9){
    state = `thirdSituation`;
    }
    // Show poop falling
    if (eventCounterDN2 >=3 && eventCounterDN2 <6 || eventCounterDN2 === 0 ){
      poop.display2();
      poop.move2(michael);
    }
  }

  function thirdSituation(){
    if (michaelPushed === true && eventCounterS3 <4 ){
      s3bg = situation3bgMadImage;
    }
    else if (michaelPushed === false && eventCounterS3 <4){
      s3bg = situation3bgHappyImage;
    }
    image(s3bg,width/2,height/2,640,480);
    textBox();
    if (michaelPushed === true && eventCounterS3 === 0){
      displayText(`Michael seems slightly pissed.`, 25, 20, 4.3*height / 5 , 160,0,0);
    }
    else if (michaelPushed === false && eventCounterS3 === 0){
      displayText(`Michael looks pretty freakin' happy`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    if (michaelPushed === true && eventCounterS3 === 1){
      displayText(`Michael seems slightly pissed.`, 25, 20, 4.3*height / 5 , 160,0,0);
      displayText(`He's picking up the soccer ball that he dropped while falling`, 25, 20, 4.7*height / 5 , 160,0,0);
    }
    else if (michaelPushed === false && eventCounterS3 === 1){
      displayText(`Michael looks pretty freakin' happy`, 25, 20, 4.3*height / 5 , 70,70,70);
      displayText(`He's picking up the soccer ball that he dropped while tying his shoes`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
     if (eventCounterS3 ===2){
      displayText(`Sensing something wrong...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterS3 ===3){
    displayText(`Sensing something wrong...`, 25, 20, 4.3*height / 5 , 70,70,70);
     displayText(`You look on the left to see...`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterS3 ===4){
      s3bg = situation3bg2Image;
     displayText(`A CAR ON MICHAEL'S LANE`,  55, 20, 4.3*height /5, 70,70,70);
    }
    else if (eventCounterS3 ===5){
      s3bg = situation3bg3Image;
     displayText(`RUNNING TOWARDS HIM AT FULL SPEED!`, 45, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterS3 >=6){
    state= `thirdDecisionIntro`;
      dramaticHornSFX.play();
    parkAmbienceSFX.pause();
    birdChirpingSFX.pause();
    }
  }
  function thirdDecisionIntro(){
    background(160,0,0);
    push();
    displayText(`WILL YOU`, 45 , width/2, height /2 - 150, 255);
    displayText(`SAVE MICHAEL by pushing him to the NEXT LANE? `, 30 , width/2, height /2 - 100, 255);
    displayText(`or LET FATE DECIDE by doing nothing? `, 30 , width/2, height /2 - 50, 255);
    textFont(newspaperCutoutFont);
    displayText(`To PUSH, put your hand as close as you can to the screen`, 30 , width/2, height /2, 255);
    displayText(`And yell "NOT ON MY WATCH"`, 30 , width/2, height /2+50,0);
    displayText(`To let face decide... you...let fate decide..."`, 30 , width/2, height / 2+100, 255);
    displayText(`ENTER to BEGIN"`, 30 , width/2, height / 2+150, 255);
    pop();
  }
  function thirdDecision(){
    image(decision3bgImage,width/2,height/2,640,480);
    michael.display2();

    car.display();
    car.move();

    // Display user's voice input
    displayText(currentInput, 40, width / 2, height / 8,255,255,255);
    // Check if there are currently any predictions to display
    if (predictions.length > 0) {
      // Get the hand predicted
      let hand = predictions[0];
      // Show fingers coordinates
      highlightHand(hand);
    }
  }
  function saveOutcome(){
    image(sObg, width/2,height/2,640,480);
    textBox();
    if (eventCounterSO === 0){
      background(0);
      textBox();
       displayText(`And so you pushed him...`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterSO === 1){
      background(0);
      textBox();
       displayText(`And so you pushed him...`, 25, 20, 4.3*height / 5 , 255,255,255);
      displayText(`...To the next lane`, 25, 20, 4.7*height / 5 ,255,255,255);
    }
    else if (eventCounterSO === 2){
      background(0);
      textBox();
       displayText(`Thought you'd sacrifice yourself...`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterSO === 3){
      background(0);
      textBox();
       displayText(`Thought you'd sacrifice yourself...`, 25, 20, 4.3*height / 5 , 255,255,255);
       displayText(`But the driver saw the danger ahead`, 25, 20, 4.7*height / 5 , 255,255,255);
    }
    else if (eventCounterSO === 4){
      displayText(`And SWITCHED LANE HIMSELF!`, 35, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterSO === 5){
      displayText(`Your HEROIC ACT OF RESCUE AND SACRIFICE`, 40, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterSO === 6){
      sObg = saveOutcomebg2Image;
      displayText(`IS NOW NEGLIGENT HOMICIDE!`, 40, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterSO === 7){
      displayText(`The driver...ran...away...`, 40, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterSO === 8){
          sObg = saveOutcomebg3Image;
      displayText(`What ...can you do now?`, 40, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterSO >= 9){
      state = `fourthDecision`;
      dramaticHornSFX.play();
      parkAmbienceSFX.pause();
      birdChirpingSFX.pause();
    }
  }

  function fourthDecision(){
  background(0);
  displayText(`WILL YOU`, 45 , width/2, height /2 - 130, 180,0,0);
  displayText(`Call the police to redeem justice? `, 30 , width/2, height /2 - 70, 180,0,0);
  displayText(`OR Run for your sake? `, 30 , width/2, height /2 - 30, 180,0,0);
  textFont(newspaperCutoutFont);
  displayText(`To call 911, Press A`, 30 , width/2, height /2+ 50, 180,0,0);
  displayText(`To leave the scene, Press B`, 30 , width/2, height /2+90,180,0,0);
  }

  function reportOutcome(){
    image(rObg, width/2,height/2,640,480);
    // Display passerby after the third event
    if (eventCounterRO >=4){
      passerby.display();
    }
    textBox();

    if (eventCounterRO === 0){
      background(0);
      textBox();
      displayText(`So you decided to do the right thing...`, 25, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterRO === 1){
      background(0);
      textBox();
      displayText(`So you decided to do the right thing...`, 25, 20, 4.3*height / 5 , 180,0,0);
      displayText(`well you WANTED... to do the right thing`, 25, 20, 4.7*height / 5 , 180,0,0);
    }
    else if (eventCounterRO === 2){
      background(0);
      textBox();
      displayText(`You search for your cellphone`, 25, 20, 4.3*height / 5 , 255,255,255);
  }
    else if (eventCounterRO === 3){
      background(0);
      textBox();
      displayText(`You search for your cellphone`, 25, 20, 4.3*height / 5 , 255,255,255);
      displayText(`And realize you didn't bring it for this walk...`, 25, 20, 4.7*height / 5 , 255,255,255);
    }
    else if (eventCounterRO === 4){
      displayText(`Spotting a passerby`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterRO === 5){
      displayText(`Spotting a passerby`, 25, 20, 4.3*height / 5 , 70,70,70);
      displayText(`You ask to borrow their cellphone...`,25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterRO === 6){
      displayText(`Shaking from the sight of the bloody scene...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterRO === 7){
    displayText(`Shaking from the sight of the bloody scene...`,25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`He...`, 25, 20, 4.7*height / 5 ,70,70,70);
    }
    else if (eventCounterRO === 8){
    displayText(`AND ALL HELL BROKE LOOSE`, 55, 20, 4.3*height / 5 , 180,0,0);
    }
    // Turn into Loop Ending
    else if (eventCounterRO >=9){
      state = `loopEnding`
    }
    // Display and move phone after the 7th event
    if (eventCounterRO >= 8){
      phone.display4();
      phone.move4();
    }
}
  function loopEnding(){
    background(0);
    displayText(`Will you CATCH IT or LET IT DROP?`, 40 , width/2, height /2 - 75, 180,0,0);
    displayText(`Manslaughter Ending `, 50 , width/2, height /2 - 20, 180,0,0);
    textFont(newspaperCutoutFont);
    displayText(`Achievement Unlocked`, 30 , width/2, height /2+ 50, 255,255,255);
    if (helpCounter === 1 ){
    displayText(`Helping 1 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a small heart, but a sharp mind…`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 2 ){
    displayText(`Helping 2 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You are a decent human being with a decent soul.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 3 ){
    displayText(`Helping 3 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a big heart but an unrealistic and reckless mindset...`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 4 ){
    displayText(`Helping 4 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You stuck to your truth, but sometimes less is more.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 0 ){
    displayText(`Helping 0 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`OI stop bloody hacking mate!`, 30, width/2, height/2 + 140, 255,255,255);
    }
}
  function atonedEnding(){
    background(0);
    displayText(`You ran away, living the rest of your life in the jungle`, 35 , width/2, height /2 - 125, 180,0,0);
    displayText(`To protect society from your...HELP`, 40 , width/2, height /2 - 75, 180,0,0);
    displayText(`Atoned and Changed `, 50 , width/2, height /2 - 20, 180,0,0);
    textFont(newspaperCutoutFont);
    displayText(`Achievement Unlocked`, 30 , width/2, height /2+ 50, 255,255,255);
    if (helpCounter === 1 ){
    displayText(`Helping 1 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a small heart, but a sharp mind…`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 2 ){
    displayText(`Helping 2 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You are a decent human being with a decent soul.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 3 ){
    displayText(`Helping 3 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a big heart but an unrealistic and reckless mindset...`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 4 ){
    displayText(`Helping 4 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You stuck to your truth, but sometimes less is more.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 0 ){
    displayText(`Helping 0 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`OI stop bloody hacking mate!`, 30, width/2, height/2 + 140, 255,255,255);
    }
  }
  function doNothing3Outcome(){
    image(dN3bg, width/2,height/2,640,480);
    textBox();
    if (eventCounterDN3 === 0){
    background(0);
    textBox();
    displayText(`So you let fate decide...`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 1){
    background(0);
    textBox();
    displayText(`So you let fate decide...`, 25, 20, 4.3*height / 5 , 255,255,255);
    displayText(`... to not save those in need...`, 25, 20, 4.7*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 ===2){
    background(0);
    textBox();
    displayText(`Couldn't you try to save him...?`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 3){
    background(0);
    textBox();
    displayText(`Couldn't you try to save him...?`, 25, 20, 4.3*height / 5 , 255,255,255);
    displayText(`...`, 25, 20, 4.7*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 4){
    background(0);
    textBox();
    displayText(`...Murderer?`, 25, 20, 4.3*height / 5 , 180,0,0);
    }
    else if (eventCounterDN3 === 5){
    displayText(`NAH!`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 6){
    displayText(`NAH!`, 25, 20, 4.3*height / 5 , 255,255,255);
    displayText(`Although at high speed,`, 25, 20, 4.7*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 7){
    dN3bg = doNothing3bg2Image;
    displayText(`The driver saw the danger`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN3 === 8){
    displayText(`The driver saw the danger`, 25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`AND SWITCH LANE!`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterDN3 === 8){
    displayText(`...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN3 === 9){
    displayText(`...`, 25, 20, 4.3*height / 5 , 70,70,70);
    displayText(`Thank fuck you didn't shove him...`, 25, 20, 4.7*height / 5 , 70,70,70);
    }
    else if (eventCounterDN3 === 10){
    displayText(`to his death...`, 25, 20, 4.3*height / 5 , 70,70,70);
    }
    else if (eventCounterDN3 === 11){
    background(0);
    textBox();
    displayText(`Michael believes that you're his lucky charm`, 25, 20, 4.3*height / 5 , 255,255,255);
    }
    else if (eventCounterDN3 === 12){
    background(0);
    textBox();
    displayText(`You feel your friendship strengthens`, 25, 20, 4.3*height / 5 ,0,240,0);
    displayText(`FRIENDSHIP + 1`, 30, 20, 4.7*height /5, 0,240,0);
    }
    else if (eventCounterDN3 === 13){
    background(0);
    textBox();
    displayText(`Then he asks you for a ride home`, 25, 20, 4.3*height / 5 ,0,240,0);
    }
    else if (eventCounterDN3 === 14){
    background(0);
    textBox();
    displayText(`Then he asks you for a ride home`, 25, 20, 4.3*height / 5 ,0,240,0);
    displayText(`You relunctantly agreed...`, 25, 20, 4.7*height / 5 ,0,240,0);
    }
    else if (eventCounterDN3 >= 15){
    background(0);
    state = `futileEnding`
    robertWmemeSFX.loop();
    }
  }
  function futileEnding(){
    background(0);
    displayText(`You gave him a ride home`, 35 , width/2, height /2 - 125, 180,0,0);
    displayText(`Contemplating if it was a good decision...`, 40 , width/2, height /2 - 75, 180,0,0);
    displayText(`"All That for Nothing" Ending`, 50 , width/2, height /2 - 20, 180,0,0);
    textFont(newspaperCutoutFont);
    displayText(`Achievement Unlocked`, 30 , width/2, height /2+ 50, 255,255,255);
    if (helpCounter === 1 ){
    displayText(`Helping 1 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a small heart, but a sharp mind…`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 2 ){
    displayText(`Helping 2 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You are a decent human being with a decent soul.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 3 ){
    displayText(`Helping 3 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You have a big heart but an unrealistic and reckless mindset...`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 4 ){
    displayText(`Helping 4 times`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`You stuck to your truth, but sometimes less is more.`, 30, width/2, height/2 + 140, 255,255,255);
    }
    else if (helpCounter === 0 ){
    displayText(`Helping 0 time`, 30, width/2, height/2 + 100, 255,255,255);
    displayText(`What a bastard...well a smart one at that...`, 30, width/2, height/2 + 140, 255,255,255);
    }
  }
