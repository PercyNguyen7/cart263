// Red button to start the game in instruction state
class Michael {
  constructor(sdmichaelImage,michaelMadD3Image,michaelHappyD3Image) {
    // Parameters for Michael in 2nd Decision and Catch outcome
    this.x = width/2,
    this.y = height-140,
    this.vy = 10,
    this.width = 206,
    this.height = 295,
    this.image = sdmichaelImage
    this.angle = 0;
    this.rotationSpeed = -2;
    // Parameters for Michael in third Decision
    this.x2 = 3*width/5,
    this.y2 = 253,
    this.vy2 = 10,
    this.width2 = 295,
    this.height2 = 269,
    this.image2a = michaelMadD3Image;
    this.image2b = michaelHappyD3Image;
  }
  // Display Michael
  display() {
    push();
    if (state === `doNothing2Outcome`){
      translate(this.x,this.y);
      rotate(this.angle);
      this.angle += this.rotationSpeed
      image(this.image, 0,0,this.size);
    }
    else{
    image(this.image, this.x,this.y,this.size);
    }
    pop();
  }
  move(){
    // Rotate Michael's head to dodge the poop
    if (state === `doNothing2Outcome`){
    this.y+= this.vy;
    }
  }
  display2(){
    if (michaelPushed === true){
    image(this.image2a, this.x2,this.y2,this.width2,this.height2);
   }
   else if (michaelPushed === false){
   image(this.image2b, this.x2,this.y2,this.width2,this.height2);
   }
  }
}
