function charCount(str) {
    // make object to return at end
    const result = {};
    // loop over string, for each character
    for (let i = 0; i < str.length; i++) {
        // if char is not number/letter, do nothing
        // if (/[a-z0-9]/.test(char)) {
        // checking char code is faster!
        if (charCodeIsAlphaNumeric(str.charCodeAt(i))) {
            const char = str[i].toLowerCase();
            if (!!result[char]) { // if a char is a number/letter and is a key in object, add 1 to count
                result[char]++;
            } else { // if char is number/letter and not in object, add to object with value = 1
                result[char] = 1;
            }
        }
    }
    // return object of counts
    return result;
}

function charCodeIsAlphaNumeric(code) {
    return (code > 47 && code < 58) // 0-9
        || (code > 64 && code < 91) // A-Z
        || (code > 96 && code < 123) // a-z
}
