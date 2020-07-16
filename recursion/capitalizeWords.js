// Given an array of words, return a new array with all items capitalized
function capitalizeWords(arr) {
    if (!arr.length) {
        return [];
    }
    let cap = arr[0].toUpperCase();
    return [cap].concat(capitalizeWords(arr.slice(1, arr.length)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']