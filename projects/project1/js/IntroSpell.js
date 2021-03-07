// This class is part of the intro spell array in the Intro state. Once this spell is casted, it will chase the golden snitch
// until it collides with it. Once collide, the goldene snitch will freeze and part 1 is completed.
class IntroSpell {
  constructor(x, y, introspellImage) {
    this.x = x,
      this.y = y,
      this.size = 50,
      this.vx = 0,
      this.vy = 0,
      this.ax = 0,
      this.ay = 0,
      this.acceleration = 0.9,
      this.maxSpeed = 14,
      this.deform = 0,
      this.image = introspellImage;
    this.flash = true;
  }
  // Display spell
  display(snitch) {
    image(introspellImage, this.x, this.y, this.size, this.size);
    // Flash when casted
    if (this.flash === true) {
      image(this.image, width / 2, height / 2, 2400, 2400)
      this.flash = false;
    }

    // Shrink/Grow this spell similar to the size of the snitch! Size also constrained!
    this.size += this.deform;
    if (snitch.shrink === true) {
      this.deform = snitch.deform;
    } else if (snitch.shrink === false) {
      this.deform = snitch.deform;
    }
    // Constrain the spell's size
    this.size = constrain(this.size, 20, 70);
  }
  // Move the spell!
  move() {
    // Add vx and vy to the x and y properties of the spell
    this.x += this.vx;
    this.y += this.vy;

    // Add acceleration tp the movement of tee and constrain it
    this.vx += this.ax;
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy += this.ay;
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

  }
  // Chase the golden snitch!
  chase(snitch) {
    let dx = this.x - snitch.x;
    let dy = this.y - snitch.y;
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

  // Once collide with the snitch, a flashing image will appear while the spell gets removed from the array in the main script (through snitch.frozen).
  //A sound effect will also be played.
  collide(snitch) {
    let d = dist(this.x, this.y, snitch.x, snitch.y)
    if (d < 30) {
      introspellSFX.play();
      image(this.image, width / 2, height / 2, 1400, 1400);
      snitch.frozen = true;
    }
  }
}
