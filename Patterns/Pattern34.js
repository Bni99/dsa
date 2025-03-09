//Pattern 34

//    0
//   121
//  23432
// 3456543
//  23432
//   121
//    0

let pattern = "";
let k = 0;
let m = -1;
let s = 0;
for (let i = 0; i < 7; i++) {
  i >= 4 ? k++ : null;
  i <= 3 ? m++ : m--;
  s = 0;
  for (let j = 0; j < 7; j++) {
    if (i <= 3) {
      if (j >= 3 - i && j <= 3 + i) {
        pattern = pattern + Number(m + s);
        j < 3 ? s++ : s--;
      } else pattern = pattern + " ";
    } else if (i >= 4) {
      if (j >= k && j <= 9 - i) {
        pattern = pattern + Number(m + s);
        j < 3 ? s++ : s--;
      } else pattern = pattern + " ";
    }
  }

  pattern = pattern + "\n";
}
console.log(pattern);
