// This class is one of the spell castable against Voldemort. Once casted, it will chase Voldemort's spell. If there is no Voldemort's spell
// then it will chase Voldemort and damage him. Once collided with Voldemort or Voldemort's spell, the spell is taken out from the array.
// Low damage and pause timer
class ExpelliarmusSpell {
  constructor(x, y, expelliarmusspellImage, expelliarmusspell2Image) {
    this.x = x,
      this.y = y,
      this.size = 800,
      this.vx = 0,
      this.vy = 0,
      this.ax = 0,
      this.ay = 0,
      this.acceleration = 0,
      this.maxSpeed = 0,
      this.deform = 0,
      this.image = expelliarmusspellImage,
      this.flash = true,
      this.hitspell = false,
      this.hitVoldemort = false,
      this.damage = 25;
  }
  // Display spell
  display() {
    image(this.image, this.x, this.y, this.size, this.size);
    // Flash and turn flash off when casted
    if (this.flash === true) {
      image(this.image, width / 2, height / 2, 2400, 2400)
      this.flash = false;
    }
    // Add deform to the size of the spell and constrain its size
    this.size -= this.deform;
    this.size = constrain(this.size, 20, 600);
    // Switch between 2 images for animation purposes
    if (this.image === expelliarmusspellImage) {
      this.image = expelliarmusspell2Image;
    } else if (this.image === expelliarmusspell2Image) {
      this.image = expelliarmusspellImage;
    }

    // Spell gets smaller overtime. Much smaller if chasing Voldemort, a bit smaller if chasing Voldemort's spell.
    if (voldemort.countered === false) {
      this.deform = 10;
    } else if (voldemort.countered === true) {
      this.deform = 40;
    }
  }
  // Move the spell!
  move() {
    // Add vx and vy to x and y properties
    this.x += this.vx;
    this.y += this.vy;

    // Add acceleration to the movement of vx and vy and constrain it
    this.vx += this.ax;
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy += this.ay;
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
    // Adjust speed when it is chasing Voldemort's spell
    if (voldemort.countered === false) {
      this.maxSpeed = 13;
      this.acceleration = 5;
    }
    // Adjust speed when it is chasing voldemort
    else if (voldemort.countered === true) {
      this.maxSpeed = 14;
      this.acceleration = 5;
    }

  }
  // Chase Voldemort's spell!
  chaseVspell(voldemort) {
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
  // When collide with voldemort's spell, turn voldemort countered to true so Voldemort's spell's properties resets
  // Voldemort also vulnerable when he is countered
  collideVspell(voldemort) {
    let d = dist(this.x, this.y, voldemort.x2, voldemort.y2)
    if (d < 50) {
      // flash effect
      image(this.image, width / 2, height / 2, 1800, 1800);
      voldemort.countered = true;
      this.hitspell = true;
      spellcounteredSFX.play();
    }
  }
  // Chase Voldemort coordinates
  chaseVoldemort(voldemort) {
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
  // When spell collides with Voldemort, decreases Voldemort's HP by the spell's damage amount. Turn hitVoldemort to true to remove the spell from
  // the array in the main script.
  //Turn expelliarmushurt to true to display Voldemort being struck by the spell in Voldemort class.
  // Expelliarmus ability pause the timer (since Voldy no long has his wand until player's next spell)
  // Reset wand lost (pause timer effect by this spell).
  collideVoldemort(voldemort, timer) {
    let d = dist(this.x, this.y, voldemort.x, voldemort.y)
    if (d < 35) {
      displayText(`-` + this.damage, 40, 5 * width / 6, height / 6, 188, 77, 114);
      if (timer.lostwand === true) {
        timer.lostwand = false
      } else {
        timer.lostwand = true;
      }
      // WIN CONDITION of player. Casting this spell when voldemort has 1 health left.
      if (voldemort.hp === 1) {
        state = `winEnding`;
        stage4Soundtrack.stop();
        annyang.abort();
        winEndingSFX.play();
      }
      this.hitVoldemort = true;
      voldemort.expelliarmushurt = true;
      voldemort.hp = voldemort.hp - this.damage;
      expelliarmushitVSFX.play();
      spellhitV.play();
    }
  }
}
