
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
setInterval(revelation,500);

// Audio that plays in the background
$('audio#pop')[0].play()

function fadeout (event){

  $(this).animate({
    "opacity":0,
  },1000);

// This fades back in
  $(this).animate({
    "opacity":100,
  },50000);
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
