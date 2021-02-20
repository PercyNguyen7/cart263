"use strict";

/**
Harry Potter - Spellcaster
Percy Vinh TUan Dat Nguyen

Description
*/

let annyang;

let state = `menu`;

let currentSpell = ``;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(640,480);


  if (annyang) {
     let commands = {
       'hello *spell': castSpell
     };
     annyang.addCommands(commands);
     annyang.start();
   }
 }



/**
Description of draw()
*/
function draw() {
  background(0);

  switch (state) {
       case "menu":
           menu();
           break;

   }
}

function menu(){
  background(255,200,200);

}


function castSpell(spell){
  currentSpell = choice.toUpperCase();
  console.log(currentSpell);
  rect(0,0,250);

  if (currentSpell = `hello`) {
    fill(0);
    ellipse(100,100,50);
  }
}
