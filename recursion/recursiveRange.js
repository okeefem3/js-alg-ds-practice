
// Add all numers from - to the number passed
function recursiveRange(n) {
    return n === 0 ? n : n + recursiveRange(n - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 
