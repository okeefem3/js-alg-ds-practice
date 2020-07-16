// Return the string argument reversed
function reverse(str) {
    return str.length <= 1 ? str : reverse(str.slice(1, str.length)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'