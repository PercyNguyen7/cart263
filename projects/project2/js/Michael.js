// Red button to start the game in instruction state
class Michael {
  constructor(sdmichaelImage) {
    this.x = width/2,
    this.y = height-140,
    this.vy = 10,
    this.width = 206,
    this.height = 295,
    this.image = sdmichaelImage
    this.angle = 0;
    this.rotationSpeed = -2;
  }
  // Display the red button out of 3 red, dark red and grey circle.
  display() {
    push();
    if (state === `doNothing2Outcome`){
      translate(this.x,this.y);
      rotate(this.angle);
      this.angle += this.rotationSpeed
      image(sdmichaelImage, 0,0,this.size);
    }
    else{
    image(sdmichaelImage, this.x,this.y,this.size);
    }
    pop();
  }
  move(){
    if (state === `doNothing2Outcome`){
    this.y+= this.vy;
  }
 }
}
