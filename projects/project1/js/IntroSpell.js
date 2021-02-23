class IntroSpell{
    constructor(x,y, introspellImage){
      this.x = x,
      this.y = y,
      this.size = 50,
      this.vx = 0;
      this.vy = -20;
      this.image = introspellImage
    }
// display spell
    display(){
      push();
      imageMode(CENTER);
      image(introspellImage, this.x, this.y, this.size, this.size);
      pop();
    }

    move(){
      this.x += this.vx;
      this.y += this.vy;

    }

  }
