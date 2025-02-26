//SelectionSort is finding minimum and swap algorithm
//so lets take an example [13,46,24,52,20,9]
// so the first step is finding the minimum in array from 0 to n-1 and swap it with arr[0] i.e. [9,46,24,52,20,13]
//now the first element is sorted right , we have to start from 2nd place that is find the minimum from 1 to n-1 and swap with arr[1] i.e. [9,13,24,52,20,46]
//first 2 elements are sorted , again the loop will start from 2 to n-1 and swap with arr[2] i.e. [9,13,20,52,24,46]
//again loop will start from 3 to n-1 and swap with arr[3] i.e. [9,13,20,24,52,46]
// again loop will start from 4 to n-1 and swap with arr[4] i.e. [9,13,20,24,46,52]
//So that is how selection sort works

//TimeComplexity : O(n2) nsquare

const selectionSort = function (arr) {
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    let minimum = i;
    for (let j = i; j < arrayLength; j++) {
      if (arr[j] < arr[minimum]) minimum = j;
    }
    if (i !== minimum) [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
  }
  console.log(arr);
};

//some improvements can be suggested here:
//first loop can be made run until secondlast element
//and we swap if  i and minimum are different

selectionSort([13, 46, 24, 52, 20, 9]);
