
// Given two ints, find out if the numbers have the same frequency of digits
// Return a boolean
function sameFrequency(n1, n2) {
    const n1String = n1.toString();
    const n2String = n2.toString();

    if (n1String.length !== n2String.length) {
        return false;
    }

    const digitMap = n1String.split('').reduce((map, char) => {
        map[char] = ++map[char] || 1;
        return map;
    }, {});


    for (let char of n2String.split('')) {
        if (!digitMap[char]) {
            return false;
        }
        digitMap[char]--;
    }



    return Object.keys(digitMap).every(k => digitMap[k] === 0);
}

console.log(sameFrequency(182, 281)); // true;
console.log(sameFrequency(34, 14)); // false;
console.log(sameFrequency(3589578, 5879385)); // true;
console.log(sameFrequency(22, 222)); // false;
