const bodyParser = require('body-parser');
const express = require('express');
const router = require('express').Router();

let Session = require('../models/Session.model');

const {ipcMain } = require('electron');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.route('/viewSession').get((req, res) => {
    Session.find()
        .then(session => res.json(session))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addSession').post((req, res) => {

    const newSession = new Session({
         LecName: req.body.LecName,
         SubName: req.body.SubName,
         SubCode:req.body.SubCode,
         Tag: req.body.Tag,
         GroupOrSubGroupName: req.body.GroupOrSubGroupName,
         NoOfStudents: req.body.NoOfStudents,
         Duration:req.body.Duration,
         UnAvailableTime:req.body.UnAvailableTime,
         ConsecutiveSessionID:req.body.ConsecutiveSessionID,
         Rooms:req.body.Rooms
    });
    console.log(newSession);

    newSession.save()
        .then(() => res.json({newSession}))
        .catch(err => res.status(400).json({success: false, err: err}));
});

// router.route('/getSessionBySubName').get((req, res) =>{
//
//     Session.findOne({SubName: req.body.SubName})
//         .then(result => {
//             if(result){
//                 return res.status(200).json({success: true, result: result})
//             } else {
//                 return res.status(400).json({success: false, result: result})
//             }
//
//         })
// });




module.exports = router;