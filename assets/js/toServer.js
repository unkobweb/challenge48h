function sendToServer() {
  alert("Decryption key has been send by 'S0ph13V/-\\nd3rSH00t3n'");
  fetch("/GetDecryptKey", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
})
}