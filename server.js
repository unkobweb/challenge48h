const express = require("express")
const app = express()
const router = require("./web")
const PORT = 8000

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`)
})