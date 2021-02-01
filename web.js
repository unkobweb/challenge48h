const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const homeController = require("./controllers/homeController");

router.get("/", homeController.helloWorld)
router.post("/login", urlencodedParser, homeController.loginForm )

module.exports = router;