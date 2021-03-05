class StupefySpell{
    constructor(x,y, stupefyspellImage){
      this.x = x,
      this.y = y,
      this.size = 800,
      this.vx = 0,
      this.vy = 0,
      // this.speed = 5,
      this.ax = 0,
      this.ay = 0,
      this.acceleration = 0.6,
      this.maxSpeed = 6,
      this.deform = 10,
      this.image = stupefyspellImage;
      this.flash = true
    }
// Display spell
    display(){
      image(this.image, this.x, this.y, this.size, this.size);
// Flash and turn flash off when casted
      if (this.flash === true){
        image(this.image,width/2,height/2, 2400, 2400)
        this.flash = false;
      }

// Spell gets smaller overtime
      this.size -= this.deform;
      this.size = constrain(this.size, 70,600);
    }
// Move the spell!
    move(){
      this.x += this.vx;
      this.y += this.vy;

// Add acceleration to the movement of vx and vy and constrain it
      this.vx += this.ax;
      this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
      this.vy += this.ay;
      this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    }
// Chase the Voldemort's spell!
    chase(voldemort){
      let dx = this.x - voldemort.x2;
      let dy = this.y - voldemort.y2;
      // If x distance is negative the spell should move right
      if (dx < 0) {
      this.ax = this.acceleration;
     }
     // If x distance is positive the spell should move left
     else {
       this.ax = -this.acceleration;
     }
     // If y distance is negative, the spell should move up
     if (dy < 0) {
       this.ay = this.acceleration;
     }
     // If y distance is positive, the spell should move down
     else {
       this.ay = -this.acceleration;
     }
  }
  // When collide with voldemort's spell, turn voldemort countered to true so Voldemort's spell resets
  collide(voldemort){
    let d = dist(this.x, this.y,voldemort.x2, voldemort.y2)
    if (d < 30){
  // flash effect
      image(this.image,width/2,height/2, 1400, 1400);
      voldemort.countered= true;
    }
  }
}
