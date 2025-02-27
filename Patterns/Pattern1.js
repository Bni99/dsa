//So here we are going to print this pattern :
//
// * * * *
// * * * *
// * * * *
// * * * *

let pattern = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    pattern = pattern + " * ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
