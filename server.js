const express = require("express")
const app = express()
const session = require("express-session")
const router = require("./web")
const PORT = 8000

app.use(express.static(__dirname + "/assets"));
app.use(express.json())
app.use(session({
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server launched on http://localhost:${PORT}`)
})