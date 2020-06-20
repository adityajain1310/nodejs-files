let arr = [1, 2, 3, 4, 5, 6]

let arr2 = arr.filter(function(item) {
    return (item % 3 === 0)
})

console.log(arr2)

let menu = [
    "Panner Tikka",
    "Onion Rings",
    "Chicken Tandoori",
    "Egg Curry",
    "Garlic Naan"
]

function isVeg(food) {
    if(food.toLowerCase().indexOf("chicken") !== -1) return false;
    if(food.toLowerCase().indexOf("egg") !== -1) return false;
    return true;
}

function onionGarlicFree(food) {
    if(food.toLowerCase().indexOf("onion") !== -1) return false;
    if(food.toLowerCase().indexOf("garlic") !== -1) return false;
    return true;
}

let vegMenu = menu.filter(isVeg)
let jainMenu = menu.filter(isVeg).filter(onionGarlicFree)

console.log(vegMenu);
console.log(jainMenu);