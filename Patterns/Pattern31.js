//Pattern31

// 0
// 0 1
// 0 2 4
// 0 3 6 9
// 0 4 8 12 16

let pattern = "";
let m = 0;
for (let i = 0; i < 5; i++) {
  m = 0;
  for (let j = 0; j < 5; j++) {
    if (j <= i) {
      pattern = pattern + m * i + " ";
      m++;
    } else {
      pattern = pattern + " ";
    }
  }
  pattern = pattern + "\n";
}
console.log(pattern);
