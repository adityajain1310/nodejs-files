function getfirstName(fullname) {
    return fullname.split(" ")[0];
}

function greeter (findName, fullname) {
    let firstname = findName(fullname);
    console.log("Hello " + firstname);
}

greeter(getfirstName, "Aditya Jain");

function helloSayer() {
    return getfirstName;
}

let getName = helloSayer();
console.log(getName("Aditya Jain"));





function createGreeter(name) {
    let firstname = name.split(" ")[0];
    function displayName() {
        console.log("Hello " + firstname);
    }
    return displayName;
}

let AdiGreeter = createGreeter("Aditya Jain");
let NamanGreeter = createGreeter("Naman Jain");

AdiGreeter();
NamanGreeter();

let newGreeter = createGreeter;
newGreeter("Harry Potter")();




function count(init, delta) {
    let val = init
    let counter = {
        incr : function() {
            val += delta;
        },
        decr : function() {
            val -= delta;
        },
        show : function() {
            console.log(val);
            return val;
        }
    }
    return counter;
}

let a = count(8, 2)
a.show();
a.incr();
a.show();

console.log(typeof a)
console.log(typeof a.show)
console.log(typeof a.show())
console.log(typeof a.incr())


