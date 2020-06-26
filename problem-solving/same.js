// Accept 2 arrays, return true if every value in one array has a corresponding
// value squared in the second array at the same frequency

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const baseMap = {};

    const squaresMap = {};

    // Colt's naive solution
    // for (let i of arr1) {
    //     index = arr2.indexOf(i ** 2);
    //     if (index === -1) {
    //         return false
    //     }
    //     arr2.splice(index, 1); // remove the match and keep checking
    // }

    // My solution - ended up being very similar to Colt's final solution! success!
    for (let i of arr1) {
        baseMap[i] = ++baseMap[i] || 1;
    }

    for (let j of arr2) {
        squaresMap[j] = ++squaresMap[j] || 1;
    }

    for (let k in baseMap) {
        const squared = k ** 2;
        if (!(squared in squaresMap) || squaresMap[squared] !== baseMap[k]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1,])); // false