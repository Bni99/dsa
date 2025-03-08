//Pattern 24
//
//       1
//     2 1 2
//   3 2 1 2 3
// 4 3 2 1 2 3 4

let pattern = "";
let m = 0;
let k = 1;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      pattern = pattern + (k - m);
      j < 3 ? m++ : m--;
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
