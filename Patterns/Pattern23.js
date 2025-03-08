//Pattern 23
//
// A
// B A
// C B A
// D C B A

let pattern = "";
let m = 65;
let k = 0;
for (let i = 0; i < 4; i++) {
  k = 0;
  for (let j = 0; j < 4; j++) {
    if (j <= i) {
      pattern = pattern + String.fromCharCode(m - k);
      k++;
    } else pattern = pattern + " ";
  }
  m++;
  pattern = pattern + "\n";
}
console.log(pattern);
