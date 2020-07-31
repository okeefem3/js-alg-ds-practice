// O(n^2)
function bubbleSort(arr) {
 for (let i = arr.length - 1; i >= 0; i --) {
     let swapsDone = false;
     for (let j = 0; j < i; j ++) {
         if (arr[j] > arr[j + 1]) {
             console.log('swapping', arr[j], 'with', arr[j + 1]);
             swap(arr, j, j + 1);
             swapsDone = true;
         }
     }
     // Optimization to avoid extra looping
     if (!swapsDone) {
         break;
     }
 }
 return arr;
}

function swap(arr, i1, i2) {
    [ arr[i1], arr[i2] ] = [ arr[i2], arr[i1] ]
}

console.log(bubbleSort([ 5,3,11,6,8,9 ]));

// first round
// i = 9
// j = 5
// j + 1 = 3
// SWAP [ 3,5,11,6,8,9 ]
// i = 9
// j = 5
// j + 1 = 11
// i = 9
// j = 11
// j + 1 = 6
// SWAP [ 3,5,6,11,8,9 ]
// i = 9
// j = 11
// j + 1 = 8
// SWAP [ 3,5,6,8,11,9 ]
// i = 9
// j = 11
// j + 1 = 9
// SWAP [ 3,5,6,8,9,11 ]
// i = 9
// j = 3
// j + 1 = 5
// At this point we keep going until i = 0 and break!
