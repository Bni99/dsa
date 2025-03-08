// Pattern 30

// ABCDEFG
// ABC EFG
// AB   FG
// A     G

let pattern = "";
let m = 65;
for (let i = 0; i < 4; i++) {
  m = 65;
  for (let j = 0; j < 7; j++) {
    if ((j >= 0 && j <= 3 - i) || j >= 3 + i) {
      pattern = pattern + String.fromCharCode(m);
    } else {
      pattern = pattern + " ";
    }
    m++;
  }
  pattern = pattern + "\n";
}
console.log(pattern);
