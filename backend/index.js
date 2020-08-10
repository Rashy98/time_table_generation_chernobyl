const {MongoClient} = require('mongodb');
const bodyParser =require( "body-parser");
const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const router = require('express').Router();


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const AddBuilding = require('../backend/routes/buildings');
const AddTag = require('../backend/routes/tags');
const AddStudent = require('../backend/routes/students');



app.use('/building', AddBuilding);
app.use('/tag', AddTag);
app.use('/students', AddStudent);




const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://admin:admin@spmfinalproj.zvpc2.mongodb.net/TimeTableGen?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database Successfully connected");
})
app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
})

