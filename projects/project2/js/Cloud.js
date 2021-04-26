// This class is the cloud that floats left to right of the introduction screen
class Cloud {
  constructor(cloudImage) {
    this.x = 0,
    this.y = height / 3,
    this.width = 480,
    this.height = 360,
    this.vx = 6
    this.image = cloudImage;

  }
  // Display the cloud image
  display() {
    push();
    image(this.image, this.x,this.y, this.width, this.height);
    pop();
  }
  // Move cloud left to right and resets its x 
  move(){
    this.x += this.vx
    if (this.x - this.width/2 >= width){
      this.x = -this.width/2;
    }
  }

  }
