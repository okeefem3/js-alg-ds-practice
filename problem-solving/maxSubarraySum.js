
// Sliding window problem
// Accept array of ints and number n. Calculate the max sum of n 
// consecutive elements in array
// Window problem
function maxSubarraySumNaive(arr, n) {
    if (arr.length < n) {
        return;
    }
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let window = arr.slice(i, i + n);
        if (window.length < n) {
            return maxSum;
        }
        console.log('win', window);
        let sum = window.reduce((acc, v) => acc + v, 0);
        maxSum = sum > maxSum ? sum : maxSum;
    }
    return maxSum;
}

// Colt's solution, very clever
// [2,6,9,2,1,8,5,6,3]
// n = 3
// First sum is 2 + 6 + 9 = 17
// Then take 17 - (arr[0] (2)) + (arr[3] (2)) to get the next "window"
// Basically remove the first item of the window, and add the new item of the new window
// take max of sums
// Repeat until done 
function maxSubarraySum(arr, n) {
    if (arr.length < n) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 2)); // 7
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // undefined