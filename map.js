let arr = [2, 12, 125, 34, 1, 20, 190]

let arr2 = arr.map(function(item) {
    return (item ** 2)
})

console.log(arr2)

let arr3 = arr.map(Math.sqrt)

console.log(arr3)