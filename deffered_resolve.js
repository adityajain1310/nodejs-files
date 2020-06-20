function download_promise () {
    console.log("Starting to Download the file")
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            console.log("Download is complete")
            resolve();
        }, 3000)
    })
}

let downloadFile = download_promise()

setTimeout(function() {
    downloadFile.then(function () {
        console.log("After Download is complete")
    })
}, 5000)