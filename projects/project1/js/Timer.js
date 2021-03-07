// This small timer moves from the left to the right. Once it reaches the right end of the rectangle, Voldemort will cast his spell.
class Timer{
    constructor(timerImage){
      this.x = 50,
      this.y = 450,
      this.vx = 0;
      this.width = 40,
      this.height = 47,
      this.tint = 220,
      this.slowed = false;
      this.lostwand = false;

//    Transparency of the rectangle box
      this.transparency2 = 160
    }
// Display the timer. Timer  formed of a long rectangle and the Slytherin symbol.
    display(){
      push();
      noStroke();
// Map the color  of the rectangle box to the x property of the Slytherin house symbol image
      let r = map(this.x,50,590,0,133);
      let g = map(this.x,50,590,0,210);
      let b = map(this.x,50,590,0,100);
      fill(r,g,b,this.transparency2);
// The rectangle right behind the Slytherin symbol.
      rect(50,450,540,10);
      image(timerImage,this.x,this.y,this.width,this.height);
      pop();
    }

// Move the Slytherin timer from left to right and constrain it to the rectangle!
    move(voldemort){
      this.x += this.vx;
      this.x = constrain(this.x,50, 590)
      if (voldemort.countered === true){
// Slow down if this is slowed (caused by stupefy spell)
        if (this.slowed === true && this.lostwand === false){
          this.vx = 2.4;
        }
// Freeze it if Voldemort lost his wand (caused by Expelliarmus spell)
        else if (this.lostwand === true){
          this.vx = 0;
        }
// Else if wand is not lost then this set this to between 5 to 7
        else if (this.lostwand === false){
          this.vx = random(4,6);
        }
      }
// Else if Voldemort is not countered then the timer stops! This is the period Voldemort's spell is casted and yet to be countered!
      else if (voldemort.countered === false){
        this.vx = 0;
      }

// If Slytherin house image reaches the end of the rectangle, then Voldemort is no longer countered and will cast another spell!
// Also reset the x property of the timer!
      if (this.x === 590){
        voldemort.countered = false;
        this.x = 50;
        avadakedavraSFX.play();
// Reset slowed property when time's out
        if (this.slowed === true){
          this.slowed = false;
        }
// Voldemort retrieves his wand when time's out
        if (this.lostwand === true){
          this.lostwand = false;
        }
      }
    }
}
