const bodyParser = require('body-parser');

const express = require('express');
const router = require('express').Router();
let Tag = require('../models/Tag.model');
const {ipcMain } = require('electron');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',router);

router.route('/').get((req, res) => {
    Tag.find()
        .then(tags => res.json(tags))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/name').get((req, res) => {
    console.log(req.query.id)
    Tag.findById(req.query.id)
        .then(tags => res.json(tags))
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
router.route('/update/:id').post((req, res) => {
    Tag.findById(req.params.id)
        .then(tag => {
            tag.tag = req.body.tag;


            tag.save()
                .then(() => res.json('Tag updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
