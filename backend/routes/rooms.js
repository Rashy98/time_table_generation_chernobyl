const bodyParser = require('body-parser');

const express = require('express');
const router = require('express').Router();
let Room= require('../models/Room.model');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/',router);

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const building = req.body.building;
    const room = req.body.room;
    const capacity = req.body.capacity;
    const type = req.body.type;
    const newRoom = new Room({building,room,capacity,type});
    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
