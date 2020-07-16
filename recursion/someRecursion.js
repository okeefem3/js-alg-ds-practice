// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// if the callbacj returns true for any item of the array return true, otherwise false
function someRecursive(arr, fn) {
    if (!arr || !arr.length) {
        return false;
    }
    return !!fn(arr.pop()) || someRecursive(arr, fn);
}


console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false
