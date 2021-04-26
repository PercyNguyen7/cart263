class Phone {
  constructor(phoneImage) {
    // Parameters for the first phone in FirstDecision
    this.x = width / 2,
    this.y = height / 2 - 300,
    this.width = 160,
    this.height = 280,
    this.vy = 2
    // Parameters for phone in doNothing1Outcome state
    this.x2 = 0,
    this.y2 = height / 2,
    this.width2 = 95,
    this.height2 = 156,
    this.vy2 = 2
    this.image2 = phoneImage;
  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
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
    }
  }
  // Display phone image
  display2(){
    image(this.image2,this.x2,this.y2,this.width2,this.height2);
  }
  // Move phone down and up.
  move2(){
    this.y2 += this.vy2;
  }

  }
