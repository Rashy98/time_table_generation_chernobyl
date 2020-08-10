const bodyParser = require('body-parser');
const express = require('express');
const router = require('express').Router();

let Lecturer = require("../models/Lecturer.model");
const {ipcMain } = require('electron');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.route('/').get((req, res) => {
    Lecturer.find()
        .then(lecturers => res.json(lecturers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/viewLec').get((req, res) => {
    Lecturer.find()
        .then(managers => res.json(managers))
        .catch(err => res.status(400).json({success: false, err: err}));
});

router.route('/addLec').post((req, res) => {
    // console.log(req.body);

    const newLecturer = new Lecturer({
        empID: req.body.empID,
        fullName: req.body.fullName,
        faculty: req.body.faculty,
        department: req.body.department,
        center: req.body.center,
        building: req.body.building,
        level:req.body.level,
        rank:req.body.rank
    });
    console.log(newLecturer);

    newLecturer.save()
        .then(() => res.json({success: true, msg:'Lecturer Details added!'}))
        .catch(err => res.status(400).json({success: false, err: err}));
});

router.route('/getLec').get((req, res) =>{

    Lecturer.findOne({empID: req.body.empID})
        .then(result => {
            if(result){
                return res.status(200).json({success: true, result: result})
            } else {
                return res.status(400).json({success: false, result: result})
            }

        })
});

router.route('/:id').delete((req, res) => {
    Lecturer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Lecturer Details deleted.'))
        .catch(err => res.status(400).json({success: false, err: err}));
});

module.exports = router;
