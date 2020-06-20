function Fruit (color, taste) {
    this.color = color;
    this.taste = taste;
}

let apple = new Fruit("Red", "Sweet");
let orange = new Fruit("Orange", "Sour");
let mango = {
    color : "Yellow", taste : "Sweet"
}

console.log(apple)
console.log(orange)
console.log(mango)



function fun () {
    this.p = "something";
    return 20;
}

let ob1 = fun();
let ob2 = new fun();

console.log(ob1);
console.log(ob2);
console.log(ob1.p);
console.log(ob2.p);

