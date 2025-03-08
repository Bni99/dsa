//Pattern 26
//
//         A
//       C B
//     F E D
//   J I H G
// O N M L K

let pattern = "";
let k = 65;
let m;
for (let i = 0; i < 5; i++) {
  m = i;
  for (let j = 0; j < 5; j++) {
    if (j >= 4 - i && j <= 4) {
      pattern = pattern + String.fromCharCode(k + m);
      m = m - 2;
      k++;
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
