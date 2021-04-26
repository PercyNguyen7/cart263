// Display and move the background for the FirstDecision state up
class FirstDecisionBg {
  constructor() {
    this.x = width / 2,
    this.y = height / 2 + 50 ,
    this.width = 960,
    this.height = 720,
    this.vy = 0.7,
    this.image = firstDecisionbgImage
  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    image(firstDecisionbgImage,this.x,this.y,this.width,this.height)
    pop();
  }
  // Move
  move(){
    this.y -= this.vy
  }
}
