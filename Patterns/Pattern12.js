//Pattern 12
//
// *
// * *
// * * *
// * * * *
// * * *
// * *
// *

let pattern = "";
let k = 0;
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 4; j++) {
    if (j <= k) pattern = pattern + "*";
    else pattern = pattern + " ";
  }
  i < 3 ? k++ : k--;
  pattern = pattern + "\n";
}
console.log(pattern);
