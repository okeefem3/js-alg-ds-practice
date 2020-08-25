function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const half = Math.ceil(arr.length / 2);
    return mergeArrays(mergeSort(arr.slice(0, half)), arr.slice(half));
}

function mergeArrays(n, m) {
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < n.length || j < m.length) {
        if (j >= m.length || n[i] < m[j]) {
            merged.push(n[i]);
            i++;
        } else {
            merged.push(m[j]);
            j++;
        }
    }
    return merged;
}


console.log(mergeSort([ 5,3,11,6,8,9 ]));
// console.log(mergeArrays([ 5,3,11 ], [ 6,8,9 ]));

// split into [5,3] [11,6] [8,9]
// split into [5] [3] [11] [6] [8] [9]
// merge into [3,5] [6,11] [8,9]
// merge into [3,5,6,8,9,11]
