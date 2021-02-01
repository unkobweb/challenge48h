const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const homeController = require("./controllers/homeController");
const snowdenController = require("./controllers/snowdenController");
const constructController = require("./controllers/constructController");

router.use("/", (req, res, next) => {
    console.log(req.session)
    next()
})
router.get("/", homeController.helloWorld)
router.get("/snowden", snowdenController.snowden)
router.get("/construct", constructController.construct)

router.get("/logout", homeController.logout)
router.post("/login", urlencodedParser, homeController.loginForm )
router.get("/snowden", snowdenController.snowden)
router.get("/teleport", homeController.teleport)

router.post("/acceptCode", urlencodedParser, snowdenController.acceptCode)


module.exports = router;