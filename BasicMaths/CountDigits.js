// Problem Statement: Given an integer N, return the number of digits in N.

const countDigits = function (digit) {
  let ctr = 0;
  while (digit > 0) {
    ctr++;
    digit = Math.trunc(digit / 10);
  }
  return ctr;
};

console.log(countDigits(1234));
