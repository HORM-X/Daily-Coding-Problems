/* 
Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?
*/

function add(target) {
  arr = [10, 15, 3, 7];
  for (i = 0; i <= arr.length; i++) {
    for (k = i + 1; k <= arr.length; k++) {
      if (arr[i] + arr[k] == target) {
        console.log(true);
        console.log(arr[i], arr[k]);
      }
    }
  }
}

add(17);

/* Time complexity: 0(n)^2 - We have two for loops nested */
/* The space complexity is O(1) since the algorithm only uses a constant amount of extra space.*/
