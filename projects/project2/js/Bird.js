// Red button to start the game in instruction state
class Bird {
  constructor(birdS2Image) {
    this.x = -50,
    this.y = 350,
    this.vx = 9,
    this.vy = -4.5,
    this.size = 156,
    this.image = birdS2Image
  }
  // Display the red button out of 3 red, dark red and grey circle.
  display() {
    image(birdS2Image, this.x,this.y,this.size)
  }
  // Move bird diagonally (right and up)
  move(){
    this.x += this.vx
    this.y += this.vy
  // Change event counter once pass the width of canvas
    if (this.x - this.size/2>=width){
      eventCounterS2 = 5;
    }
  }


}
