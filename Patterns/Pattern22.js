//Pattern 22
//
//
// * * * * * * *
// *           *
// *   * * *   *
// *   *   *   *
// *   * * *   *
// *           *
// * * * * * * *

let pattern = "";

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    if (
      i == 0 ||
      i == 6 ||
      j == 0 ||
      j == 6 ||
      (i >= 2 && i <= 4 && j >= 2 && j <= 4 && (i != 3 || j != 3))
    )
      pattern = pattern + "*";
    else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
