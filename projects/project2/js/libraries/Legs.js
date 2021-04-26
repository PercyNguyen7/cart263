class Legs {
  constructor(leftlegImage, rightlegImage) {
    // Parameters for the first phone in FirstDecision
    this.x = width / 2,
    this.y = height / 2 - 300,
    this.width = 160,
    this.height = 280,
    this.vy = 0;

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


  }
