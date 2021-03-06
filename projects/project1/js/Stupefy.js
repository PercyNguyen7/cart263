class StupefySpell{
    constructor(x,y, stupefyspellImage, stupefyspell2Image){
      this.x = x,
      this.y = y,
      this.size = 800,
      this.vx = 0,
      this.vy = 0,
      // this.speed = 5,
      this.ax = 0,
      this.ay = 0,
      this.acceleration = 0,
      this.maxSpeed = 0,
      this.deform = 0,
      this.image = stupefyspellImage,
      this.flash = true,
      this.hitspell = false,
      this.hitVoldemort = false,
      this.damage = 50;


    }
// Display spell
    display(){
      image(this.image, this.x, this.y, this.size, this.size);
// Flash and turn flash off when casted
      if (this.flash === true){
        image(this.image,width/2,height/2, 2400, 2400)
        this.flash = false;
      }
      this.size -= this.deform;
      this.size = constrain(this.size, 20,600);

      if (this.image === stupefyspellImage){
        this.image = stupefyspell2Image;
      }
      else if (this.image === stupefyspell2Image){
        this.image = stupefyspellImage;
      }

// Spell gets smaller overtime
    if (voldemort.countered === false){
      this.deform = 10;
      }
    else if (voldemort.countered === true){
      this.deform =40;

      }

      // // This toggles the split function for the stupefy array once the spell hits Voldemort's spell!
            // if (this.hitspell === true){
            //     image(this.image2,this.x2,this.height2,this.width2,this.height2);
            //   // image(this.image,width/2,height/2, 2400, 2400)
            //
            // }
      // // This toggles the split function for the stupefy array once the spell hits Voldemort!
      //       if (this.hitVoldemort === true){
      //         image(this.image2,this.x2,this.height2,this.width2,this.height2);
      //  image(this.image2,this.x2,this.y2,this.width2,this.height2);
      //         this.hitVoldemort =false;
      //       }
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

      if (voldemort.countered === false){
        this.maxSpeed = 13;
        this.acceleration = 5;
      }
      else if (voldemort.countered === true){
        this.maxSpeed = 10;
        this.acceleration =3;
      }

    }
// Chase the Voldemort's spell!
    chaseVspell(voldemort){
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
  collideVspell(voldemort){
    let d = dist(this.x, this.y,voldemort.x2, voldemort.y2)
    if (d < 50){
  // flash effect
      image(this.image,width/2,height/2, 1800, 1800);
      voldemort.countered= true;
      this.hitspell = true;
      spellcounteredSFX.play();
    }

  }

  chaseVoldemort(voldemort){

    let dx2 = this.x - voldemort.x;
    let dy2 = this.y - voldemort.y;
    // If x distance is negative the spell should move right
    if (dx2 < 0) {
    this.ax = this.acceleration;
   }
   // If x distance is positive the spell should move left
   else {
     this.ax = -this.acceleration;
   }
   // If y distance is negative, the spell should move up
   if (dy2 < 0) {
     this.ay = this.acceleration;
   }
   // If y distance is positive, the spell should move down
   else {
     this.ay = -this.acceleration;
   }

}
// When spell collides with Voldemort, decreases Voldemort's HP by 70
  collideVoldemort(voldemort){
    let d = dist(this.x, this.y,voldemort.x, voldemort.y)
      if (d < 25){
        this.hitVoldemort = true;
        voldemort.stupefyhurt = true;
        voldemort.hp = voldemort.hp - this.damage;
        voldemorthitSFX.play();
      }
  }

}
