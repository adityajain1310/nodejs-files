function task (done) {
    console.log("We are doing a Task")
    setTimeout(done, 1000)
}

task (function () {
    console.log("Task was done");
})

console.log("We did a task")


let a = false

setTimeout(function () {
    a = true;
}, 1000)

while(!a) {
    console.log(1)
}

