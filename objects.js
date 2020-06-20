let x = {
    a : 10,
    b : "Asd",
    c : [1, 2, 3],
    d : false,
    e : {
        p : "Adff",
        q : true 
    }
}

x.f = "Aditya"
x.a = 20
console.log(x)



let obj = {
    aNumber : 100,
    aString : "Adi",
    aFunction : function () {
        console.log(this.aNumber + " " + this.aString)
    }
}

obj.aFunction()