//Pattern 18
//
//       A 1
//     A B 1 2
//   A B C 1 2 3
// A B C D 1 2 3 4

let pattern = "";
let k;
let m;
for (let i = 0; i < 4; i++) {
  k = 1;
  m = 0;
  for (let j = 0; j < 8; j++) {
    if (j >= 3 - i && j <= 4 + i) {
      if (j <= 3) {
        pattern = pattern + String.fromCharCode(65 + m);
        m++;
      } else {
        pattern = pattern + k;
        k++;
      }
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
