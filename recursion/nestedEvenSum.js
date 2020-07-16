const perf_hooks = require('perf_hooks');
const performance = perf_hooks.performance;

// Return the sum of all even numbers in obj recursively
function nestedEvenSum(obj) {
    return Object.values(obj).reduce((sum, item) => {
        switch (typeof item) {
            case 'number':
                return item % 2 === 0 ? sum + item : sum;
            case 'object':
                return !!item ? sum + nestedEvenSum(item) : sum;
            default:
                return sum;
        }
    }, 0);
}

// Colt's, 9% faster than mine
function nestedEvenSum2(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum2(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

function run() {
    let start = performance.now();
    console.log(nestedEvenSum(obj1)); // 6
    console.log(nestedEvenSum(obj2)); // 10
    let end = performance.now();
    const result1 = end - start;
    console.log(result1);

    start = performance.now();
    console.log(nestedEvenSum2(obj1)); // 6
    console.log(nestedEvenSum2(obj2)); // 10
    end = performance.now();
    const result2 = end - start;
    console.log(result2);
}

run();
