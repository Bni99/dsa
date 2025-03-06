// Pattern 11
//
//       *
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *

let pattern = "";
let k = 0;
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    if (j >= Math.abs(3 - i) && j <= 3 + k) {
      pattern = pattern + "*";
    } else pattern = pattern + " ";
  }
  i < 3 ? k++ : k--;
  pattern = pattern + "\n";
}
console.log(pattern);
