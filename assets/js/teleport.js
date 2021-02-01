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
    console.log(event.target)
    if (event.detail === 0) {
        console.log("Sale tricheur..")
    } else {
        console.log("realclick")
    }
})