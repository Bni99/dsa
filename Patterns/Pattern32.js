let pattern = "";
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    if (j === i) {
      pattern = pattern + "\\";
    } else if (j === 6 - i) {
      pattern = pattern + "/";
    } else {
      pattern = pattern + "*";
    }
  }
  pattern = pattern + "\n";
}
console.log(pattern);
