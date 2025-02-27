//Pattern2
//we are going to make
// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j <= i) pattern = pattern + " * ";
  }
  pattern = pattern + "\n";
}

console.log(pattern);
