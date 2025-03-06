//Pattern 13
//
// * * * * * * *
//   * * * * *
//     * * *
//       *
//

let pattern = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 7; j++) {
    if (j >= i && j <= 6 - i) pattern = pattern + "*";
    else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
