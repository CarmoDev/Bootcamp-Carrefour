const myArray = [30, 20, 3219, 20, 30, 210, 5, 9, 5]

function ValoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(ValoresUnicos(myArray))