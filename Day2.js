/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

function palindrome(x) {
  for (let i = 0; i <= x.length; i++) {
    for (let k = i; (k = x.length); i--) {
      if (x[i] === x[k]) {
        console.log("True, its a palyndrome");
      } else {
        console.log("False, it's not  a palyndrome");
      }
    }
  }
}

palindrome("Bar");
