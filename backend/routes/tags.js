const bodyParser = require('body-parser');

const express = require('express');
const router = require('express').Router();
let Tag = require('../models/Tag.model');
const {ipcMain } = require('electron');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/',router);

router.route('/').get((req, res) => {
    Tag.find()
        .then(managers => res.json(managers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const tag = req.body.tag;
    const newTag = new Tag({tag});
    newTag.save()
        .then(() => res.json('Tag added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Tag.findByIdAndDelete(req.params.id)
        .then(() => res.json('Tag deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
