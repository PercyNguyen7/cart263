// Lord Voldemort at the final stage - Stage5.
class Voldemort{
    constructor(voldemortgreetImage,voldemortcastImage){
      this.x = width/2;
      this.y = 2*height/3;
      this.vy = 0;
      this.vx = 0;
      this.width = 60;
      this.height = 76;
      this.image = voldemortgreetImage;
      this.hp = 1000;
      this.countered = false;
      this.vulnerable = false;
      this.stupefyhurt = false;
      this.incendiohurt = false;
      this.expelliarmushurt = false;
      this.confringohurt = false;
      this.afterburn = false;
      this.afterburndamage = 0;

      this.x2 = width/2;
      this.y2 = 2*height/3;
      this.vx2 = random(-4,4);
      this.vy2 = random(-4,4);
      this.ax2 = 0,
      this.ay2 = 0,
      this.acceleration2 = 0.05,
      this.maxSpeed2 = 5,
      this.size2 = 5,
      this.grow2 = 0,
      this.image2 = voldemortspellImage;

// Third item: The image of Voldemort hurt by spells! Image shown depends on the spell casted against Voldemort.
      this.image3;
      this.x3 = width/2,
      this.y3 = height/2,
      this.width3 = 740,
      this.height3 = 480;
    }

    display(){

// Display Voldemort
      image(this.image,this.x,this.y,this.width,this.height);
      if (this.size2 <=15){
        this.image =voldemortcastImage;
      }
      else if(this.size2 >15){
        this.image= voldemortgreetImage;
      }

// Display Voldemort's HP
  displayText(`HP:`+int(this.hp), 22, width / 2,4.4*height / 8,217,254,177);

// Display Voldermort's spell
      image(this.image2, this.x2, this.y2, this.size2, this.size2);
      this.grow2 = random(6,7);
      this.size2 += this.grow2;
      this.size2 = constrain(this.size2,0,700);
// If Voldemort's spell reaches this size, player loses.
      if (this.size2 >= 699){
        state = `loseEnding`
        stage4Soundtrack.stop();
        annyang.abort();
        loseEndingSFX.play();
      }

      if (this.image2 === voldemortspellImage){
        this.image2 = voldemortspell2Image;
      }
      else if (this.image2 === voldemortspell2Image){
        this.image2 = voldemortspellImage
      }

// RESET x, y and size values of the spell once it has been countered
      if (this.countered ===true){
        this.x2 = width/2;
        this.y2 = 2*height/3;
        this.size2 = 1;
       }
// If afterburn is true then reduce the after burn damage from his HP. (Afterburn effect caused by Incendio spell)
      if (this.afterburn === true){
        this.hp -= this.afterburndamage;
      }
// If he has less than 1.1 HP then turn afterburn to false.
      if (this.hp <=1.1){
        this.afterburn = false;
      }
// Voldemort is immortal. Whenever hp drops below 1, it remains 1. Player may only achieve the win Ending through using the Expelliarmus spell on Voldemort
      if (this.hp <=1){
        this.hp = 1
      }
    }
    Voldemorthurt(){
      // If stupefy hits, display Voldemort hit by the spell until the image width reaches certain size!
              if(this.stupefyhurt === true){
                this.image3 = stupefyeffectImage;
                image(this.image3,this.x3,this.y3,this.width3,this.height3);
                this.width3= this.width3 +25;
                this.height3 = this.height3 +18;
                if (this.width3 >= 900){
                  this.width3 = 740;
                  this.height3 = 480;
                  this.stupefyhurt = false;
                }
              }
      // If stupefy hits, display Voldemort hit by the spell until the image width reaches certain size!
              if(this.incendiohurt === true){
                this.image3 = incendioeffectImage;
                image(this.image3,this.x3,this.y3,this.width3,this.height3);
                this.width3= this.width3 +25;
                this.height3 = this.height3 +18;
                if (this.width3 >= 900){
                  this.width3 = 740;
                  this.height3 = 480;
                  this.incendiohurt = false;
                }
              }
              if(this.expelliarmushurt === true){
                this.image3 = expelliarmuseffectImage;
                image(this.image3,this.x3,this.y3,this.width3,this.height3);
                this.width3= this.width3 +25;
                this.height3 = this.height3 +18;
                // displayText(`-`+ expelliarmusspell.damage, 40, 5*width / 6,height / 6,188,77,114);
                if (this.width3 >= 900){
                  this.width3 = 740;
                  this.height3 = 480;
                  this.expelliarmushurt = false;
                }
              }
              if(this.confringohurt === true){
                this.image3 = confringoeffectImage;
                image(this.image3,this.x3,this.y3,this.width3,this.height3);
                this.width3= this.width3 +25;
                this.height3 = this.height3 +18;
                // displayText(`-`+ confringospell.damage, 40, 5*width / 6,height / 6,188,77,114);
                if (this.width3 >= 900){
                  this.width3 = 740;
                  this.height3 = 480;
                  this.confringohurt = false;
                }
              }
    }
    move(){
      // MOVE VOLDY'S SPELL
      this.x2 += this.vx2;
      this.y2 += this.vy2;
      // Add acceleration tp the movement of tee and constrain it
      this.vx2 += this.ax2;
      this.vx2 = constrain(this.vx2, -this.maxSpeed2, this.maxSpeed2);
      this.vy2 += this.ay2;
      this.vy2 = constrain(this.vy2, -this.maxSpeed2, this.maxSpeed2);

      // MOVE TO THE CENTER;
      let dx = this.x2 - width/2;
      let dy = this.y2 - height/2;
      // If x distance is negative the spell should move right
      if (dx < 0) {
      this.ax2 = this.acceleration2;
     }
     // If x distance is positive the spell should move left
     else {
       this.ax2 = -this.acceleration2;
     }
     // If y distance is negative, the spell should move up
     if (dy < 0) {
       this.ay2 = this.acceleration2;
     }
     // If y distance is positive, the spell should move down
     else {
       this.ay2 = -this.acceleration2;
     }
   }


 }
