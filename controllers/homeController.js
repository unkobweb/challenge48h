const path = require("path")

function helloWorld(req, res) {
    res.sendFile(path.join(__dirname,"../views","index.html"))
}

function loginForm(req, res) {
    console.log(req.body)
    req.session.blaze = req.body.blaze
    res.redirect("/")
}

function teleport(req, res) {
    res.sendFile(path.join(__dirname,"../views","teleport.html"))
}

function countdown(req, res) {
    res.sendFile(path.join(__dirname,"../views","countdown.html"))
}

function logout(req, res) {
    req.session.destroy()
    res.redirect("/")
}

module.exports = { helloWorld, loginForm, logout, teleport, countdown, thecode }