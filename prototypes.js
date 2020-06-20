let p = {
    a : 10
}

let q = Object.create(p)
q.b = 20;

let r = Object.create(q)
r.c = 30;
r.b = 60;

console.log(p)
console.log(q)
console.log(r)
console.log(r.a + " " + r.b + " " + r.c)
p.b = 40
p.c = 50
console.log(p)
console.log(r.__proto__)
console.log("r.b: " + r.b)
console.log(r.b)
console.log("q.b: " + q.b)
console.log(r.__proto__.__proto__)