const button = document.querySelector("#teleporter")

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

button.addEventListener("mouseover",() => {
    console.log("HOVER")
    console.log(window.screen)

    let randomLeft = getRandomInt(window.screen.availWidth*0.75)
    let randomTop = getRandomInt(window.screen.availHeight*0.75)

    document.querySelector("#teleporter").style.position = "absolute"
    document.querySelector("#teleporter").style.top = randomTop+"px"
    document.querySelector("#teleporter").style.left = randomLeft+"px"
})