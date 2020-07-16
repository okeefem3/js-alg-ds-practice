// Return the factorial result of the given number using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n <= 1 ? n : n * factorial(n - 1);
}

console.log(factorial(4)); // 24
