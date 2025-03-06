//Pattern 16
//
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2
//         1

let pattern = "";
let k = 4;
let p;
for (let i = 0; i < 9; i++) {
  p = 1;
  for (let j = 0; j < 5; j++) {
    if (j >= k && j <= 4) {
      pattern = pattern + p;
      p++;
    } else pattern = pattern + " ";
  }
  i < 4 ? k-- : k++;
  pattern = pattern + "\n";
}
console.log(pattern);
