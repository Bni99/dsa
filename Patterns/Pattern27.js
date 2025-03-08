// Pattern27
//     *
//    **
//   ***
//   |**
// * | *
// **|
// ***
// **
// *

let pattern = "";
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 5; j++) {
    if (i < 4) {
      if (i <= 2) {
        if (j >= 4 - i) pattern = pattern + "*";
        else pattern = pattern + " ";
      }
      if (i >= 3 && i <= 4) {
        if (j >= i) pattern = pattern + "*";
        else if ((j == 2) & (i == 3)) {
          pattern = pattern + "|";
        } else {
          pattern = pattern + " ";
        }
      }
    }
    if (i > 4) {
      if (i >= 4 && i <= 6) {
        if (j <= Math.abs(4 - i)) pattern = pattern + "*";
        else if ((j == 2) & (i == 5)) {
          pattern = pattern + "|";
        } else pattern = pattern + " ";
      } else {
        if (j <= Math.abs(8 - i)) pattern = pattern + "*";
        else pattern = pattern + " ";
      }
    }
    if (i === 4) {
      if (j == 0 || j == 4) {
        pattern = pattern + "*";
      } else if ((j == 2) & (i == 4)) {
        pattern = pattern + "|";
      } else {
        pattern = pattern + " ";
      }
    }
  }
  pattern = pattern + "\n";
}
console.log(pattern);
