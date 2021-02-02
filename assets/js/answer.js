document.querySelector("#submiter").addEventListener("click",() => {
    let res = document.querySelector("#answerinput").value

    fetch("/answer",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({answer: res})
    }).then(res => res.json()).then(data => {
        if (data.error){
            alert(data.error)
        } else {
            alert("Bonne réponse !")
            window.location.href = "/"
        }
    })
})