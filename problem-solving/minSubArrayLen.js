// Sliding Window Problem
// Accepts an array of positive ints and a positive int that corresponds to the
// minimum sum of a contigous subarray of the given array
// Return the minimum length of one such subarry
function minSubArrayLen(arr, targetSum) {
    let sum = 0;
    let windowStart = 0;
    let windowEnd = 0;
    let subArrLength = Infinity;

    while (windowStart < arr.length) {
        if (sum < targetSum && windowEnd < arr.length) {
            // Add one to the window
            sum += arr[windowEnd];
            windowEnd++;
        } else if (sum >= targetSum) {
            subArrLength = Math.min(subArrLength, windowEnd - windowStart);
            sum -= arr[windowStart];
            windowStart++;
        } else {
            break;
        }
    }
    return subArrLength < Infinity ? subArrLength : 0;
}


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([1, 2, 4, 5, 6], 9)); // 2 
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // [62] 1 
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

