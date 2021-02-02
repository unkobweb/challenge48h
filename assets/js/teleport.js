alert("INTRUSION DÉTECTÉE, RÉINITIALISATION DE LA SESSION DANS 10 MINUTES")

let clearTimeoutSeconds = 600;

function twoDigits(number){
    if (String(number).length == 1){
        return "0"+number
    } else {
        return number
    }
}

function fromSecondsToMinutes(seconds){
    let minutes = 0

    if ((seconds / 60) > 0){
        minutes = Math.floor(seconds / 60)
        seconds -= minutes*60
    }
    if (seconds < 0){
        seconds=0
    }
    return `${twoDigits(minutes)}:${twoDigits(seconds)}`
}

setInterval(() => {
    clearTimeoutSeconds--
    document.querySelector("#clear-countdown").innerHTML = fromSecondsToMinutes(clearTimeoutSeconds)

    if (clearTimeoutSeconds < 1){
        window.location.href = "/"
    }

},1000)

const button = document.querySelector("#teleporter")

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

button.addEventListener("mouseover",() => {
    let randomLeft = getRandomInt(window.screen.availWidth*0.75)
    let randomTop = getRandomInt(window.screen.availHeight*0.75)

    if (document.querySelector("#teleporter")) {
        document.querySelector("#teleporter").style.position = "absolute"
        document.querySelector("#teleporter").style.top = randomTop+"px"
        document.querySelector("#teleporter").style.left = randomLeft+"px"
    }
})

button.addEventListener("click", (event) => {
    if (event.detail === 0) {
        console.log("Sale tricheur..")
    } else {
        fetch("/answer",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answer: {detail: event.detail, type: event.type}
            })
        }).then(res => res.json()).then(data => {
            if (data.error){
                alert(data.error)
            } else {
                alert(data.success)
                window.location.href = "/"
            }
        })
    }
})