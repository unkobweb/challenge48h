function snowden() {
    fetch("/infoSnowden", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => console.log(data.json))
}

function gps(x, y){
    fetch("/isRightPostion", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x: x,
            y: y
        })
    }).then(res => res.json()).then(data => console.log(data.message))
}

