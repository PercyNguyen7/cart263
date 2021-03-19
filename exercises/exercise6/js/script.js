
/**************************************************
Exercise 6: Raving Redactionist
4 additions to the activity:
1. Modified HTML and CSS
2. Changed Text
3. Added in fade in and out animation effects
4. Added in background music

Source for soundtrack:
https://www.youtube.com/watch?v=4Lsjg1vmAig&ab_channel=PlayItBackwards
**************************************************/


"use strict";

$(`.top-secret`).on(`click`,fadeout);
$(`.top-secret`).one(`click`,playAudio);
setInterval(revelation,500);

// Audio that plays in the background on user's first click
function playAudio(event){
  $('audio#pop')[0].play()
}
// Fade out and in
function fadeout (event){

  $(this).animate({
    "opacity":0,
  },1000);

// This fades back in
  $(this).animate({
    "opacity":100,
  },500);
};

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
