let arr = [2, 1,3, 0, 4, 6,19, 12]


arr.sort(function(a, b) {
    console.log(arr)
    console.log(a + " " + b)
    return (a%10 - b%10)
})
console.log(arr)