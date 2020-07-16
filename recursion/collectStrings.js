function collectStrings(obj) {
    return Object.values(obj).reduce((strings, item) => {
        switch (typeof item) {
            case 'string':
                strings.push(item);
                break;
            case 'object':
                if (!!item && !Array.isArray(item)) {
                    strings = strings.concat(collectStrings(item));
                }
                break;
            default:
                break;
        }
        return strings;
    }, []);
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])