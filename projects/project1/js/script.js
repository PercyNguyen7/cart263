"use strict";

/**
Harry Potter - Spellcaster
Percy Vinh TUan Dat Nguyen

Description
*/


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
       '*spell': castSpell,
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


   // castSpell()
}

function menu(){
  background(255,200,200);

  if (currentSpell === `Expelliarmus`){
    ellipse(0,0,50);
  }


  text(currentSpell + `!`, width / 3, height / 3)
}


function castSpell(spell){
  currentSpell = spell[0].toUpperCase() + spell.substring(1);
  console.log(currentSpell);






  // if (currentSpell = `hello`) {
  //   fill(0);
  //   ellipse(100,100,50);
  // }
}
