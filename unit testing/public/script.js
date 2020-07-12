$(function () {
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcFareBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let getrateBtn = $('#getrate')
    let rateDiv = $('#rates')

    calcFareBtn.click(function () {
        $.post(
            '/calcfare',
            {km: kmBox.val(),
            min: minBox.val()},
            function (data) {
                fareDiv.text(data.fare)
        })
    })

    getrateBtn.click(function () {
        $.get(
            '/rates',
            function (data) {
                let prettyRateData = `
                Fixed Fare = Rs. ${data.fixed} for ${data.minkm} KM
                <br>
                Fare (Distance) = Rs. ${data.perKm} / KM
                <br>
                Fare (Waiting) = Rs. ${data.perMin} / min (after ${data.freeMin} min)
                ` 
                rateDiv.html(prettyRateData)       
            }
        )
    })
})


