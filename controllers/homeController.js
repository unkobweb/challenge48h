const path = require("path")

function helloWorld(req, res) {
    res.sendFile(path.join(__dirname,"../views","index.html"))
}

function loginForm(req, res) {
    console.log(req.body)
    req.session.blaze = req.body.blaze
    res.redirect("/")
}

function logout(req, res) {
    req.session.destroy()
    res.redirect("/")
}

module.exports = { helloWorld, loginForm, logout }