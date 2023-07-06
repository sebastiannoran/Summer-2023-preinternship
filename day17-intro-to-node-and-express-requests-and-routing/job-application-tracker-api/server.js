const express = require("express");
const app = express();
const port = 4000;
const jobs = require("./jobs")

app.get("/", (req, res) => {
  res.send("Welcome to the Job Application Tracker API!!!!!!!!");
});

// List all jobs
app.get("/jobs", (req, res) => {
    // This will eventually return a list of all jobs
  });
  
  // Get a specific job
  app.get("/jobs/:id", (req, res) => {
    // This will eventually return a specific job
  });
  
  // Create a new job
  app.post("/jobs", (req, res) => {
    // This will eventually create a new job
  });
  
  // Update a specific job
  app.patch("/jobs/:id", (req, res) => {
    // This will eventually update a specific job
  });
  
  // Delete a specific job
  app.delete("/jobs/:id", (req, res) => {
    // This will eventually delete a specific job
  });