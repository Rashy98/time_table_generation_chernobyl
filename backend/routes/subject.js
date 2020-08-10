const bodyParser = require('body-parser');
const express = require('express');
const router = require('express').Router();

const Subject = require('../models/Subject.model');
const {ipcMain } = require('electron');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.route('/viewSub').get((req, res) => {
    Subject.find()
        .then(managers => res.json(managers))
        .catch(err => res.status(400).json({success: false, err: err}));
});

router.route('/addSub').post((req, res) => {
    //console.log(req.body);

    const NewSubject = new Subject({

        offYear: req.body.offYear,
        offSem: req.body.offSem,
        subject: req.body.subject,
        subjectCode: req.body.subjectCode,
        lecHr: req.body.lecHr,
        tutHr: req.body.tutHr,
        labHr: req.body.labHr,
        eveHr: req.body.eveHr

    });

    NewSubject.save()
        .then(() => res.json('Subject Details added!'))
        .catch(err => res.status(400).json({success: false, err: err}));
});

router.route('/getSub').get((req, res) =>{

    Subject.findOne({subjectCode: req.body.subjectCode})
        .then(result => {
            if(result){
                return res.status(200).json({success: true, result: result})
            } else {
                return res.status(400).json({success: false, result: result})
            }

        })
});

router.route('/:id').delete((req, res) => {
    Subject.findByIdAndDelete(req.params.id)
        .then(() => res.json('Subject Details deleted.'))
        .catch(err => res.status(400).json({success: false, err: err}));
});


module.exports = router;