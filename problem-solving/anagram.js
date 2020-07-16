
// Given two strings, determine if str2 is an anagram of str1
// a word phrase or name formed by rearranging the letters
// Assuming these are all lowercase words
// Frequency Counter Problem
function validAnagram(str1, str2) {
    if (str1 === str2) {
        return true;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    // Sort is O(n * log n) complexity though
    // return str1.split('').sort().join('') === str2.split('').sort().join('');
    // So counting chars is better

    // My solution, does work!
    // const str1Map = {};

    // const str2Map = {};

    // for (let i of str1) {
    //     str1Map[i] = ++str1Map[i] || 1;
    // }

    // for (let j of str2) {
    //     str2Map[j] = ++str2Map[j] || 1;
    // }

    // for (let k in str1Map) {
    //     if (!(k in str2Map) || str2Map[k] !== str1Map[k]) {
    //         return false;
    //     }
    // }

    // Colt's solution, I like it! it is more concise
     const charMap = {};

    for (let i of str1) {
        charMap[i] = ++charMap[i] || 1;
    }

    for (let j of str2) {
        // At the end of the loop all items should be 0
        // so if we see 0 before the end, then there is a frequency imbalance
        // Or it means str2 has a char that was not in str1
        if (!charMap[j]) {
            return false;
        } else {
            charMap[j] = --charMap[j];
        }
    }
    return true;

}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
