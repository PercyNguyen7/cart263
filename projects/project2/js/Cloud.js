class Cloud {
  constructor(cloudImage) {
    this.x = 0,
    this.y = height / 3,
    this.width = 480,
    this.height = 360,
    this.vx = 6
    this.image = cloudImage;

  }
  // Display black rectangle. Slightly transparent if player casts Lumos and completely transparent if player casts Lumos Maxima.
  display() {
    push();
    image(this.image, this.x,this.y, this.width, this.height);

    pop();
  }
  // Move
  move(){
    this.x += this.vx
    if (this.x - this.width/2 >= width){
      this.x = -this.width/2;
    }
  }

  }
