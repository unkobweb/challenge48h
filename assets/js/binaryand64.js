function get64baseEncodedInBinary(){
    fetch("/base64ToBinary", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => console.log(data.message))
}