// O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            console.log('swapping', arr[i], 'with', arr[min]);
            swap(arr, i, min);
        }
    }
    return arr;
}

function swap(arr, i1, i2) {
    [ arr[i1], arr[i2] ] = [ arr[i2], arr[i1] ]
}

console.log(selectionSort([ 5,3,11,6,8,9 ]));

