// Return product of all numbers in arr
function productOfArray(arr) {
    function product(total, nums) {
        return nums.length ? total * product(nums.pop(), nums) : total;
    }
    return product(1, arr);
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60

// Colt's solution

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
