//  Pattern 19
//
//    * * * * *
//   * * * * *
//  * * * * *
// * * * * *

let pattern = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 8; j++) {
    if (j >= 3 - i && j <= 7 - i) pattern = pattern + "*";
    else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
