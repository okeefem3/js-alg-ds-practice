
// Given a sorted array of integers and a target average, determine if there is a pair
// in the array that create that average
// Multiple pointer problem
function averagePair(arr, targetAverage) {
    if (arr.length < 2) {
        return false;
    }

    let i = 0;
    let j = arr.length - 1;
    let tempAverage;
    while (i < j) {
        tempAverage = avergagePair(arr[i], arr[j]);
        if (tempAverage === targetAverage) {
            return true;
        } else if (tempAverage < targetAverage) {
            i++;
        } else {
            j--;
        }
    }

    return false;

}

function avergagePair(n1, n2) {
    return (n1 + n2) / 2
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
