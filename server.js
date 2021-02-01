const express = require("express")
const app = express()
const router = require("./web")
const path = require("path")
const PORT = 8000

app.use(express.static(__dirname + "/assets"));

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`)
})