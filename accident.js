'use strict';

function middleLetter(word) {
  var a = (word.length)
  if(isOdd(a)) 
   { splitOddWord
  } else {
    splitEvenWord
  }
}

function splitOddWord(word) {
  word.split("")[(a / 2 ) - 0.5]
}

function splitEvenWord(word) {
  word.split("")[(a/2) - 1] + word.split("")[(a / 2 )] 
}

function isOdd(number) {
  if(number % 2 === 1){
    return true
  }
}