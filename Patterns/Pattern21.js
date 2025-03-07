// Pattern 21
//
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

let pattern = "";
let m = 1;
for (let i = 0; i < 6; i++) {
  m = 1;
  for (let j = 0; j < 6; j++) {
    if (j <= i) {
      pattern = pattern + m;
      m === 0 ? (m = 1) : (m = 0);
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
