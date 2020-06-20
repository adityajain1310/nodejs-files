function someAsyncTask (callback) {
    console.log("Beginning of Task")
    setTimeout(function () {
        console.log("End of Task")
        callback();
    }, 3000)
}

let someTaskPromise = function () {
    new Promise (function (resolve, reject) {
        someAsyncTask (resolve)
    })}

someTaskPromise()
    .then(function () {
        console.log("After Task is Completed")
    })