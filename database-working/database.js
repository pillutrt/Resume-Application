
const express = require('express');
const bodyParser = require("body-parser");
const knex = require('./knex');
const app = express();


const bookshelf = require('bookshelf')(knex)
const Applicant = bookshelf.model('Applicant', {
  tableName: 'applicants',
})

const Manager = bookshelf.model('Manager', {
  tableName: 'managers',
})

const Position = bookshelf.model('Position', {
  tableName: 'positions',
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// To avoid the CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});


//POSTING the applicant details from the server to the database
app.post("/api/applicant", (req, res, next) => {
  const appform = req.body;
  console.log(`app`,appform);
  Applicant.forge({ firstname: appform.firstName, lastname: appform.lastName, email: appform.eMail, jobposition: appform.position}).save().then((Applicant) => {
  console.log(Applicant);})
  return appform;
});

//GETTING the applicant details from the database to the server
app.get("/api/applicant", async(req, res, next) => {
  const applicants = await new Applicant().fetchAll();
  res.json(applicants)
});

//GETTING the roles/job positions available from the database to the server
app.get("/api/getroles", async(req,res,next) => {
  const positions = await new Position().fetchAll();
  res.json(positions)
})


module.exports = app;