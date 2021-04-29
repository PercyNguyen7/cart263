// Red button to start the game in instruction state
class Poop {
  constructor(poopImage) {
    this.x = width/2,
    this.y = 100,
    this.vx = 0,
    this.vy = 7,
    this.width = 60,
    this.height = 180,
    this.image = poopImage,
    this.appear = false;
  }
  // Display the red button out of 3 red, dark red and grey circle.
  display() {
    let w = map(this.y, 100, height, 0, 60);
    let h = map(this.y, 100, height, 0, 180);
    // display if bird passes half way
    if (this.appear === true){
    image(poopImage, this.x,this.y,w,h);
    }
  }
  // Move poop down
  move(bird){
  // Change event counter once pass the width of canvas
    if (bird.x >= width/2){
      this.appear = true
    }
    if (this.appear === true){
      this.y += this.vy;
    }
    if (this.y - this.height/2 >= height){
      eventCounterS2 = 5;
    }
  }
}
