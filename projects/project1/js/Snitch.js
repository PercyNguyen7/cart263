// The snitch is the flying golden ball in the introductory stage of the game! Player must cast Immobulus, the intro spell,
 // to immobolize it and advance in the game
class Snitch{
    constructor(snitchImage,snitch2Image){
      this.x = width/2;
      this.y = height/2;

      this.speed = 50;
      this.vy = random(-5,5);
      this.vx = random(-5,5);
      this.size = 200;
      this.deform = 0;
      this.image = snitchImage;
      this.shrink = false;
      this.frozen = false;

    }
// Display the Golden Snitch! Snitch switches between two images and stay on one if frozen!
    display(){
      push();
      image(this.image,this.x, this.y, this.size, this.size);

      if (this.frozen === false){
      this.size += this.deform;
      }
// Switch between the 2 snitch images for animation effect
      if (this.image === snitchImage && this.frozen === false){
        this.image = snitch2Image;
      }
      else if (this.image ===snitch2Image && this.frozen === false){
        this.image = snitchImage;
      }
// if frozen then it stays on one image!
      if (this.frozen === true){
        this.image = snitch2Image;
      }
// If size is less than 270 then shrink, if not grow!
      if (this.size >= 300){
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
// Constrain Golden Snitch's size to 120 min and 300 max
      this.size = constrain (this.size, 120,300);
      pop();
    }
// Move function: Only move if not frozen
    move(){
      if (this.frozen === false){
      this.x += this.vx;
      this.y += this.vy;
    }

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
