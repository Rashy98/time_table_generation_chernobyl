const mongoose = require('mongoose');

const schema = mongoose.Schema;

const TagSchema = new schema({
    tag : {
        type: String,
        required: true,
        unique:true,
    }
});

const Tag= mongoose.model('Tag',TagSchema);

module.exports = Tag;
