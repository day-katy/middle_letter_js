'use strict';

function middleLetter(word) {
  var a = (word.length)
  if(isOdd(a) === true) 
   { return word.split("")[(a / 2 ) - 0.5]
  } else {
    return word.split("")[(a/2) - 1] + word.split("")[(a / 2 )] 
  }
}

function isOdd(number) {
  if(number % 2 === 1){
    return true
  }
}