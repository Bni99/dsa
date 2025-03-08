//Pattern 25
//
// 1
// 3 * 2
// 4 * 5 * 6
//10 * 9 * 8 * 7
//11 * 12 * 13 *14 *15
//

let pattern = "";
let k = 1;
let m = 0;
for (let i = 0; i < 5; i++) {
  m = i;
  for (let j = 0; j < 9; j++) {
    if (j <= 2 * i) {
      if (j % 2 !== 0) pattern = pattern + "*";
      else {
        if (i % 2 === 0) {
          pattern = pattern + k;
        } else {
          pattern = pattern + Number(k + m);
          m = m - 2;
        }
        k++;
      }
    } else pattern = pattern + " ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
