class SausageDog extends Animal {
  constructor(x,y,image){
    super(x,y,image);


    this.found = false;
    this.rotationSpeed = 10;
    this.x = x;
    this.y = y;

    this.speed = 6;
    this.vx=random(-this.speed,this.speed);
    this.vy= random(-this.speed,this.speed);

  }

  update(){
    super.update();


    if(this.found){
      this.angle += this.rotationSpeed;
      this.rotationSpeed +=0.1;
      if (this.rotationSpeed >= 150) {
        state = `end`
      }
      this.x += this.vx;
      this.y += this.vy;
      this.image.width += 0.5;
     this.image.height += 0.5;

    }
  }

  bounce(){
     if (this.x  < 0 || this.x  >width){
       this.vx = -this.vx;
         barkSFX.play();
     }
     if (this.y  < 0 || this.y  >height){
       this.vy = -this.vy;
         barkSFX.play();
     }
   }


  mousePressed(){
    if (this.overlap(mouseX,mouseY)) {

        this.found = true;

    }
  }
}
