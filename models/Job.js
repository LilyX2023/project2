//////////////////////////////////
// Import Deps and Connection
/////////////////////////////////
const mongoose = require("./connection")

//Create job list mondel
const {Schema, model} = mongoose
//Schema
const jobListSchema = {
    companyName: String,
    jobTitle: String,
    applyingDate: String,
    firstInterview: Boolean,
    comments: String,
    offer: Boolean,
    username: String
}
//Model
const Job = model('Job', jobListSchema)

//export the model
module.exports = Job