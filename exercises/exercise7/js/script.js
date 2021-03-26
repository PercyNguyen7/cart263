/**
Title of Project
Percy Vinh Tuan Dat Nguyeen

4 New Changes to the Project:
1. Added Baka Mitai soundtrack once player decoded the song's name successfully
2. Changed CSS and background
3. Changed text and Title
4. Allow user to remove last character from the answer box by pressing BACKSPACE. (They may pull characters to the box multiple time)
*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen:false,
  buttons:{
    "DAME DAME": function(){
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`,function(event){
  $(this).addClass(`found`,500);
  $(this).draggable({
    helper:`clone`
  });
});

$(`#answer`).droppable({
  drop:function(event,ui){
    let letter = ui.draggable.text();
    $(this).append(letter);

    // Check if they got it
    if ($(this).text() === `Bakamitai`){
      $(`#solved-dialog`).dialog(`open`);
      $(`#music`)[0].play();
    }
  }
});

window.addEventListener("keydown", checkKeyPress, false);
// Function that removes last character from answer text
function checkKeyPress(key){
  if(key.keyCode == "8"){
    let answerText = $(`#answer`).text()
    $(`#answer`).text(answerText.slice(0,-1));
  }
}
