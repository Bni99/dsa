//So now we are going to print this pattern
//
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= 4 - i) pattern = pattern + " * ";
    else pattern = pattern + "   ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
