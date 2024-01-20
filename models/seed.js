//////////////////////////////////
// Import dependencies
/////////////////////////////////
const mongoose = require("./connection");
const Job = require('./Job')

//////////////////////////////////
// Seed Code
//////////////////////////////////
//////////////////////////////////
// Import dependencies
/////////////////////////////////
const mongoose = require("./connection");
const Fruit = require("./Fruit");

//////////////////////////////////
// Seed Code
//////////////////////////////////
mongoose.connection.on("open", async () => {
  // seed code goes in this function

  // Run any database queries in this function
  try {
    const jobLogs = [
        {
            companyName: "TechCorp",
            jobTitle: "Software Engineer",
            applyingDate: "2024-01-06",
            firstInterview: true,
            comments: "Positive first interview. Looking forward to the next round.",
            offer: false
        },
        {
            companyName: "Global Innovations",
            jobTitle: "Product Manager",
            applyingDate: "2024-01-08",
            firstInterview: false,
            comments: "Application under review.",
            offer: false
        },
        {
            companyName: "Finance Solutions Ltd",
            jobTitle: "Financial Analyst",
            applyingDate: "2024-01-10",
            firstInterview: true,
            comments: "Awaiting feedback after the first interview.",
            offer: false
        },
        {
            companyName: "HealthTech Solutions",
            jobTitle: "Data Scientist",
            applyingDate: "2024-01-12",
            firstInterview: true,
            comments: "Received an offer. Negotiating terms.",
            offer: true
        },
        {
            companyName: "InnoTech Labs",
            jobTitle: "UX/UI Designer",
            applyingDate: "2024-01-15",
            firstInterview: false,
            comments: "No response yet.",
            offer: false
        },
        {
            companyName: "Green Energy Co.",
            jobTitle: "Environmental Engineer",
            applyingDate: "2024-01-18",
            firstInterview: true,
            comments: "Positive feedback. Awaiting further updates.",
            offer: false
        }
    ]
    //Delete all fruits
    await Job.deleteMany({})

    //Seed
    const jobs = await Job.create(jobLogs)

  // log the create fruits to confirm
  console.log("--------Job CREATED----------");
  console.log(data);
  console.log("--------job CREATED----------");

  // close the DB connection
  mongoose.connection.close();
  } catch (error) {
    console.log("-------", error.message, "-----------");
  }

});
