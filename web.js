const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const puzzleController = require("./controllers/puzzleController");

router.use("/", (req, res, next) => {
    console.log(req.session)
    next()
})

router.get("/", puzzleController.giveMePuzzle)
router.get("/clue", puzzleController.clue)
router.post("/answer", urlencodedParser, puzzleController.answer)

module.exports = router;