function downloadFile (url, downloaded) {
    // We are downloading the file here
    // Let's assume it takes 3 seconds to download
    // we use setTimeout to generate fake delay

    console.log("Downloading File: " + url)

    setTimeout(function () {
        let filePath = "C:\\Downloads\\" + url.split('/').pop()
        console.log("file was downloaded to: " + filePath)
        downloaded(filePath)
    }, 3000)
}

function resizeFile (filePath, resized) {
    // We are resizing the file. It takes the 2 seconds
    // We again use a sameTimeout delay

    console.log("we are resizing : " + filePath)
    setTimeout(function () {
        let newPath = filePath.split(".")[0] + "-resized" + filePath.split(".")[1]
        resized(newPath)
    }, 2000)
}

function uploadFile (diskPath, uploaded) {
    setTimeout(function () {
        let uploadedPath = "http://cb.lk/uploads/" + diskPath.split('\\').pop()
        console.log("we uploaded to : " + uploadedPath)
        uploaded(uploadedPath) 
    })
}

downloadFile ("https://google.com/logo.png", function (downloadedPath) {
    console.log("we got the file at: " + downloadedPath)
    resizeFile (downloadedPath, function (resizedPath) {
        console.log("Resized file is at: " + resizedPath)
        uploadFile (resizedPath, function (uploadedUrl) {
            console.log("Uploaded file is at : " + uploadedUrl)
        })
    })
})

