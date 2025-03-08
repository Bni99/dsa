//Pattern29
// *   *
//  * *
//   *
//  * *
// *   *

let pattern = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === i || j === 4 - i) {
      pattern = pattern + "*";
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
