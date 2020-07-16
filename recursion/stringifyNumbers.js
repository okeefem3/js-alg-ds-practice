function stringifyNumbers(obj) {
    return Object.keys(obj).reduce((strObj, key) => {
        let item = obj[key];
        switch (typeof item) {
            case 'number':
                item = item.toString();
                break;
            case 'object':
                item = !!item && !Array.isArray(item) ?
                    stringifyNumbers(item) : item ;
                break;
            default:
                break;
        }
        strObj[key] = item;
        return strObj;
    }, {});
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));


// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
