function filtrarPares(array) {
    return array.filter((value) => {
        const par = value % 2
        return par === 0
    })
}

const nums = [2, 9, 32, 45, 57, 921, 4, 8]

console.log(filtrarPares(nums))
