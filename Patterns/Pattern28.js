//Pattern28
//    1
//   A B
//  1 2 3
// A B C D

let pattern = "";

let k = true;
let m = 1;
let s = 0;
for (let i = 0; i < 4; i++) {
  k = true;
  m = 1;
  s = 0;
  for (let j = 0; j < 7; j++) {
    if (j >= 3 - i && j <= 3 + i) {
      {
        if (k) {
          if (i % 2 == 0) {
            pattern = pattern + m;
            m++;
          } else {
            pattern = pattern + String.fromCharCode(65 + s);
            s++;
          }
          k = false;
        } else {
          pattern = pattern + " ";
          k = true;
        }
      }
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
