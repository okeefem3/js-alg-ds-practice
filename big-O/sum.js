const { performance } = require('perf_hooks');

// O(n) time complexity, or linear f(n) = n complexity
function sumLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i; // n number of operations
  }
  return total;
}

// Constant time complexity f(n) = 1
function sumMathematically(n) {
  return (n * (n + 1)) / 2; // 3 operations
}

const n = 1000000000;

let t1 = performance.now();
sumLoop(n);
let t2 = performance.now();
console.log('Using loop: ', (t2 - t1) / 1000);

t1 = performance.now();
sumMathematically(n);
t2 = performance.now();
console.log('Using math: ', (t2 - t1) / 1000);

// O(n^2)
function printAllPairs(n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(i, j);
        }
    }
}