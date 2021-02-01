const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const homeController = require("./controllers/homeController");

router.use("/", (req, res, next) => {
    console.log(req.session)
    next()
})
router.get("/", homeController.helloWorld)
router.get("/logout", homeController.logout)
router.post("/login", urlencodedParser, homeController.loginForm )

module.exports = router;