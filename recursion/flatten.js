const perf_hooks = require('perf_hooks');
const performance = perf_hooks.performance;
// Accepts array of arrays and returns flattened array
function flatten1(arr, flattened = []) {
    if (!arr || !arr.length) {
        return flattened;
    }
    if (Array.isArray(arr[0])) {
        flattened = flattened.concat(flattened, flatten1(arr[0], []))
    } else {
        flattened.push(arr[0]);
    }
    return flatten1(arr.slice(1), flattened);
}

let start = performance.now();
console.log(flatten1([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten1([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten1([[1], [2], [3]])); // [1,2,3]
console.log(flatten1([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
let end = performance.now();
const result1 = end - start
console.log(result1);

// about 10% slower using jsbench.me
function flatten2(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten2(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

start = performance.now();
console.log(flatten2([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten2([[1], [2], [3]])); // [1,2,3]
console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
end = performance.now();
const result2 = end - start;
console.log(result2);