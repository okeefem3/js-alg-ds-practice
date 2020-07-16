// Multiple Pointers
// Check if the chars in the first string are a subsequence of the second string
// In any sequence
function isSubsequence(sub, str) {
    let subIndex = 0;
    let stringIndex = 0;

    while (subIndex < sub.length && stringIndex < str.length) {
        if (sub[subIndex] === str[stringIndex]) {
            subIndex++;
        }
        stringIndex++;
    }
    return subIndex === sub.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false