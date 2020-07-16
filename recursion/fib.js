// Return nth number of fibonacci sequence




function fib(n) {
    if (n <= 0) {
        return;
    }
    if (n <= 2) {
        return 1;
    }
    function calculateNthFib(fibArr = [ 1, 1 ]) {
        if (fibArr.length >= n) {
            return fibArr;
        }
        const newFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(newFib);
        return calculateNthFib(fibArr); 
    }
    return calculateNthFib().pop();
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465


// Colt's solution

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
