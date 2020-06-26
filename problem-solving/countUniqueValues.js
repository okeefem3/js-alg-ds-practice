
// Accepts a sorted array, counts the unique values in the array
function countUniqueValues(arr) {
    if (arr.length < 2) {
        return arr.length;
    }
    let i = 0;
    let j = 1;


    // My solution, does work!
    // Note for loops work in both cases too
    let count = 0;
    while (i < arr.length) {
        if (arr[i] !== arr[j]) {
            count++;
            i = j;
        }
        j++;
    }
    return count;

    // Colt's solution, also neat! if allowed to alter the array
    // while (j < arr.length) {
    //     if (arr[i] !== arr[j]) {
    //         i++;
    //         arr[i] = arr[j];
    //     }
    //     j++;
    // }

    // return i + 1;
}

function countUniqueValuesSet(arr) {
    return new Set(arr).size;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

