//Passerby for reportOutcome state
class Passerby {
  constructor(passerbyImage, passerby2Image) {
    //Parameters of the passerby
    this.x = width / 2;
    this.y = height / 2;
    this.width = 640;
    this.height = 480;
    this.image = passerby2Image;
  }
  // Display the passerby without phone if eventCounter is more than 8 and with phone if eventCounter is less than 8
  display() {
    if (eventCounterRO < 8) {
      this.image = passerby2Image;
    } else if (eventCounterRO >= 8) {
      this.image = passerbyImage;
    }
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
