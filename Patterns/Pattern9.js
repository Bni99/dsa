//Pattern 9
//
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

let pattern = "";
let k;
for (let i = 0; i < 4; i++) {
  k = 1;
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      pattern = pattern + k;
      j < 3 ? k++ : k--;
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
