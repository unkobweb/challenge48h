const path = require("path")

function construct(req, res) {
    res.sendFile(path.join(__dirname,"../views","toServer.html"))
}

module.exports = { construct }