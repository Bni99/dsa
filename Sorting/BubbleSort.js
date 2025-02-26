//So bubble sort is do adjacent swaps and after each swap push the largest element in the end
//lets take an example [4,1,5,2,3]
//First loop
//[4,1,5,2,3](comparing 4 and 1)
//[1,4,5,2,3](swapped 4 and 1 and now comparing 4 and 5)
//[1,4,5,2,3](no swaps and now comparing 5 and 2)
//[1,4,2,5,3](swapped and now comparing 5 and 3)
//[1,4,2,3,5](got largest element at the end)

//Second loop
//[1,4,2,3,5](comparing 1 and 4)
//[1,4,2,3,5](no swap now comparing 4 and 2)
//[1,2,4,3,5](swapped and now comparing 4 and 3)
//[1,2,3,4,5](got 2nd largest elemnt at end now)

//3rd loop
//[1,2,3,4,5](comparing 1 and 2)
//[1,2,3,4,5](no swaps ,comparing 2 and 3)
//[1,2,3,4,5](got 3rd largest element at the end)

//4th loop
//[1,2,3,4,5](comparing 1 and 2)
//[1,2,3,4,5](no swaps as we got fourth largest element at the end)

//So we can note here that the array length is 5 but we get sorted array in 4 loops so the outer loop needs to run just for n-1 iterations
//So for first loop comaprisons were 4 so it can be said when i=0; j=n-i-1
//second loop comparisons were 3 , i=1 , j=n-i-1
//3rd loop comparisons were 2
//4th loop comparisons were 1

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  console.log(arr);
};

bubbleSort([13, 46, 24, 52, 20, 9]);
