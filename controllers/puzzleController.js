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

function checkPostion(req, res) {
    let {x, y} = req.body
    if(x == 36.295684 && y ==-76.224770) {
        res.json({message: "Bien joué, le code est 'fromnsatorussia'"})
    }
}

function sendToServer(req, res) {
    let message = {
        "destinataire" : "xX_d@rkg@m3ur_Xx",
        "message" : "Hi, you find the decryption key here! check a decryptor online to see what the password is",
        "key" : "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIK97vFdIgdT+wtcR0q9rSwtqNLaQ9NoNMdEmlMnxIc0v4QW5b7YVAukYa8QTq34jKadhP94L3XetAtie5yjiH6/iYdLOiHAriVN4YTBI5ypfvuNESDsZVv3Baj0XU2ybCko0pEarqu4B4D2OPCaNUuGHlRRK7b+O20DAg1tqeCjAgMBAAECgYEAgLqiWeRpbO2zcSwaxeycZbNPVsyxm6Yu0UUq7lVpm/bD2zrwW0iE+DGSPNzBm2nukt7l5ORhVp1AiTUeoMwjx7J/3XKOmbIqk3jG3FOHhbEns2H4ma0mQ25gIwpAIvRBfNOgf9J+ynj95fG3erH2BJA+jYmTTszKg1zxDE6JvoECQQDxW/IlmQCjnblGKfdSCqM1FtHcA4DGkrH1CNLUY/kP3jHdiCuc655rJHLOjLVuEJ58pLdC1/Y5OBPoI5ByKyvPAkEAiqw308K5IuMT2SXapLhDbwWQ7eElXJpr+RY4qZP4Uq8IaZRVKnyKstw0PgbTemggGECvHU3hROGDu0GZ/iMO7QJBANxdEoz5UPgRvWMuVbz2MWT7XMf/+sdSkGAkmjmIvZGbUPPuq8Mt7Qnt0VR8a/n9+nXa/edtvkUnyiUcs3lJqUkCQGqKO+4O6cxa6BHqWlw5UV3HyfxpARpvbcsWfnwSujNUVMNA+lnFC461TdHlzq55t0bK039RKWSRWnMQyK4O41UCQAOjyplW4xM+Ad6gwa39mR+ysenzVOPAaDb6pHJx86razvVHR1LtP9bVniI7glaP9QKrUJUgHXF9wBXL8ExpzJk=",
        "encrypt" : "RSA1024",
        "type_key" : "private_key"
    }
    res.send(message)
}

function construct(req, res) {
    res.sendFile(path.join(__dirname,"../views","toServer.html"))
}

function snowden(req, res) {
    res.sendFile(path.join(__dirname,"../views","snowden.html"))
}

function acceptCode(req, res) {
    console.log(req.body)
    res.redirect('/snowden')
}

function infoSnowden(req, res) {
    let json = {
        "data" : {
            "first_name": "RWR3YXJkIEpvc2VwaA==",
            "last_name": "U25vd2Rlbg==",
            "birth_name": "RWR3YXJkIEpvc2VwaCBTbm93ZGVu",
            "birthday": "MjEganVpbiAxOTgz",
            "birth_city": {
               "city": "RWxpemFiZXRoIENpdHk=",
               "state": "Q2Fyb2xpbmUgZHUgbm9yZA==",
               "pays": "RXRhdHMtVW5pcw==",
               "coordonnée": {
                  "longitude": "MzYuMjk1Njg0",
                  "latitude": "LTc2LjIyNDc3MA=="
               },
               "population": "MTggNjgz"
            },
            "profession": "SW5mb3JtYXRpY2llbg==",
            "pays_de_residence": "UnVzc2ll",
            "activite_principale": "QWRtaW5pc3RyYXRldXIgc3lzdMOobWVzIGNoZXogQm9veiBBbGxlbiBIYW1pbHRvbg==",
            "autre_activite": "UsOpdsOpbGF0ZXVyIGRlcyBwcm9ncmFtbWVzIGRlIHN1cnZlaWxsYW5jZSDDqWxlY3Ryb25pcXVlIChQUklTTSwgWEtleXNjb3JlKSBkZSBjaXRveWVucywgZCdlbnRyZXByaXNlcyBldCBkJ8OJdGF0cyBwYXIgbGVzIGFnZW5jZXMgZGUgcmVuc2VpZ25lbWVudHMgYW3DqXJpY2FpbmVzIChOU0EsIEZCSSksIGJyaXRhbm5pcXVlcyAoR0NIUSksIGNhbmFkaWVubmVzIChDU0VDKSwgYXVzdHJhbGllbm5lcyAoRFNEKSBldCBuw6lvLXrDqWxhbmRhaXNlcyAoR0NTQik="
        },
        "hint" : "Find your way",
        "encrypt" : "BASE64"
    }
    res.json({json})
}


module.exports = { giveMePuzzle, clue, answer, checkPostion, sendToServer, construct, snowden, acceptCode, infoSnowden }