function capitalizeFirst(arr) {
    if (!arr.length) {
        return [];
    }
    let cap = arr[0];
    cap = cap[0].toUpperCase() + cap.slice(1);
    return [cap].concat(capitalizeFirst(arr.slice(1,arr.length)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
