const path = require("path")
const puzzles = ["whiteonwhite","binaryand64","spam","snowden","teleport","encryptedNetwork","finish"]

function giveMePuzzle(req, res){
    
    if (!req.session.puzzleLevel){
        req.session.puzzleLevel = 0
    }

    res.sendFile(path.join(__dirname,"../views",puzzles[req.session.puzzleLevel]+".html"))

}

function clue(req, res){
    if (puzzles[req.session.puzzleLevel] == "spam"){
        res.sendFile(path.join(__dirname,"../views","clue.html"))
    } else {
        res.redirect("/")
    }
}

/*function helloWorld(req, res) {
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

function thecode(req, res){
    res.sendFile(path.join(__dirname,"../views","youwin.html"))
}

function logout(req, res) {
    req.session.destroy()
    res.redirect("/")
}*/

module.exports = { giveMePuzzle, clue }