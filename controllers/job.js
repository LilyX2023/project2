//import dependencies

const express= require('express')
const Job = require('../models/Job')



//Create the router

const router = express.Router()

//Middleware
router.use((req, res, next) => {
    console.table(req.session);
  
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/user/login");
    }
  
    
  });
//Routes

//INDEX
router.get("/", async (req, res) => {
    try {
      //get username from req.session
      const username = req.session.username
      //get all jobs
      const jobs = await Job.find({username});
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
      //user to req.body
      // add username to req.body from req.session
      req.body.username = req.session.username
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