//import dependencies

const express= require('express')
const Job = require('../models/Job')

//Create the router

const router = express.Router()

//Routes
router.get('/seed', async (req, res) => {
    try {
    //array of jobs
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

    //response
    res.json(jobs)
    } catch (error) {
        res.send('There was error')
    }

})
//INDEX
router.get("/", async (req, res) => {
    try {
      //get all jobs
      const jobs = await Job.find({});
      // render a template
      res.render("index.ejs", {jobs})
     
    } catch (error) {
      console.log("-----", error.message, "------");
      res.status(400).send("error, read logs for details");
    }
  });

//NEW
router.get("/new", (req, res) => {
    res.render("new.ejs")
  })

//CREATE
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
      // expression ? true : false (ternary operator)
      req.body.firstInterview = req.body.firstInterview === "on" ? true : false;//(converting the string to boolean)
      
      req.body.offer = req.body.offer === "on" ? true : false;
      // create the job in the database
      await Job.create(req.body);
      // redirect back to main page
      res.redirect("/job");
    } catch (error) {
      console.log("-----", error.message, "------");
      res.status(400).send("error, read logs for details");
    }
  });

// EDIT 
router.get("/:id/edit", async (req, res) => {
    try {
      // get the id from params
      const id = req.params.id;
      // get the job from the db
      const job = await Job.findById(id);
      //render the template
      res.render("edit.ejs", { job });
    } catch (error) {
      console.log("-----", error.message, "------");
      res.status(400).send("error, read logs for details");
    }
  });
  
  // The Update Route
  router.put("/:id", async (req, res) => {
    try {
      // get the id
      const id = req.params.id;
      // update firstInterview and offer or not in req.body
      req.body.firstInterview = req.body.firstInterview === "on" ? true : false;
      req.body.offer = req.body.offer === "on" ? true : false;
      // update the job in the database
      await Job.findByIdAndUpdate(id, req.body);
      // res.redirect back to show page
      res.redirect(`/job/${id}`);
    } catch (error) {
      console.log("-----", error.message, "------");
      res.status(400).send("error, read logs for details");
    }
  });
  
  // DELETE
  router.delete("/:id", async (req, res) => {
    // get the id
    const id = req.params.id
    // delete the fruit
    await Job.findByIdAndDelete(id)
    // redirect to main page
    res.redirect("/job")
  })

//Show
router.get("/:id", async (req, res) => {
    try{
        // get the id from params
        const id = req.params.id
  
        // find the particular fruit from the database
        const job = await Job.findById(id)
  
        // render the template with the fruit
        res.render("show.ejs", {job})
    }catch(error){
        console.log("-----", error.message, "------")
        res.status(400).send("error, read logs for details")
    }
  })





//Export the Router
module.exports = router