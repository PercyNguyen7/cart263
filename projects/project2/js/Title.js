class Title {
  constructor() {
    this.x = width / 2,
    this.y = height / 2 + 50,
    this.y2 = height/2 + 60,
    this.size = 120
    this.vy = 15;
    this.r = 0;
    this.vr = 4;
    this.broken = false;
  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    this.r = this.r+this.vr;
    if (this.r >= 60){
      this.vr = 0;
    }
      rotate( 0.1*radians(this.r));
    displayText(`The Extremely Silly Game`, 60, this.x, this.y, 255);
    pop();
  }
  move(){
    if (this.broken === true){
    this.y += this.vy;
    }
  }
}
