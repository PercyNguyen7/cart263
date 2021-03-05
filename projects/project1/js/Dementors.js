// Dementors class have 3 dementors that fly towards the middle, levitate in the air and grow in size.
// Dementors must be pushed away using the spell Expecto Patronum to complete the level.

class Dementors{
    constructor(dementorImage, dementor2Image, dementor3Image){
      this.x = -300,
      this.y = height+100,
      this.vx = 12;
      this.vy = -6;
      this.width = 300,
      this.height = 250,
      this.tint = 0,
      this.image = dementorImage,
      this.levitate = false;

      this.x2 = width + 500,
      this.y2 = -50,
      this.vx2 = -12;
      this.vy2 = 5.5;
      this.size2 = 0,
      this.width2 = 230,
      this.height2 = 195,
      this.image2 = dementor2Image,
      this.levitate2 = false;

      this.x3 = 3*width/4,
      this.y3 = -700,
      this.vx3 = -2.67;
      this.vy3 = 12;
      this.width3 = 130,
      this.height3 = 151,
      this.image3 = dementor3Image;
      this.levitate3 = false;

// the lx and ly for each dementor
      this.lx =0,
      this.ly = 0,
      this.lx2 = 0,
      this.ly2 = 0,
      this.lx3 = 0,
      this.ly3 = 0,
// levitate speed for all 3 dementors
      this.levitatespeed = 2;

    }

    display(){
      push();
      this.tint = this.tint +5;
      image(dementor3Image,this.x3,this.y3,this.width3,this.height3);
      image(dementor2Image,this.x2,this.y2,this.width2,this.height2);
      image(dementorImage,this.x,this.y,this.width,this.height);
      pop();

    }

// Move towards the middle of the screen from 3 sides, then levitate around (moving around randomly) once reach its constrain
    move(){
      this.x += this.vx;
      this.y += this.vy;
        // Levitate once reach width/4
        if (this.x >= width/4){
          this.levitate =true;
        }
// Second dementor comes after first dementor!
      this.x2 += this.vx2;
      this.y2 += this.vy2;

      if (this.x2 <= 3*width/4){
        this.levitate2 = true;
      }
// Movement for third dementor
      this.x3 += this.vx3;
      this.y3 += this.vy3;

      if (this.y3 >= height/3){
        this.levitate3 = true;
      }
    // }
  // If levitate is true then replace vx and vy with levitate speed
    if (this.levitate === true){
      this.width *= 1.005;
      this.height *= 1.005;
      this.vx = 0;
      this.vy = 0;
      this.vx += this.lx;
      this.vy += this.ly;

      let change = random(0, 0.1);
      if (change < 0.01) {
      this.lx = random(-this.levitatespeed,this.levitatespeed);
      this.ly = random(-this.levitatespeed,this.levitatespeed);
      }
    }
    if (this.levitate2 === true){
      this.width2 *= 1.005;
      this.height2*= 1.005;
      this.vx2 = 0;
      this.vy2 = 0;
      this.vx2 += this.lx2;
      this.vy2 += this.ly2;

      let change2 = random(0, 0.1);
      if (change2 < 0.01) {
      this.lx2 = random(-this.levitatespeed,this.levitatespeed);
      this.ly2 = random(-this.levitatespeed,this.levitatespeed);
      }
    }
    if (this.levitate3 === true){
      this.width3 *= 1.005;
      this.height3*= 1.005;
      this.vx3 =0;
      this.vy3 =0;
      this.vx3 += this.lx3;
      this.vy3 += this.ly3;

      let change3 = random(0, 0.1);
      if (change3 < 0.01) {
      this.lx3 = random(-this.levitatespeed,this.levitatespeed);
      this.ly3 = random(-this.levitatespeed,this.levitatespeed);
      }
    }

// Constrain each Demetor's movement
      this.width = constrain(this.width, 300, 1200);
      this.height = constrain (this.height, 250, 1000);

      this.width2 = constrain(this.width2, 230, 920);
      this.height2 = constrain(this.height2, 195, 780);

      this.width3 = constrain(this.width3, 130,520);
      this.height3 = constrain(this.height3, 151, 604);
    }
// Player wins if successfully push all dementors out of the screen. Lose if dementor is too great!
    disappear(){
      if (this.x + this.width/2 < 0 && this.x2 - this.width2/2 >width && this.y3 + this.height3/2 < 0 && this.levitate ===true){
        state = `stage3End`
        expectopatronusSFX.stop();
      }
      if (this.width === 1200){
        state = `dementorEnding`
        expectopatronusSFX.stop();
      }
    }

}
