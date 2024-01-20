// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const jobController = require("./controllers/job")
const userController = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

// get .env variables
const {DATABASE_URL, SECRET, PORT} = process.env





// create app object
const app = express()

////////////////////////////////////////////////////
// Register our Middleware
////////////////////////////////////////////////////
//normal middleware
app.use(morgan("dev")); //logger
app.use(methodOverride("_method")); // override form submissions
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies
app.use(express.static("public")); // serve files from public folder
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
  saveUninitialized: true,
  resave: false
}))


//routers
app.use('/job', jobController)
app.use("/user", userController)
// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})




// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})