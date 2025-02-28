//Pattern 4
//
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) pattern = pattern + " * ";
    else pattern = pattern + "   ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
