function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middle = Math.floor((end + start) / 2);
        const middleItem = arr[middle];
        if (middleItem === item) {
            return middle;
        } else if (middleItem < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}


console.log(binarySearch([ 1,2,3,4,5,6,7,8,9,10 ], 10));
