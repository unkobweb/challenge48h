const path = require("path")

function helloWorld(req, res) {
    res.sendFile(path.join(__dirname,"../views","index.html"))
}

function loginForm(req, res) {
    console.log(req.body)
    res.redirect("/")
}

module.exports = { helloWorld, loginForm }