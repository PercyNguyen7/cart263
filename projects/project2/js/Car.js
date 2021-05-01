// Car that runs toward Michael in the 3rd Decision state
class Car {
  constructor(carImage) {
    // Parameters for the car in the third decision
    this.x = -460;
    this.y = 270;
    this.vx = 1.5;
    this.width = 990;
    this.height = 266;
    this.image = carImage;
  }
  //Display the lamborghini side view image
  display() {
    image(this.image, this.x, this.height, this.width);
  }
  //Move function
  move() {
    // Move car to the right as timeout
    this.x += this.vx
    if (this.x + this.width / 2 >= 300) {
      state = `doNothing3Outcome`;
      heartbeatSFX.stop();
      parkAmbienceSFX.play();
      birdChirpingSFX.play();
    }
  }
}
