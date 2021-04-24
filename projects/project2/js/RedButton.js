class RedButton {
  constructor() {
    this.x = width / 2,
    this.y = height / 2 + 50,
    this.y2 = height/2 + 60,
    this.size = 120
  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    fill(40);
    ellipse(this.x,this.y2,this.size + 40);
    fill(210,20,10);
    ellipse(this.x,this.y2,this.size );
    fill(230,20,10);
    ellipse(this.x,this.y ,this.size);
    pop();
  }
}
