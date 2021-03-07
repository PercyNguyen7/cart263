// This class is the tree trunk that blocks the path of stage 1. Player must use Wingardium leviosa spell to levitate it.
class TreeTrunk {
  constructor(treetrunkImage) {
    this.x = width / 2;
    this.y = 4 * height / 5;
    this.speed = 45;
    this.vy = 0;
    this.vx = 0;
    this.ax = 0;
    this.ay = 0;
    this.width = 800;
    this.height = 145;
    this.image = treetrunkImage;
    this.floatup = true;
    this.gravity = 0.047;
    this.SFXplaying = false
  }
  // Display the image of the tree trunk
  display() {
    image(treetrunkImage, this.x, this.y, this.width, this.height);
  }
  // Move the tree trunk so that it looks like it is levitating
  move() {
    this.x += this.vx;
    this.y += this.vy;
    // Move the tree trunk to the left and right based on its height to make the levitation look natural
    if (this.y <= 4 * height / 5 && this.y >= 3 * height / 5) {
      this.vx = random(0.2, 0.3);
    } else if (this.y < 3 * height / 5 && this.y >= 2.1 * height / 5) {
      this.vx = random(-0.5, -0.6);
    } else if (this.y < 2.1 * height / 5 && this.y > 1.6 * height / 5) {
      this.vx = random(0.1, 0.2);
    }
    // Once tree trunk is less than this height, make it float. Otherwise, it drops down.
    else if (this.y >= 1.2 * height / 5) {
      this.floatup = true;
    } else if (this.y <= 1.1 * height / 5) {
      this.floatup = false;
    }

    // if this floats is true then float up
    if (this.floatup === true) {
      this.vy = -5;
      this.vx += this.ax;
      this.vy += this.ay;

      this.ay += this.gravity;
    }
    if (this.floatup === true && this.y <= 1.21 * height / 5) {
      this.vy = random(-0.3, -0.5);
      this.vx = (-0.2, -0.3);
      this.ay = 0;

    }
    // if floatup is false then float down
    else if (this.floatup === false) {
      this.vy = random(0.4, 0.6);
      this.vx = (0.2, 0.3);
      this.ay = 0;
    }

  }
}
