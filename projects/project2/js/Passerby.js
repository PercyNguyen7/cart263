//Passerby for the
class Passerby {
  constructor(passerbyImage,passerby2Image) {
    this.x = width/2,
    this.y = height /2,
    this.width = 640,
    this.height = 480,
    this.image = passerby2Image;


  }
  // Display the cloud image
  display() {
    if (eventCounterRO < 8){
      this.image = passerby2Image;
  }
    else if (eventCounterRO >=8){
      this.image = passerbyImage;
    }
  image(this.image, this.x,this.y, this.width, this.height);

  }
}
