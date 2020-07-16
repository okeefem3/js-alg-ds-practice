// Sliding window problem
// Given a string, return the length of the longest substring with distinct characters
function findLongestSubstring(str) {
    let subStrLen = 0;
    let tempSubStrLen = 0;
    let charMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const char = str[windowEnd];

        if (charMap[char] === undefined || charMap[char] < (windowEnd - tempSubStrLen)) {
            // Char doesn't exist in current substr, increase sub string length
            tempSubStrLen++;
        } else {
            // If the char does already exist in the current substr
            tempSubStrLen = windowEnd - charMap[char];
        }
        // Set the index where we found the char last
        charMap[char] = windowEnd;
        // Update the current subStrLen
        subStrLen = Math.max(subStrLen, tempSubStrLen);
    }
    return subStrLen;
}


console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
