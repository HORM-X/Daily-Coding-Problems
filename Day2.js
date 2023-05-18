/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

var isPalindrome = function (x) {
  const arr = x.toString();
  let lIndex = 0;
  let rIndex = arr.length - 1;
  while (lIndex < rIndex) {
    if (arr.charAt(lIndex) !== arr.charAt(rIndex)) {
      return false;
    }
    lIndex++;
    rIndex--;
  }
  return true;
};

console.log(isPalindrome(121));

/*
Time Complexity: O(n)

The time complexity is determined by the length of the string representation of the number, which is n.
The code uses a while loop that continues as long as lIndex is less than rIndex. Since lIndex and rIndex start at the ends of the string and move towards the center, the loop will run approximately n/2 times.
Within the loop, the code compares characters using arr.charAt(lIndex) and arr.charAt(rIndex). These operations have a time complexity of O(1).
Therefore, the overall time complexity of the code is O(n/2), which simplifies to O(n) in Big O notation.
Space Complexity: O(n)

The space complexity is determined by the space used to store the string representation of the number.
In the code, the string representation of the number is stored in the variable arr. The length of this string representation is n.
Therefore, the space complexity of the code is O(n) because it uses additional space proportional to the length of the input number.

*/
