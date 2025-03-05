//Pattern 7
//
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

let pattern = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 9; j++) {
    if (i % 2 === 0) {
      if (j >= 4 - i && j <= 4 + i && j % 2 === 0) pattern = pattern + "*";
      else pattern = pattern + " ";
    }
    if (i % 2 !== 0) {
      if (j >= 4 - i && j <= 4 + i && j % 2 !== 0) pattern = pattern + "*";
      else pattern = pattern + " ";
    }
  }
  pattern = pattern + "\n";
}

console.log(pattern);
