const path = require("path")

function snowden(req, res) {
    res.sendFile(path.join(__dirname,"../views","snowden.html"))
}

function acceptCode(req, res) {
    console.log(req.body)
    res.redirect('/snowden')
}

module.exports = { snowden, acceptCode }