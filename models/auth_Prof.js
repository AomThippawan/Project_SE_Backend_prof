const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
    profName           : {type: String, required: true},
    profEmail          : {type: String, required: true},
    profUsername       : {type: String, required: true},
    profPhone          : {type: String, required: true},
    profPassword       : {type: String, required: true},
    profFaculty        : {type: String, required: true},
    role               : {type: String, required: true}
}, { 
    timestamps: true, 
    versionKey: false 
});

module.exports = mongoose.model("Profs", ProfessorSchema);