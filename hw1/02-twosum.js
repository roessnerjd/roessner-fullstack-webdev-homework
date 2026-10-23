/** Exercise 02 - Two Sum

Problem:

You are given an array of integers 'nums' and an integer 'target', write a function that returns indices of the two 
numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

**/

// func takes two args: nums and target, stores result as two_sum
const two_sum = function evaluate_nums(nums, target) {
  // start w/ 1st number and compare to each following to determine if result = target
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // if result of two nums = target, return, otherwise continue loop
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return []; // return empty array if there are no two nums that equal target
};

console.log(two_sum([2, 7, 11, 15], 9));
console.log(two_sum([3, 2, 4], 6));
console.log(two_sum([4, 4], 2));
console.log(two_sum([3, 3], 6));
console.log(two_sum([10, 2], 5));
