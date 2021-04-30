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

    this.x2 = width/2,
    this.y2 = -20,
    this.vx2 = 0,
    this.vy2 = 3,
    this.width2 = 20,
    this.height2 = 60,
    this.image2 = poopImage
  }
  // Display the red button out of 3 red, dark red and grey circle.
  display() {
    let w = map(this.y, 100, height, 10, 60);
    let h = map(this.y, 100, height, 30, 180);
    // display if bird passes half way
    if (this.appear === true){
    image(poopImage, this.x,this.y,w,h);
    }
  }
  // Move poop down
  move(bird){
    // Make poop appear when bird flies past half way
    if (bird.x >= width/2){
      this.appear = true
    }
    // Drop poop once poop appears! Ingenius!
    if (this.appear === true){
      this.y += this.vy;
    }
      // Change event counter once poop reaches the height of canvas
    if (this.y - this.height/2 >= height){
      eventCounterS2 = 5;
    }
  }

// Display poop image
  display2(){
    image(poopImage,this.x2,this.y2,this.width2,this.height2);
  }

// Move function
  move2(michael){
    //If poop is close enough to Michael, switch to doNothing2 outcome
    this.y2 += this.vy2;
    this.x2 += this.vx2;
    if (this.y2 + this.height2 >= michael.y - michael.height/2 + 30 && state === `secondDecision`){
      state = `doNothing2Outcome`
    }
    if (state === `doNothing2Outcome` ){
      this.vy2 = 10;
      this.vx2 = 8;
    }
  }
}
