// Pattern 14
//
//       1
//     2 3 2
//   3 4 5 4 3
// 4 5 6 7 6 5 4

let pattern = "";
let k;
for (let i = 0; i < 4; i++) {
  k = i + 1;
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      pattern = pattern + k;
      j < 3 ? k++ : k--;
    } else pattern = pattern + " ";
  }

  pattern = pattern + "\n";
}
console.log(pattern);
