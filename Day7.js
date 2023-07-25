/*
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element 
appears only once. The relative order of the elements should 
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, 
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of 
nums contain the unique elements in the order they were present 
in nums initially. The remaining elements of nums are not important 
as well as the size of nums.
Return k.

*************************************
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
*************************************

*/

var removeDuplicates = function (nums) {
  //Index set as one
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    //As long the index number from Left side are not equal from the ones on the right
    if (nums[i] !== nums[i + 1]) {
      //Unique number is added to the index position
      nums[index] = nums[i + 1];
      //Index is incremented
      index++;
    }
  }
  return index;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
