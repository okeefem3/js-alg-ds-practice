function substringSearch(str, subStr) {
    let count = 0;
    const sliceLen = subStr.length;
    for (let i = 0; i < str.length; i ++) {
        const slice = str.slice(i, i + sliceLen);
        if (slice.length < sliceLen) {
            break;
        }
        if (slice === subStr) {
            count ++;
        }
    }
    return count;
}

console.log(substringSearch('hello', 'hell'));
console.log(substringSearch('hello', 'l'));
console.log(substringSearch('lori loled', 'lol'));
console.log(substringSearch('lori loled', 'pop'));

