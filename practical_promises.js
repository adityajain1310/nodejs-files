function download (url) {
    return new Promise(function (resolve, reject) {
        if(!url.startsWith("http")) {
            reject(new Error ("Url does not starts with http"))
        }
        else {
            console.log('Start Downloading : ' + url)
            setTimeout(function () {
                let fileName = url.split('/').pop()
                resolve(fileName)
            }, 3000)
        }
    })
}

function upload(resizedFile) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let uploadedUrl = 'http://imgur.com/' + resizedFile
            resolve(uploadedUrl)
        }, 3000)
        console.log('Uploading... : ' + uploadedUrl)
    })
}

function resizeFile (fileName) {
    return new Promise(function (resolve, reject) {
        if(!fileName.endsWith("png")) {
            reject(new Error ("file is not png"))
        }
        else {
            console.log('File Resizing : ' + fileName)
            setTimeout(function () {
                let resizedFile = fileName.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            })
        }
    })
}

/*download("http://cb.lk/logo.png").then(function (fileName) {
    resizeFile(fileName).then(function(resizedFile) {
        console.log("resized file is at: " + resizedFile)
    })
})*/

download("http://cb.lk/logo.png")
    .then(resizeFile)
    .then(upload)
    .then(function (uploadedUrl) {
        console.log("File Uploaded at: " + uploadedUrl)
    })
    .catch(function (err) {
        console.error(err)
    }) 