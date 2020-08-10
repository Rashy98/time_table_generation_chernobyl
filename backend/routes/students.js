const bodyParser = require('body-parser');

const express = require('express');
const router = require('express').Router();
let Student= require('../models/Student.model');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/',router);

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const year = req.body.year;
    const programme = req.body.programme;
    const groups = req.body.groups;
    const subgroup = req.body.subgroup;
    const groupId = req.body.groupId;
    const newStudent = new Student({year,programme,groups,subgroup,groupId});
    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
