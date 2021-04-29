class Legs {
  constructor(leftlegImage, rightlegImage) {
    // Parameters for left leg
    this.x = width / 2 -150,
    this.y = height / 2 -10,
    this.width = 156,
    this.height = 480,
    this.vy = -5,
    this.image = leftlegImage,
    // Parameters for right leg
    this.x2 = width / 2 +50,
    this.y2 = height / 2 -10,
    this.width2 = 175,
    this.height2 = 480,
    this.vy2 = -5,
    this.image2 = rightlegImage
  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    image(this.image,this.x,this.y,this.width,this.height);
    image(this.image2,this.x2,this.y2,this.width2,this.height2);
    pop();
  }
  // Move function to move the phone
  move(phone){
  // Move phone down. If phone is out of sight, change state to doNothingOutcome.
    this.y2 += this.vy2
    if (phone.juggled2 === true){
     this.vy2 =7;
  }
  // Stop feet movement if it reaches its initial y coordinate
    if (this.y2 >= height/2 -5){
      this.vy2 = 0;
    }
    // if (this.y - this.height/2 >= height){
    //   state =`doNothing1Outcome`
    // }
  }
}
