function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const halfIndex = Math.ceil(arr.length / 2);
    const halfValue = arr[halfIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === halfIndex) {
            continue;
        }
        if (arr[i] < halfValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [ ...quickSort(left), halfValue, ...quickSort(right) ];
}

console.log(quickSort([ 5,3,11,2,6,8,9,4 ]));

// Pick 6
// 5, 3, 2 and 4 are less than so those go to left and 6 belongs at index 4
// 5 will always belong there, so now recursively repeat on either side of 5

// Colt's implementation

function pivotArray(arr) {
    const halfIndex = Math.ceil(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {

    }
}

function swap(arr, i1, i2) {
    [ arr[i1], arr[i2] ] = [ arr[i2], arr[i1] ]
}
