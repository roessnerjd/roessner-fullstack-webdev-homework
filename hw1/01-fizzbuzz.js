// Name: Jacob Roessner
// Date: 10/08/26
// Class: CS465
// HW: Exercise 01

/** Exercise 01 - Fizzbuzz

Problem: 

Given an integer n, return a string array answer (1-indexed) where:

answer[i] === "FizzBuzz" if i is divisible by 3 and 5.
answer[i] === "Fizz" if i is divisible by 3.
answer[i] === "Buzz" if i is divisible by 5.
answer[i] === i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

**/

const fizzbuzz = function evaluate_nums(n) {
  let answer = []; // needs to return string array answer

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 5 === 0) {
      answer.push("buzz");
    } else if (i % 3 === 0) {
      answer.push("fizz");
    } else {
      answer.push(String(i)); // i -> string to follow requirements
    }
  }

  return answer;
};

console.log(fizzbuzz(100)); // display iterations upto 100
