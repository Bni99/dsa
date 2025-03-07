//Pattern20
//
//       1
//     1 2 A
//   1 2 3 A B
// 1 2 3 4 A B C

let pattern = "";
let k;
let m;
for (let i = 0; i < 4; i++) {
  k = 1;
  m = 65;
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      if (j < 4) {
        pattern = pattern + k;
        k++;
      } else {
        pattern = pattern + String.fromCharCode(m);
        m++;
      }
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
