// Pattern 17
//
//       A
//     A B A
//   A B C B A
// A B C D C B A

let pattern = "";
let k;
for (let i = 0; i < 4; i++) {
  k = 0;
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      pattern = pattern + String.fromCharCode(65 + k);
      j < 3 ? k++ : k--;
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
