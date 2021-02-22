class Snitch{
    constructor(snitchImage){
      this.x = width/2;
      this.y = height/2;

      this.speed = 20;
      this.vy = random(-5,5);
      this.vx = random(-5,5);
      // this.ax = 0;
      // this.ay = 0;
      this.size = 200;
      this.deform = 1;
      this.image = snitchImage;
      this.shrink = false;
    }
// Display the object!
    display(){
      push();
      imageMode(CENTER);
      image(this.image,this.x, this.y, this.size, this.size);


      if (this.size >= 270){
        this.shrink = true;
      }
      else if (this.size <= 120){
        this.shrink = false;
      }


      if (this.shrink === true){
        this.deform = random(-2,-6);
      }
      else if(this.shrink === false){
        this.deform = random(2,6);
      }

      this.size = constrain (this.size, 120,270);
      pop();


    }

// Move function
    move(){
      this.x += this.vx;
      this.y += this.vy;

      this.size += this.deform;
      this.deform += 0.5;

// Low chance of changing direction
      let change = random(0, 0.1);
      if (change < 0.01) {
      this.vx = random(-this.speed,this.speed);
      this.vy = random(-this.speed,this.speed);
    }


// Snitch's bounce against horizontal walls and goes opposite direction
      if (this.x  - this.size/2 < 0 || this.x + this.size/2 >width){
        this.vx = -this.vx ;
      }
// Snitch bounces against vertical walls
      if (this.y - this.size/4 < 0 || this.y + this.size/4 >height){
        this.vy = -this.vy;
      }
// Cage the Snitch to only move inside the Canvas
      this.x = constrain(this.x, this.size/2, width -this.size/2);
      this.y = constrain(this.y, this.size/4, height - this.size/4);
    }
  }
