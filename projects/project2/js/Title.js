class Title {
  constructor() {
    this.x = width / 2,
    this.y = height / 2 + 50,
    this.y2 = height/2 + 60,
    this.size = 120,
    this.vy = 15,
    this.r = 0,
    this.vr = 30,
    this.broken = false;
  }
  // Display title
  display() {
    push();
    // Title gets tilted
    this.r +=this.vr;
    if (this.r >= 300){
      this.vr = 0;
    }
      rotate(1*radians(this.r));
    displayText(`The Extremely Silly Game`, 60, this.x, this.y, 255);
    pop();
  }
  move(){
    if (this.broken === true){
    this.y += this.vy;
    }
    if (this.y >= height && this.y <= height +5){
      if (!titleDroppedSFX.isPlaying()){
        titleDroppedSFX.play();
        drumSFX.play(1);
      }
    }
  }
}
