let countdown = 7200;
let alreadyWin = false;

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
    if (!alreadyWin){
        countdown--
        document.querySelector("#countdown").innerHTML = fromSecondsToHours(countdown)

        if (countdown < 1){
            fetch("/answer",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    answer: "tictactictac"
                })
            }).then(res => res.json()).then(data => {
                if (data.error){
                    alert(data.error)
                } else {
                    alreadyWin = true
                    alert("Bonne réponse !")
                    window.location.href = "/"
                }
            })
        }
    }
}, 1000)