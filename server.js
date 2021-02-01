const express = require("express")
const app = express()
const router = require("./web")
const PORT = 8000

app.use(express.static(__dirname + "/assets"));
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`)
})