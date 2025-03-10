// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

const isPallindrome = function (number) {
  let reverse = 0,
    current,
    originalNumber = number;
  if (number < 0) return false;
  else {
    while (number > 0) {
      current = number % 10;
      reverse = reverse * 10 + current;
      number = Math.trunc(number / 10);
    }
    return originalNumber === reverse ? true : false;
  }
};

console.log(isPallindrome(303));
