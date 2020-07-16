// Accepts a variable number of arguments and checks for duplicates
// return true if duplicates, false if not
// Multiple Pointers problem
function areThereDuplicates(...args) {
    if (args.length < 2) {
        return false;
    }

    let i = 0;
    let j = args.length -1;

    while (i < j) {
        if (args[i] === args[j]) {
            return true;
        } else {

        }
    }


}

function areThereDuplicatesFreqCounter(...args) {
    if (args.length < 2) {
        return false;
    }
    const map = {};
    for (let arg of args) {
        if (map[arg]) {
            return true;
        }
        map[arg] = 1;
    }
    // Only works for primitives
    return false;
}

function areThereDuplicatesSet(...args) {
    if (args.length < 2) {
        return false;
    }
    // Only works for primitives
    return new Set(args).size < args.length;
}

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b); // have to sort firts, not particularly efficient
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

console.log(areThereDuplicatesFreqCounter(1, 2, 3)) // false
console.log(areThereDuplicatesFreqCounter(1, 3, 3)) // true
console.log(areThereDuplicatesFreqCounter('b', 'a', 'c', 'a')) // true


