// My solution
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = i - 1; j >= 0; j --) {
            if (arr[i] < arr[j] && (!arr[j-1] || arr[j - 1] < arr[i])) {
                console.log('insert', arr[i], 'in front of', arr[j - 1]);
                const removed = arr.splice(i, 1)[0];
                arr.splice(j, 0, removed);
            }
        }
    }
    return arr;
}

// Slightly faster but still not great, splice is really slow!
function insertionSortTweaked(arr) {
    let result = [arr[0]];
    outer: for (let i = 1; i < arr.length; i ++) {
        for (let j = i - 1; j >= 0; j --) {
            if (arr[i] < result[j] && (!result[j-1] || result[j - 1] < arr[i])) {
                console.log('insert', arr[i], 'in front of', result[j - 1]);
                result.splice(j, 0, arr[i]);
                continue outer;
            }
        }
        result.push(arr[i]);
    }
    return result;
}

// Colt's solution
// His moves the value on each iteration instead of splicing out when needed
// His is way faster splice is not very performant, his basically shifts the value as you loop
// So the array is just all funky in result
function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i ++) {
        let currentVal = arr[i];
        // At the end of this loop, j+1 is the index where the value should go
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j --) {
            arr[j+1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([ 5,3,11,6,8,9 ]));
console.log(insertionSortTweaked([ 5,3,11,6,8,9 ]));
console.log(insertionSort2([ 5,3,11,6,8,9 ]));

