//Pattern 33

// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********

let pattern = "";
let k = 8;

for (let i = 0; i < 9; i++) {
  i >= 5 ? k-- : null;
  for (let j = 0; j < 9; j++) {
    if (i < 5) {
      if ((j >= 0 && j <= 4 - i) || (j >= 4 + i && j <= 8)) {
        pattern = pattern + "*";
      } else pattern = pattern + " ";
    } else if (i >= 5) {
      console.log(j, k);
      if ((j >= 0 && j <= i - 4) || (j >= k && j <= 8)) {
        pattern = pattern + "*";
      } else pattern = pattern + " ";
    }
  }
  pattern = pattern + "\n";
}
console.log(pattern);
