const mongoose = require('mongoose');

const schema = mongoose.Schema;

const StudentSchema = new schema({
    year : {
        type: String,
        required: true,
        unique:true,
    },
    programme:{
        type: String,
        required: true,
        unique:true
    },
    groups:{
        type: String,
        required: true,
        unique:true
    },
    subgroup:{
        type: String,
        required: true,
        unique:true
    },
    groupId:{
        type: String,
        required: true,
        unique:true
    }
});

const Student= mongoose.model('Student',StudentSchema);

module.exports = Student;
