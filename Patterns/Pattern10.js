// Pattern 10
//
// A B C D C B A
// A B C   C B A
// A B       B A
// A           A

let pattern = "";
let k;
for (let i = 0; i < 4; i++) {
  k = 0;
  for (let j = 0; j < 7; j++) {
    if ((j >= 0 && j <= 3 - i) || (j >= 3 + i && j <= 6)) {
      pattern = pattern + String.fromCharCode(65 + k);
    } else pattern = pattern + " ";
    j < 3 ? k++ : k--;
  }
  pattern = pattern + "\n";
}
console.log(pattern);
