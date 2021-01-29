class SausageDog extends Animal {
  constructor(x,y,image){
    super(x,y,image);

    this.found = false;
    this.rotationSpeed = 10;

  }

  update(){
    super.update();


    if(this.found){
      this.angle += this.rotationSpeed;
      this.rotationSpeed +=0.1;
      this.x += 1;
    }
  }

  mousePressed(){
    if (this.overlap(mouseX,mouseY)) {
        this.found = true;
    }
  }
}
