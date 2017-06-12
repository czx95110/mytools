'use strict';

function randomNum(min, max) {
  min = min || 0;
  max = max || 255;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
*
* @param 
* */
function randomColor(rMin, rMax, gMin, gMax, bMin, bMax) {
  var r = randomNum(rMin, rMax);
  var g = randomNum(gMin, gMax);
  var b = randomNum(bMin, bMax);

  return "rgb(" + r + ',' + g + ',' + b + ")";
}

console.log(randomColor(1, 100, 100, 180, 181, 255));