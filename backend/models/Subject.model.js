const mongoose = require('mongoose');

const schema = mongoose.Schema;

const SubjectSchema = new schema({

    offYear : {
        type: String,
        required: true,
        unique:true,
    },

    offSem : {
        type: String,
        required: true,
        unique:true,
    },

    subject : {
        type: String,
        required: true,
        unique:true,
    },

    subjectCode : {
        type: String,
        required: true,
        unique:true,
    },

    lecHr : {
        type: Number,
        required: true,
        unique:true,
    },

    tutHr : {
        type: Number,
        required: true,
        unique:true,
    },

    labHr : {
        type: Number,
        required: true,
        unique:true,
    },

    eveHr : {
        type: Number,
        required: true,
        unique:true,
    }
});

const Subject= mongoose.model('Subject',SubjectSchema);

module.exports = Subject;