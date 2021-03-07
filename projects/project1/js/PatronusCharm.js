// Charm that push the dementors away from player.
class PatronusCharm {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.sizeMax = 400;
    this.deform = 40;
    this.transparency = 60;

    this.x2 = x;
    this.y2 = y;
    this.size2 = 1;
    this.sizeMax2 = 500;
    this.deform2 = 70;
    this.transparency2 = 80;
  }
  // Display the patronus charm consisted of 2 white, almost transparent circles!
  display() {
    push();
    noStroke();
    fill(255, 255, 255, this.transparency);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    fill(255, 255, 255, this.transparency2);
    ellipse(this.x2, this.y2, this.size2, this.size2);
    pop();
  }
  // Once casted, circles grow in size then resets to 1 when reach max size
  casted() {
    this.size += this.deform;
    this.size2 += this.deform2;

    if (this.size >= this.sizeMax) {
      this.size = 1;
    }
    if (this.size2 >= this.sizeMax2) {
      this.size2 = 1;
    }
  }

  // Patronus charm collides with dementors depending on both the dementors width or height and the spell's size. If collide, push dementors away.
  collide(dementors) {
    let d = dist(this.x, this.y, dementors.x, dementors.y)
    if (d < this.size / 2 + dementors.width / 2) {
      dementors.vx = -20;
      dementors.vy = -2;
    }
    let d2 = dist(this.x, this.y, dementors.x2, dementors.y2)
    if (d2 < this.size / 2 + dementors.width2 / 2) {
      dementors.vx2 = 20;
      dementors.vy2 = -2;
    }
    let d3 = dist(this.x, this.y, dementors.x3, dementors.y3)
    if (d3 < this.size / 2 + dementors.height3 / 2) {
      dementors.vx3 = -2;
      dementors.vy3 = -20;
    }
  }
}
