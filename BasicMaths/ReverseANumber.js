// Problem Statement: Given an integer N return the reverse of the given number.

// Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

const reverseDigits = function (digit) {
  let current,
    reverse = 0;
  while (digit > 0) {
    current = digit % 10;
    reverse = 10 * reverse + current;
    digit = Math.trunc(digit / 10);
  }
  return reverse;
};

console.log(reverseDigits(12345000));
