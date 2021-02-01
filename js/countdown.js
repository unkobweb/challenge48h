let countdown = 7200;

function twoDigits(number){
    if (String(number).length == 1){
        return "0"+number
    } else {
        return number
    }
}

function fromSecondsToHours(seconds){
    let hours = 0
    let minutes = 0

    if ((seconds / 3600) > 0){
        hours = Math.floor(seconds / 3600)
        seconds -= hours*3600
    }
    if ((seconds / 60) > 0){
        minutes = Math.floor(seconds / 60)
        seconds -= minutes*60
    }
    if (seconds < 0){
        seconds=0
    }
    return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
}

setInterval(() => {
    countdown--
    document.querySelector("#countdown").innerHTML = fromSecondsToHours(countdown)

    if (countdown < 1){
        console.log("CHALLENGE FINISHED")
    }

}, 1000)