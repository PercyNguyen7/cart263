/**
Title of Project
Percy Vinh Tuan Dat Nguyeen

This is a template. You must fill in the title,
author, and this description to match your project!
*/


"use strict";


$(`#solved-dialog`).dialog({
  autoOpen:false,
  buttons:{
    "I know.": function(){
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
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    // Check if they got it
    if ($(this).text() === `Theremin`){
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});
