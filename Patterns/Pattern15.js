//Pattern15
//
// 6 5 4 3 2 1 0
// 5 4 3 2 1 0
// 4 3 2 1 0
// 3 2 1 0
// 2 1 0
// 1 0
// 0

let pattern = "";
let k;
for (let i = 0; i < 7; i++) {
  k = 6 - i;
  for (let j = 0; j < 7; j++) {
    if (j >= 0 && j <= 6 - i) {
      pattern = pattern + k;
      k--;
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
