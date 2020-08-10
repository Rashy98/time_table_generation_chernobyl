const mongoose = require('mongoose');

const schema = mongoose.Schema;

const LecturerSchema = new schema({

    empID : {
        type: String,
        required: true,
        unique:true,
    },
    fullName : {
        type: String,
        required: true,
        unique:true,
    },
    faculty : {
        type: String,
        required: true,
        unique:true,
    },
    department : {
        type: String,
        required: true,
        unique:true,
    },
    center : {
        type: String,
        required: true,
        unique:true,
    },
    building : {
        type: String,
        required: true,
        unique:true,
    },
    level : {
        type: Number,
        required: true,
        unique:true,
    },
    rank : {
        type: Number,
        required: true,
        unique:true,
    }
});

const Lecturer= mongoose.model('Lecturer',LecturerSchema);

module.exports = Lecturer;