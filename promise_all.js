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
        let uploadedUrl = 'http://imgur.com/' + resizedFile
        setTimeout(function () {
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

Promise.all([
    download("http://cb.lk/logo.png"),
    download("http://cb.lk/banner.png"),
    download("http://cb.lk/promo.png")
]).then (function (downloadValues) {
    console.log(downloadValues)
    return Promise.all(downloadValues.map(resizeFile))
}).then (function (resizeValues) {
    console.log(resizeValues)
    return Promise.all(resizeValues.map(upload))
}).then (function (uploadValues) {
    console.log(uploadValues)
}).catch(function (err) {
    console.error(err)
})