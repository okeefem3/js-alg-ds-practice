// Multiple Pointers problem

// Accept a sorted array of integers
// Find the first pair where sum is 0
// Return array that includes both values that sum to 0 or undefied if no pair exists

// Naive solution
function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}

// Better solution O(n)
function sumZero(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) { // Don't let the values equal each other at any point
        let sum = arr[i] + arr[j];
        if (sum === 0) {
            return [arr[i], arr[j]];
        } else if (sum > 0) { // Since the arr is sorted, move j down 1 and try again
            j--;
        } else { // move i up one and try again
            i++;
        }
    }
    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])) // [-3, 3]
// -4 + 10 = 6 so move j down because the next j will be smaller
// -4 + 3 = -1 so move i up because the next i will be larger
// -3 + 3 = 0 so return
