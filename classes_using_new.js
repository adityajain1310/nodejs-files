function Person (name, age) {
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    // now mAge is private variable
    let mAge = age
    this.isAdult = function () {
        return mAge > 18
    }
}

let p = new Person ("Aditya Jain", 20)
let h = new Person ("Harry Potter", 13)

console.log(p)
console.log(h)

p.middleName = "Kumar"
console.log(p)
console.log(p.isAdult())
console.log(p.mAge)