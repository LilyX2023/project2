// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const jobController = require("./controllers/job")

// get .env variables
const {DATABASE_URL, SECRET, PORT} = process.env





// create app object
const app = express()

// Middleware
app.use(morgan("dev")); 
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use('/job', jobController)

// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})




// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})