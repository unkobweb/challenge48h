const path = require("path")

function construct(req, res) {
    res.sendFile(path.join(__dirname,"../views","construct.html"))
}

module.exports = { construct }