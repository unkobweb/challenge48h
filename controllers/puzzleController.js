const path = require("path")
const puzzles = ["whiteonwhite","binaryand64","spam","countdown","snowden","teleport","encryptedNetwork","finish"]
const answers = ["iwasblind","3nC0d3d","adblockplz","tictactictac","fromnsatorussia","zaap","thatwasthelast"]
const names = ["Mathias","Alexandre","Louis","Martin","Mathéo","Elouan"]

function giveMePuzzle(req, res){
    
    if (!req.session.puzzleLevel){
        req.session.puzzleLevel = 0
    }

    if (req.session.puzzleLevel == 5 && !req.session.startTeleportAt){
        req.session.startTeleportAt = Math.floor(new Date().getTime()/1000)
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

function answer(req, res){

    // Si la réponse concerne la question 6
    if (req.session.puzzleLevel == 5) {
        let { type, detail } = req.body.answer
        if ((Math.floor(new Date().getTime()/1000) - req.session.startTeleportAt) >= 600){
            req.session.puzzleLevel = 0
            delete req.session.startTeleportAt
            res.json({success: "SESSION CLEARED"})
        }
        else if (type == "click" && detail > 0){
            req.session.puzzleLevel++
            res.json({success: "Bonne réponse !"})
        } else {
            res.json({error: "Mauvaise réponse :'("})
        }
    }
    // Si la réponse concerne la question 3
    else if (req.session.puzzleLevel == 2) {
        if (names.indexOf(req.body.answer) !== -1){
            req.session.puzzleLevel++
            res.json({success: "Bien joué !"})
        } else {
            res.json({error: "Mauvaise réponse :'("})
        }
    } 
    // Si elle concerne une autre question
    else {
        console.log(answers[req.session.puzzleLevel])
        console.log(req.body.answer)
        if (answers[req.session.puzzleLevel] !== req.body.answer){
            res.json({error: "Mauvaise réponse :'("})
        } else {
            req.session.puzzleLevel++
            res.json({success: "Bien joué !"})
        }
    }
}

module.exports = { giveMePuzzle, clue, answer }