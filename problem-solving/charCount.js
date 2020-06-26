function charCount(str) {
    // make object to return at end
    const result = {};
    // loop over string, for each character
    for (let char of str) {
        // if char is not number/letter, do nothing
        // if (/[a-z0-9]/.test(char)) {
        // checking char code is faster!
        if (charCodeIsAlphaNumeric(char.charCodeAt(0))) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
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
