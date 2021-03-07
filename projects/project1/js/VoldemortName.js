//This class is responsible for the animation leading up to the Voldemort Ending (when player says the name Voldemort).
// First ellipse move quickly from left to right
// Second ellipse move from top to bottom and increase then decrease in size
// Voldemort pops in and casts spell on player
// Increase the transparency property of last ellipse to create the flash effect
class VoldemortName {
  constructor(voldemortnameImage, avadakedavraImage, avadakedavra2Image) {
    //Properties of ellipse 1
    this.x = -100;
    this.y = height / 2;
    this.vx = 150;
    this.vy = 0;
    this.width = 150;
    this.height = 600;

    //Properties of ellipse 2
    this.x2 = width / 2;
    this.y2 = -500;
    this.vx2 = 0;
    this.vy2 = 100;
    this.size2 = 50;

    // Properties of Voldemort casting spell
    this.x3 = width / 2,
      this.y3 = 3.5 * height / 5,
      this.width3 = 300,
      this.height3 = 300,
      this.tint3 = 0;
    this.image3 = voldemortnameImage;

    // Properties of the Avada Kedavra spell
    this.x4 = width / 2;
    this.y4 = 4 * height / 5;
    this.size4 = 0;
    this.image4 = avadakedavraImage;

    // Tint property of the flashing effect of last ellipse
    this.transparency5 = 0;
  }

  // If current spell is Voldemort, then the animation is queued and displayed
  display() {
    push();
    if (currentSpell === `Voldemort`) {

      fill(0, 10, 20, 70);
      ellipse(this.x, this.y, this.width, this.height);
      // Ellipse two queued once ellipse one touches width
      if (this.x >= width) {
        fill(0, 10, 20, 150);
        ellipse(this.x2, this.y2, this.size2);
        this.size2 += 100;
      }
      // Voldemort image queued once the y property of ellipse 2 is bigger than 6*height/7
      if (this.y2 >= 6 * height / 7) {
        this.size2 -= 150;
        this.width3 += 150;
        this.height3 += 150;
        this.tint3 += 50;
        this.tint3 = constrain(this.tint3, 0, 255);
        tint(255, this.tint3);
        image(this.image3, this.x3, this.y3, this.width3, this.height3);
        this.width3 = constrain(this.width3, 0, 600);
        this.height3 = constrain(this.height3, 0, 614);
      }
      // Avada Kedavra spell and flash effect queued once Voldemort is no longer transparent/ fully appears
      if (this.tint3 >= 255) {
        image(this.image4, this.x4, this.y4, this.size4, this.size4);

        // Animation effect for Avada Kedavra spell - switch between the 3 images in different spells
        if (this.image4 === avadakedavraImage) {
          this.image4 = avadakedavra2Image;
          this.size4 = 500;
        } else if (this.image4 === avadakedavra2Image) {
          this.image4 = avadakedavra3Image;
          this.size4 = 800;
        } else if (this.image4 === avadakedavra3Image) {
          this.image4 = avadakedavraImage;
          this.size4 = 200;
        }
        // Flash effect
        fill(239, 255, 190, this.transparency5);
        this.transparency5 += 60;
        ellipse(width / 2, height / 2, 8000);
      }
      // Queue in the Voldemort Name Ending once Voldemort's sound effect has stopped playing
      if (!voldemortnameSFX.isPlaying()) {
        state = `VNameEnding`;
        annyang.abort();
        stage123Soundtrack.stop();
        warSFX.stop();
        stage4Soundtrack.stop();
      }
      pop();
    }
  }
  // Move function of the animation triggered by calling Voldemort
  move() {
    if (currentSpell === `Voldemort`) {
      // Add vx and vy to the x and y properties of the first ellipse
      this.x += this.vx;
      this.y += this.vy;
    }
    //  Add vx and vy to x and y properties of ellipse 2 once first ellipse reaches width
    if (this.x >= width) {
      this.x2 += this.vx2;
      this.y2 += this.vy2;
    }
    // Constrain y and size properties of ellipse 2
    this.y2 = constrain(this.y2, -1000, 6 * height / 7);
    this.size2 = constrain(this.size2, 0, 700);
  }
}
