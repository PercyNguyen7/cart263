class Phone {
  constructor(phoneImage,phoneFallings1bg4Image,strangerPhoneImage) {
    // Parameters for the first phone in FirstDecision
    this.x = width / 2,
    this.y = height / 2 - 300,
    this.width = 160,
    this.height = 280,
    this.vy = 3,
    // Parameters for phone in doNothing1Outcome state.
    this.x2 = width/2 + 50,
    this.y2 = -75,
    this.width2 = 95,
    this.height2 = 156,
    this.vy2 = 0,
    this.image2 = phoneImage,
    this.juggled2 = false;
    this.rotationSpeed2 = 0;
    angleMode(DEGREES)
    this.angle2 = 5;

    // Parameters for phone in Situation 1 event 4
    this.x3 = width/2;
    this.y3 = height/2;
    this.width3 = 640,
    this.height3 = 480,
    this.vy3 = 5,
    this.image3 = phoneFallings1bg4Image;

    // Parameters for phone in reportOutcome state
    this.x4 = width/2,
    this.y4 = height/2 + 30,
    this.width4 = 640;
    this.height4 = 480,
    this.vy4 = 4,
    this.image4 = strangerPhoneImage;
  }
  // Display phone
  display() {
    push();
    fill(20);
    rect(this.x, this.y, this.width,this.height);
    fill(224);
    rect(this.x, this.y+5, this.width - 20, this.height - 30);
    pop();
  }
  // Move function to move the phone
  move(){
  // Move phone down. If phone is out of sight, change state to doNothingOutcome.
    this.y += this.vy
    if (this.y - this.height/2 >= height){
      state =`doNothing1Outcome`
      heartbeatSFX.stop();
      parkAmbienceSFX.play();
      birdChirpingSFX.play();
    }
  }
  // Display phone image
  display2(){
    push();
    imageMode(CENTER);
    translate(this.x2,this.y2);
    rotate(this.angle2);
    this.angle2 += this.rotationSpeed2;
    image(this.image2,0,0,this.width2,this.height2);
    pop();
  }
  // Moving phone functions
  move2(){
    this.y2 += this.vy2;
    if(this.y2 >=200){
      this.juggled2 = true;
    }
    // reset y coordinate and make phone size smaller for the next scene
    else if(this.y2 + this.height2/2<= 0){
      eventCounterDN1 = 1
      this.y2 = 400;
      this.x2 = 320;
      this.width2 = 35;
      this.height2 = 65;
    }
    if (this.juggled2 === true){
      this.vy2 = -6;
      this.rotationSpeed2 = 60
    }
   else if (this.juggled2 === false){
      this.vy2 = 15;
      this.rotationSpeed2 = 0;
   }
   // If reaches hand, phone disappears.
   if (eventCounterDN1 === 1 && this.y2 <= 200){
     eventCounterDN1 = 2
   }
  }
    display3(){
      image(this.image3, this.x3,this.y3,this.width3,this.heigh3);
    }
    move3(){
      this.y3 += this.vy3;
      if (this.y3 >= height){
        eventCounterS1 = 8;
      }
    }

    display4(){
      image(this.image4, this.x4,this.y4,this.width4,this.height4);
    }

    move4(){
      if (eventCounterRO >=8){
      this.y4 += this.vy4;
      }
      if (this.y4 - 100>= height){
      eventCounterRO = 9
      }
    }
}
