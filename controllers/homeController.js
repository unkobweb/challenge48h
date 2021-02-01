const path = require("path")

function helloWorld(req, res) {
    res.sendFile(path.join(__dirname,"../views","index.html"))
}

module.exports = { helloWorld }